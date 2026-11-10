<?php
/**
 * Plugin Name: SmartprintID - RajaOngkir Live Cost Calculator (Quota-Saver Edition)
 * Description: Integrasi tarif kurir resmi RajaOngkir (Komerce) terhubung langsung dari Workshop SmartprintID Balikpapan Barat (ID: 8649) dengan sistem Multi-Tier Caching untuk menghemat kuota API gratis (100 hit/hari).
 * Version: 1.1.0
 * Author: SmartprintID
 * Author URI: https://smartprint.co.id
 */

if (!defined('ABSPATH')) {
    exit;
}

define('SMARTPRINT_RAJAONGKIR_KEY', 'HhC6hZbC0d37787ba055adc246IWK1br');
define('SMARTPRINT_RAJAONGKIR_BASE', 'https://rajaongkir.komerce.id/api/v1');
define('SMARTPRINT_ORIGIN_ID', '8649'); // Margo Mulyo, Balikpapan Barat (76131)

// Durasi Cache (Hemat Kuota 100 hit/hari):
define('SMARTPRINT_CACHE_COST_TTL', 2 * DAY_IN_SECONDS); // 48 Jam untuk tarif ongkir
define('SMARTPRINT_CACHE_DEST_TTL', 7 * DAY_IN_SECONDS); // 7 Hari untuk nama kecamatan

// 1. Register WP REST API Endpoints
add_action('rest_api_init', function () {
    // Search Destination: /wp-json/smartprint/v1/destination?q=Samarinda
    register_rest_route('smartprint/v1', '/destination', [
        'methods'  => 'GET',
        'callback' => 'smartprint_api_search_destination',
        'permission_callback' => '__return_true'
    ]);

    // Calculate Cost: /wp-json/smartprint/v1/ongkir?destination=8653&weight=1000
    register_rest_route('smartprint/v1', '/ongkir', [
        'methods'  => ['GET', 'POST'],
        'callback' => 'smartprint_api_calculate_cost',
        'permission_callback' => '__return_true'
    ]);
});

/**
 * 1. Search Destination dengan Caching Transient 7 Hari
 */
function smartprint_api_search_destination($request) {
    $q = sanitize_text_field($request->get_param('q') ?: 'Samarinda');
    $q_clean = strtolower(trim($q));

    if (strlen($q_clean) < 3) {
        return rest_ensure_response(['status' => 'success', 'data' => []]);
    }

    $cache_key = 'sp_dest_' . md5($q_clean);
    $cached = get_transient($cache_key);

    if ($cached !== false) {
        return rest_ensure_response([
            'status' => 'success',
            'cached' => true,
            'data'   => $cached
        ]);
    }

    $url = SMARTPRINT_RAJAONGKIR_BASE . '/destination/domestic-destination?search=' . urlencode($q);

    $response = wp_remote_get($url, [
        'timeout' => 8,
        'headers' => [
            'key' => SMARTPRINT_RAJAONGKIR_KEY,
            'User-Agent' => 'SmartprintID-WP/1.0'
        ]
    ]);

    if (is_wp_error($response)) {
        return new WP_Error('api_error', $response->get_error_message(), ['status' => 500]);
    }

    $body = wp_remote_retrieve_body($response);
    $json = json_decode($body, true);
    $data = $json['data'] ?? [];

    if (!empty($data) && is_array($data)) {
        set_transient($cache_key, $data, SMARTPRINT_CACHE_DEST_TTL);
    }

    return rest_ensure_response([
        'status' => 'success',
        'cached' => false,
        'data'   => $data
    ]);
}

/**
 * 2. Calculate Shipping Cost dengan Normalisasi Bobot + Caching 48 Jam
 */
function smartprint_api_calculate_cost($request) {
    $destination = sanitize_text_field($request->get_param('destination') ?: '8653');
    $raw_weight = max(100, intval($request->get_param('weight') ?: 1000));
    
    // Normalisasi berat: Ekspedisi dihitung per-kg bulat (500g, 800g, 1000g -> dihitung 1000g)
    // Ini menghemat kuota karena 500g dan 1000g berbagi 1 cache yang sama!
    $weight_kg = ceil($raw_weight / 1000);
    $normalized_weight = $weight_kg * 1000;

    // Cek Transient Cache
    $cache_key = 'sp_cost_' . $destination . '_' . $normalized_weight;
    $cached_results = get_transient($cache_key);

    if ($cached_results !== false) {
        return rest_ensure_response([
            'status' => 'success',
            'cached' => true,
            'source' => 'wordpress_transient_cache (hemat kuota API)',
            'origin' => 'MARGO MULYO, BALIKPAPAN BARAT (76131)',
            'weight_grams' => $raw_weight,
            'weight_billed_kg' => $weight_kg,
            'results' => $cached_results
        ]);
    }

    // Hanya panggil kurir resmi yang aktif digunakan toko (JNE, J&T, TIKI)
    $couriers = ['jne', 'jnt', 'tiki'];
    $allResults = [];

    foreach ($couriers as $courier) {
        $response = wp_remote_post(SMARTPRINT_RAJAONGKIR_BASE . '/calculate/domestic-cost', [
            'timeout' => 6,
            'headers' => [
                'key' => SMARTPRINT_RAJAONGKIR_KEY,
                'Content-Type' => 'application/x-www-form-urlencoded',
                'User-Agent' => 'SmartprintID-WP/1.0'
            ],
            'body' => [
                'origin' => SMARTPRINT_ORIGIN_ID,
                'destination' => $destination,
                'weight' => $normalized_weight,
                'courier' => $courier
            ]
        ]);

        if (!is_wp_error($response)) {
            $json = json_decode(wp_remote_retrieve_body($response), true);
            if (!empty($json['data']) && is_array($json['data'])) {
                foreach ($json['data'] as $item) {
                    $sName = strtoupper($item['service'] ?? '');
                    $type = 'Reguler';
                    if (strpos($sName, 'YES') !== false || strpos($sName, 'SPS') !== false || strpos($sName, 'ONS') !== false) {
                        $type = 'Express';
                    } elseif (strpos($sName, 'JTR') !== false || strpos($sName, 'CARGO') !== false) {
                        $type = 'Cargo';
                    }

                    $allResults[] = [
                        'courier' => $item['name'] ?? strtoupper($courier),
                        'code' => $courier,
                        'service' => $item['service'],
                        'description' => $item['description'] ?? 'Dari Workshop Balikpapan',
                        'type' => $type,
                        'cost' => $item['cost'],
                        'cost_formatted' => 'Rp ' . number_format($item['cost'], 0, ',', '.'),
                        'etd' => !empty($item['etd']) ? $item['etd'] . ' hari' : '1-3 hari'
                    ];
                }
            }
        }
    }

    if (!empty($allResults)) {
        usort($allResults, function ($a, $b) {
            return $a['cost'] <=> $b['cost'];
        });

        // Simpan ke Cache WordPress selama 48 Jam
        set_transient($cache_key, $allResults, SMARTPRINT_CACHE_COST_TTL);
    }

    return rest_ensure_response([
        'status' => 'success',
        'cached' => false,
        'source' => 'rajaongkir_komerce_live',
        'origin' => 'MARGO MULYO, BALIKPAPAN BARAT (76131)',
        'weight_grams' => $raw_weight,
        'weight_billed_kg' => $weight_kg,
        'results' => $allResults
    ]);
}
