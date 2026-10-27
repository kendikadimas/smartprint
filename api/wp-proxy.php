<?php
/**
 * SmartprintID - WordPress REST API Proxy & Cache
 * Menjembatani request Headless ke smartprint.co.id/wp-json tanpa terkena hambatan CORS browser
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$endpoint = $_GET['endpoint'] ?? 'posts';
$perPage = min(20, max(1, (int)($_GET['per_page'] ?? 10)));
$wpBaseUrl = rtrim($_GET['wp_url'] ?? 'https://smartprint.co.id/wp-json', '/');

$targetUrl = "{$wpBaseUrl}/wp/v2/{$endpoint}?per_page={$perPage}&_embed=1";

$cacheFile = __DIR__ . "/cache_{$endpoint}_{$perPage}.json";

// Gunakan cache jika masih baru (< 3 jam)
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < 10800)) {
    $cached = file_get_contents($cacheFile);
    if (!empty($cached)) {
        echo $cached;
        exit;
    }
}

// Fetch dari WordPress Live
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 8);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_USERAGENT, 'SmartprintHeadless/1.0');
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200 && !empty($response)) {
    @file_put_contents($cacheFile, $response);
    echo $response;
    exit;
}

// Fallback jika API WordPress Smartprint sedang offline/maintenance
$fallbackData = [
    'posts' => [
        [
            'id' => 101,
            'title' => ['rendered' => 'Tips Memilih Bahan Kemasan Makanan (Food Grade Packaging) yang Tepat untuk UMKM'],
            'excerpt' => ['rendered' => '<p>Kemasan bukan hanya pelindung produk, melainkan media branding pertama yang disentuh konsumen. Kenali perbedaan Ivory, Kraft, dan Duplex untuk brand Anda.</p>'],
            'date' => '2026-02-15T09:00:00',
            'link' => 'https://smartprint.co.id/blog/tips-memilih-bahan-kemasan-makanan/'
        ],
        [
            'id' => 102,
            'title' => ['rendered' => 'Panduan Cetak Stiker Label Kemasan: Vinyl Anti Air vs Kromo Ekonomis'],
            'excerpt' => ['rendered' => '<p>Pahami kapan harus menggunakan stiker vinyl tahan air atau stiker kromo dengan finishing laminasi untuk produk frozen food dan minuman dingin.</p>'],
            'date' => '2026-01-20T10:30:00',
            'link' => 'https://smartprint.co.id/blog/panduan-cetak-stiker-label/'
        ],
        [
            'id' => 103,
            'title' => ['rendered' => 'Eksklusif: Keunggulan Teknik Cetak Poly Emas & Emboss pada Map Rapot dan Ijazah'],
            'excerpt' => ['rendered' => '<p>Memberikan kesan mewah dan resmi pada dokumen kelulusan instansi Anda melalui hot stamping foil emas dan cetak timbul di SmartprintID Balikpapan.</p>'],
            'date' => '2025-11-10T14:15:00',
            'link' => 'https://smartprint.co.id/blog/teknik-cetak-poly-emboss/'
        ]
    ],
    'pages' => [
        [
            'id' => 201,
            'title' => ['rendered' => 'Tentang Kami - Produsen Percetakan Balikpapan'],
            'content' => ['rendered' => 'SmartprintID adalah produsen cetak langsung dengan fasilitas workshop terintegrasi di Balikpapan Barat.']
        ]
    ]
];

echo json_encode($fallbackData[$endpoint] ?? [], JSON_PRETTY_PRINT);
