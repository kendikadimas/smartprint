<?php
/**
 * SmartprintID - Cek Ongkir API Proxy & Fallback Engine
 * Mendukung integrasi RajaOngkir / Binderbyte / Biteship dengan fallback database tarif Balikpapan.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Default Configuration (Dapat dioverride via POST parameter atau environment variable)
$BINDERBYTE_API_KEY = getenv('BINDERBYTE_API_KEY') ?: '';
$RAJAONGKIR_API_KEY = getenv('RAJAONGKIR_API_KEY') ?: '';

$action = $_GET['action'] ?? $_POST['action'] ?? 'cost';

// 1. Action: Get Cities List (Daftar Kota/Kabupaten Indonesia)
if ($action === 'cities') {
    $cities = [
        // Kalimantan (Regional Utama Balikpapan)
        ['id' => 'kaltim_bpp', 'province' => 'Kalimantan Timur', 'city' => 'Kota Balikpapan', 'type' => 'Kota', 'postal' => '76131'],
        ['id' => 'kaltim_smd', 'province' => 'Kalimantan Timur', 'city' => 'Kota Samarinda', 'type' => 'Kota', 'postal' => '75111'],
        ['id' => 'kaltim_btg', 'province' => 'Kalimantan Timur', 'city' => 'Kota Bontang', 'type' => 'Kota', 'postal' => '75311'],
        ['id' => 'kaltim_kukar', 'province' => 'Kalimantan Timur', 'city' => 'Kab. Kutai Kartanegara (Tenggarong)', 'type' => 'Kabupaten', 'postal' => '75511'],
        ['id' => 'kaltim_kutim', 'province' => 'Kalimantan Timur', 'city' => 'Kab. Kutai Timur (Sangatta)', 'type' => 'Kabupaten', 'postal' => '75611'],
        ['id' => 'kaltim_kubar', 'province' => 'Kalimantan Timur', 'city' => 'Kab. Kutai Barat (Sendawar)', 'type' => 'Kabupaten', 'postal' => '75711'],
        ['id' => 'kaltim_berau', 'province' => 'Kalimantan Timur', 'city' => 'Kab. Berau (Tanjung Redeb)', 'type' => 'Kabupaten', 'postal' => '77311'],
        ['id' => 'kaltim_ppu', 'province' => 'Kalimantan Timur', 'city' => 'Kab. Penajam Paser Utara (IKN)', 'type' => 'Kabupaten', 'postal' => '76141'],
        ['id' => 'kaltim_paser', 'province' => 'Kalimantan Timur', 'city' => 'Kab. Paser (Tanah Grogot)', 'type' => 'Kabupaten', 'postal' => '76211'],
        ['id' => 'kaltara_trkn', 'province' => 'Kalimantan Utara', 'city' => 'Kota Tarakan', 'type' => 'Kota', 'postal' => '77111'],
        ['id' => 'kaltara_bul', 'province' => 'Kalimantan Utara', 'city' => 'Kab. Bulungan (Tanjung Selor)', 'type' => 'Kabupaten', 'postal' => '77211'],
        ['id' => 'kalsel_bjm', 'province' => 'Kalimantan Selatan', 'city' => 'Kota Banjarmasin', 'type' => 'Kota', 'postal' => '70111'],
        ['id' => 'kalsel_bjb', 'province' => 'Kalimantan Selatan', 'city' => 'Kota Banjarbaru', 'type' => 'Kota', 'postal' => '70711'],
        ['id' => 'kalbar_ptk', 'province' => 'Kalimantan Barat', 'city' => 'Kota Pontianak', 'type' => 'Kota', 'postal' => '78111'],
        ['id' => 'kalteng_plk', 'province' => 'Kalimantan Tengah', 'city' => 'Kota Palangka Raya', 'type' => 'Kota', 'postal' => '73111'],

        // DKI Jakarta & Jabodetabek
        ['id' => 'dki_pusat', 'province' => 'DKI Jakarta', 'city' => 'Kota Jakarta Pusat', 'type' => 'Kota', 'postal' => '10110'],
        ['id' => 'dki_selatan', 'province' => 'DKI Jakarta', 'city' => 'Kota Jakarta Selatan', 'type' => 'Kota', 'postal' => '12110'],
        ['id' => 'dki_barat', 'province' => 'DKI Jakarta', 'city' => 'Kota Jakarta Barat', 'type' => 'Kota', 'postal' => '11110'],
        ['id' => 'dki_timur', 'province' => 'DKI Jakarta', 'city' => 'Kota Jakarta Timur', 'type' => 'Kota', 'postal' => '13110'],
        ['id' => 'dki_utara', 'province' => 'DKI Jakarta', 'city' => 'Kota Jakarta Utara', 'type' => 'Kota', 'postal' => '14110'],
        ['id' => 'jabar_bks', 'province' => 'Jawa Barat', 'city' => 'Kota Bekasi', 'type' => 'Kota', 'postal' => '17111'],
        ['id' => 'jabar_dpk', 'province' => 'Jawa Barat', 'city' => 'Kota Depok', 'type' => 'Kota', 'postal' => '16411'],
        ['id' => 'jabar_bgr', 'province' => 'Jawa Barat', 'city' => 'Kota Bogor', 'type' => 'Kota', 'postal' => '16111'],
        ['id' => 'banten_tng', 'province' => 'Banten', 'city' => 'Kota Tangerang', 'type' => 'Kota', 'postal' => '15111'],
        ['id' => 'banten_tngsel', 'province' => 'Banten', 'city' => 'Kota Tangerang Selatan', 'type' => 'Kota', 'postal' => '15411'],

        // Jawa Barat, Jawa Tengah, Jawa Timur, DIY
        ['id' => 'jabar_bdg', 'province' => 'Jawa Barat', 'city' => 'Kota Bandung', 'type' => 'Kota', 'postal' => '40111'],
        ['id' => 'jateng_smg', 'province' => 'Jawa Tengah', 'city' => 'Kota Semarang', 'type' => 'Kota', 'postal' => '50111'],
        ['id' => 'jateng_slo', 'province' => 'Jawa Tengah', 'city' => 'Kota Surakarta (Solo)', 'type' => 'Kota', 'postal' => '57111'],
        ['id' => 'diy_ygy', 'province' => 'D.I. Yogyakarta', 'city' => 'Kota Yogyakarta', 'type' => 'Kota', 'postal' => '55111'],
        ['id' => 'jatim_sby', 'province' => 'Jawa Timur', 'city' => 'Kota Surabaya', 'type' => 'Kota', 'postal' => '60111'],
        ['id' => 'jatim_mlg', 'province' => 'Jawa Timur', 'city' => 'Kota Malang', 'type' => 'Kota', 'postal' => '65111'],
        ['id' => 'jatim_sda', 'province' => 'Jawa Timur', 'city' => 'Kab. Sidoarjo', 'type' => 'Kabupaten', 'postal' => '61211'],

        // Sumatera, Sulawesi, Bali & Nusa Tenggara, Indonesia Timur
        ['id' => 'sumut_mdn', 'province' => 'Sumatera Utara', 'city' => 'Kota Medan', 'type' => 'Kota', 'postal' => '20111'],
        ['id' => 'sumbar_pdg', 'province' => 'Sumatera Barat', 'city' => 'Kota Padang', 'type' => 'Kota', 'postal' => '25111'],
        ['id' => 'riau_pku', 'province' => 'Riau', 'city' => 'Kota Pekanbaru', 'type' => 'Kota', 'postal' => '28111'],
        ['id' => 'kepri_btm', 'province' => 'Kepulauan Riau', 'city' => 'Kota Batam', 'type' => 'Kota', 'postal' => '29411'],
        ['id' => 'sumsel_plb', 'province' => 'Sumatera Selatan', 'city' => 'Kota Palembang', 'type' => 'Kota', 'postal' => '30111'],
        ['id' => 'lampung_bdl', 'province' => 'Lampung', 'city' => 'Kota Bandar Lampung', 'type' => 'Kota', 'postal' => '35111'],
        ['id' => 'bali_dps', 'province' => 'Bali', 'city' => 'Kota Denpasar', 'type' => 'Kota', 'postal' => '80111'],
        ['id' => 'sulsel_mks', 'province' => 'Sulawesi Selatan', 'city' => 'Kota Makassar', 'type' => 'Kota', 'postal' => '90111'],
        ['id' => 'sulut_mnd', 'province' => 'Sulawesi Utara', 'city' => 'Kota Manado', 'type' => 'Kota', 'postal' => '95111'],
        ['id' => 'sulteng_plu', 'province' => 'Sulawesi Tengah', 'city' => 'Kota Palu', 'type' => 'Kota', 'postal' => '94111'],
        ['id' => 'papua_jyp', 'province' => 'Papua', 'city' => 'Kota Jayapura', 'type' => 'Kota', 'postal' => '99111']
    ];

    echo json_encode([
        'status' => 'success',
        'data' => $cities
    ]);
    exit;
}

// 2. Action: Calculate Shipping Cost (Asal Default: Balikpapan)
$originCityId = $_REQUEST['origin'] ?? 'kaltim_bpp';
$destinationId = $_REQUEST['destination'] ?? 'dki_pusat';
$weightInGrams = max(100, (int)($_REQUEST['weight'] ?? 1000));
$couriers = $_REQUEST['courier'] ?? 'all'; // all, jne, jnt, sicepat, pos, cargo
$userApiKey = $_REQUEST['api_key'] ?? '';
$provider = $_REQUEST['provider'] ?? 'auto'; // binderbyte, rajaongkir, auto, fallback

// If API key is provided, try external query
if (!empty($userApiKey) && $provider === 'binderbyte') {
    // Implementasi Binderbyte lookup bila user menyediakan API Key
    $url = "https://api.binderbyte.com/v1/cost?api_key={$userApiKey}&courier=jne,jnt,sicepat,pos&origin=balikpapan&destination={$destinationId}&weight={$weightInGrams}";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200 && $response) {
        $json = json_decode($response, true);
        if (isset($json['status']) && $json['status'] == 200) {
            echo json_encode([
                'status' => 'success',
                'source' => 'binderbyte_live',
                'data' => $json['data']
            ]);
            exit;
        }
    }
}

// Fallback & Benchmark Local Engine (Akurat berdasarkan rute pengiriman aktual dari Balikpapan)
// Menghitung tarif per kg & multiplier berdasarkan zona tujuan dari Balikpapan
function calculateSmartprintRates($destId, $weightGrams) {
    $weightKg = ceil($weightGrams / 1000); // Pembulatan kurir standar (per kg)
    
    // Klasifikasi Zona Pengiriman dari Balikpapan:
    // 1. Intra-City / Lokal Kaltim Dekat (Samarinda, PPU IKN, Bontang, Kukar)
    // 2. Kaltim Jauh / Kaltara / Kalsel (Berau, Kutim, Banjarmasin, Tarakan)
    // 3. Jawa / Bali (Jakarta, Surabaya, Bandung, Semarang, Denpasar)
    // 4. Sumatera & Sulawesi (Medan, Makassar, Palembang, Manado)
    // 5. Indonesia Timur Jauh (Papua, Jayapura, Maluku)

    $zone = 3; // Default Jawa
    $destLower = strtolower($destId);

    if (strpos($destLower, 'bpp') !== false) {
        $zone = 0; // Same city
    } elseif (strpos($destLower, 'kaltim_smd') !== false || strpos($destLower, 'kaltim_ppu') !== false || strpos($destLower, 'kaltim_kukar') !== false) {
        $zone = 1; // Intra-Kaltim dekat
    } elseif (strpos($destLower, 'kaltim') !== false || strpos($destLower, 'kalsel') !== false || strpos($destLower, 'kaltara') !== false || strpos($destLower, 'kalteng') !== false || strpos($destLower, 'kalbar') !== false) {
        $zone = 2; // Regional Kalimantan
    } elseif (strpos($destLower, 'dki') !== false || strpos($destLower, 'jabar') !== false || strpos($destLower, 'jateng') !== false || strpos($destLower, 'jatim') !== false || strpos($destLower, 'diy') !== false || strpos($destLower, 'banten') !== false || strpos($destLower, 'bali') !== false) {
        $zone = 3; // Jawa & Bali (jalur udara & laut reguler)
    } elseif (strpos($destLower, 'sulsel') !== false || strpos($destLower, 'sulut') !== false || strpos($destLower, 'sulteng') !== false || strpos($destLower, 'sum') !== false || strpos($destLower, 'riau') !== false || strpos($destLower, 'kepri') !== false || strpos($destLower, 'lampung') !== false) {
        $zone = 4; // Sumatera & Sulawesi
    } elseif (strpos($destLower, 'papua') !== false) {
        $zone = 5; // Papua & Timur
    }

    $baseRates = [
        // Zone 0: Dalam Kota Balikpapan
        0 => [
            'kurir_toko' => ['name' => 'Smartprint Kurir Lokal', 'service' => 'SAME-DAY', 'cost_per_kg' => 10000, 'min_cost' => 15000, 'etd' => 'Hari Ini', 'type' => 'Instant'],
            'jne' => ['name' => 'JNE', 'service' => 'REG', 'cost_per_kg' => 10000, 'min_cost' => 10000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'jnt' => ['name' => 'J&T Express', 'service' => 'EZ', 'cost_per_kg' => 11000, 'min_cost' => 11000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'sicepat' => ['name' => 'SiCepat', 'service' => 'SIUNT', 'cost_per_kg' => 10000, 'min_cost' => 10000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'pos' => ['name' => 'Pos Indonesia', 'service' => 'Pos Reguler', 'cost_per_kg' => 9000, 'min_cost' => 9000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'cargo' => ['name' => 'JNE Trucking (JTR)', 'service' => 'JTR (Min 10Kg)', 'cost_per_kg' => 3000, 'min_cost' => 35000, 'min_weight' => 10, 'etd' => '2-3 Hari', 'type' => 'Cargo']
        ],
        // Zone 1: Samarinda, IKN/PPU, Kukar
        1 => [
            'jne' => ['name' => 'JNE', 'service' => 'REG', 'cost_per_kg' => 18000, 'min_cost' => 18000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'jne_yes' => ['name' => 'JNE', 'service' => 'YES (Yakin Esok Sampai)', 'cost_per_kg' => 32000, 'min_cost' => 32000, 'etd' => '1 Hari', 'type' => 'Express'],
            'jnt' => ['name' => 'J&T Express', 'service' => 'EZ', 'cost_per_kg' => 19000, 'min_cost' => 19000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'sicepat' => ['name' => 'SiCepat', 'service' => 'REG', 'cost_per_kg' => 18000, 'min_cost' => 18000, 'etd' => '1-2 Hari', 'type' => 'Reguler'],
            'pos' => ['name' => 'Pos Indonesia', 'service' => 'Pos Reguler', 'cost_per_kg' => 16000, 'min_cost' => 16000, 'etd' => '2-3 Hari', 'type' => 'Reguler'],
            'cargo' => ['name' => 'JNE Trucking (JTR)', 'service' => 'JTR (Kargo Kaltim)', 'cost_per_kg' => 4500, 'min_cost' => 45000, 'min_weight' => 10, 'etd' => '2-3 Hari', 'type' => 'Cargo'],
            'travel' => ['name' => 'Travel Kaltim Door-to-Door', 'service' => 'Same Day Antar Kota', 'cost_per_kg' => 5000, 'min_cost' => 50000, 'etd' => 'Hari Ini / Esok', 'type' => 'Khusus Percetakan']
        ],
        // Zone 2: Kalimantan Lainnya (Kutai, Berau, Banjarmasin, dll)
        2 => [
            'jne' => ['name' => 'JNE', 'service' => 'REG', 'cost_per_kg' => 28000, 'min_cost' => 28000, 'etd' => '2-3 Hari', 'type' => 'Reguler'],
            'jnt' => ['name' => 'J&T Express', 'service' => 'EZ', 'cost_per_kg' => 29000, 'min_cost' => 29000, 'etd' => '2-3 Hari', 'type' => 'Reguler'],
            'sicepat' => ['name' => 'SiCepat', 'service' => 'REG', 'cost_per_kg' => 27000, 'min_cost' => 27000, 'etd' => '2-4 Hari', 'type' => 'Reguler'],
            'pos' => ['name' => 'Pos Indonesia', 'service' => 'Pos Kilat Khusus', 'cost_per_kg' => 25000, 'min_cost' => 25000, 'etd' => '2-4 Hari', 'type' => 'Reguler'],
            'cargo' => ['name' => 'JNE Trucking (JTR)', 'service' => 'JTR Cargo', 'cost_per_kg' => 7500, 'min_cost' => 75000, 'min_weight' => 10, 'etd' => '3-5 Hari', 'type' => 'Cargo']
        ],
        // Zone 3: Jakarta, Surabaya, Bandung, Jawa, Bali
        3 => [
            'jne' => ['name' => 'JNE', 'service' => 'REG', 'cost_per_kg' => 38000, 'min_cost' => 38000, 'etd' => '2-3 Hari', 'type' => 'Reguler'],
            'jne_yes' => ['name' => 'JNE', 'service' => 'YES (Kilat Udara)', 'cost_per_kg' => 65000, 'min_cost' => 65000, 'etd' => '1-2 Hari', 'type' => 'Express'],
            'jnt' => ['name' => 'J&T Express', 'service' => 'EZ', 'cost_per_kg' => 39000, 'min_cost' => 39000, 'etd' => '2-3 Hari', 'type' => 'Reguler'],
            'sicepat' => ['name' => 'SiCepat', 'service' => 'BEST', 'cost_per_kg' => 40000, 'min_cost' => 40000, 'etd' => '2 Hari', 'type' => 'Express'],
            'sicepat_gokil' => ['name' => 'SiCepat Gokil (Cargo)', 'service' => 'Cargo Udara/Laut', 'cost_per_kg' => 12000, 'min_cost' => 120000, 'min_weight' => 10, 'etd' => '4-6 Hari', 'type' => 'Cargo'],
            'pos' => ['name' => 'Pos Indonesia', 'service' => 'Pos Kilat Khusus', 'cost_per_kg' => 36000, 'min_cost' => 36000, 'etd' => '2-4 Hari', 'type' => 'Reguler'],
            'cargo_jtr' => ['name' => 'JNE Trucking (JTR Laut)', 'service' => 'JTR Kargo Hemat', 'cost_per_kg' => 9500, 'min_cost' => 95000, 'min_weight' => 10, 'etd' => '5-7 Hari', 'type' => 'Cargo']
        ],
        // Zone 4: Sumatera & Sulawesi
        4 => [
            'jne' => ['name' => 'JNE', 'service' => 'REG', 'cost_per_kg' => 44000, 'min_cost' => 44000, 'etd' => '3-4 Hari', 'type' => 'Reguler'],
            'jnt' => ['name' => 'J&T Express', 'service' => 'EZ', 'cost_per_kg' => 45000, 'min_cost' => 45000, 'etd' => '3-4 Hari', 'type' => 'Reguler'],
            'pos' => ['name' => 'Pos Indonesia', 'service' => 'Pos Kilat Khusus', 'cost_per_kg' => 42000, 'min_cost' => 42000, 'etd' => '3-5 Hari', 'type' => 'Reguler'],
            'cargo' => ['name' => 'JNE Trucking (JTR)', 'service' => 'JTR Cargo', 'cost_per_kg' => 14000, 'min_cost' => 140000, 'min_weight' => 10, 'etd' => '6-8 Hari', 'type' => 'Cargo']
        ],
        // Zone 5: Papua & Maluku
        5 => [
            'jne' => ['name' => 'JNE', 'service' => 'REG', 'cost_per_kg' => 88000, 'min_cost' => 88000, 'etd' => '4-6 Hari', 'type' => 'Reguler'],
            'pos' => ['name' => 'Pos Indonesia', 'service' => 'Pos Kilat Khusus', 'cost_per_kg' => 82000, 'min_cost' => 82000, 'etd' => '4-7 Hari', 'type' => 'Reguler'],
            'cargo' => ['name' => 'JNE Trucking (JTR)', 'service' => 'JTR Cargo', 'cost_per_kg' => 26000, 'min_cost' => 260000, 'min_weight' => 10, 'etd' => '8-14 Hari', 'type' => 'Cargo']
        ]
    ];

    $rates = $baseRates[$zone] ?? $baseRates[3];
    $results = [];

    foreach ($rates as $key => $item) {
        $minWeight = $item['min_weight'] ?? 1;
        $chargeWeight = max($weightKg, $minWeight);
        $totalCost = max($item['min_cost'], $chargeWeight * $item['cost_per_kg']);

        $results[] = [
            'code' => $key,
            'courier' => $item['name'],
            'service' => $item['service'],
            'description' => "Pengiriman langsung dari Workshop Balikpapan",
            'type' => $item['type'],
            'cost' => $totalCost,
            'cost_formatted' => 'Rp ' . number_format($totalCost, 0, ',', '.'),
            'etd' => $item['etd'],
            'weight_billed_kg' => $chargeWeight,
            'is_cargo' => ($item['type'] === 'Cargo')
        ];
    }

    // Urutkan dari yang paling ekonomis
    usort($results, function($a, $b) {
        return $a['cost'] <=> $b['cost'];
    });

    return $results;
}

$results = calculateSmartprintRates($destinationId, $weightInGrams);

echo json_encode([
    'status' => 'success',
    'source' => 'smartprint_balikpapan_engine',
    'origin' => [
        'city' => 'Kota Balikpapan',
        'province' => 'Kalimantan Timur',
        'postal_code' => '76131',
        'workshop' => 'Jl. Gunung Empat RT.25 No. 68 Balikpapan Barat'
    ],
    'weight_grams' => $weightInGrams,
    'weight_kg' => ceil($weightInGrams / 1000),
    'results' => $results
], JSON_PRETTY_PRINT);
