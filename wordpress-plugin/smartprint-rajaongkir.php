<?php
/**
 * Plugin Name: SmartprintID - RajaOngkir Live Cost Calculator
 * Description: Integrasi tarif kurir resmi RajaOngkir (Komerce) terhubung langsung dari Workshop SmartprintID Balikpapan Barat (ID: 8649).
 * Version: 1.0.0
 * Author: SmartprintID
 * Author URI: https://smartprint.co.id
 */

if (!defined('ABSPATH')) {
    exit;
}

define('SMARTPRINT_RAJAONGKIR_KEY', 'HhC6hZbC0d37787ba055adc246IWK1br');
define('SMARTPRINT_RAJAONGKIR_BASE', 'https://rajaongkir.komerce.id/api/v1');
define('SMARTPRINT_ORIGIN_ID', '8649'); // Margo Mulyo, Balikpapan Barat (76131)

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

function smartprint_api_search_destination($request) {
    $q = sanitize_text_field($request->get_param('q') ?: 'Samarinda');
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
    return rest_ensure_response(json_decode($body, true));
}

function smartprint_api_calculate_cost($request) {
    $destination = sanitize_text_field($request->get_param('destination') ?: '8653');
    $weight = max(100, intval($request->get_param('weight') ?: 1000));
    $couriers = ['jne', 'jnt', 'tiki', 'pos'];

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
                'weight' => $weight,
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

    usort($allResults, function ($a, $b) {
        return $a['cost'] <=> $b['cost'];
    });

    return rest_ensure_response([
        'status' => 'success',
        'source' => 'rajaongkir_komerce',
        'origin' => 'MARGO MULYO, BALIKPAPAN BARAT (76131)',
        'weight_grams' => $weight,
        'results' => $allResults
    ]);
}
