export interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Perbandingan Kertas Kemasan Makanan: Ivory, Kraft Coklat, dan Duplex',
    category: 'Material Kemasan',
    date: '15 Juni 2026',
    excerpt: 'Mengenal karakteristik ketebalan gramatur (270 hingga 310 gsm) dan ketahanan minyak pada kertas Ivory food grade, Kraft coklat unbleached, serta Duplex.',
    content: `
      <p>Pemilihan kertas kemasan menentukan kekuatan tumpukan dus saat pengiriman dan keamanan produk pangan di dalamnya. Di fasilitas Workshop SmartprintID Balikpapan Barat, terdapat tiga jenis material utama yang diproduksi setiap hari:</p>
      
      <h4 style="margin-top: 18px; margin-bottom: 8px;">1. Kertas Ivory Food Grade (270 gsm - 300 gsm)</h4>
      <p>Memiliki dua sisi putih bersih (satu sisi luar berlapis glossy/halus untuk hasil cetak tajam, satu sisi dalam matte higienis). Sangat disarankan untuk box kue bolu, martabak manis, donat premium, dan produk kuliner berminyak.</p>
      
      <h4 style="margin-top: 18px; margin-bottom: 8px;">2. Kertas Kraft Coklat Unbleached (275 gsm - 290 gsm)</h4>
      <p>Memiliki serat kayu alami berwarna coklat vintage yang kuat terhadap tarikan lipatan pisau pond. Populer untuk kemasan biji kopi, snack ramah lingkungan, dan paper bag butik.</p>
      
      <h4 style="margin-top: 18px; margin-bottom: 8px;">3. Kertas Duplex Lembaran (250 gsm - 310 gsm)</h4>
      <p>Sisi luar putih halus untuk cetak offset dan sisi dalam abu-abu alami. Pilihan paling ekonomis dan kokoh untuk dus nasi katering partai besar dan box sparepart.</p>
    `,
    image: '/images/rt1.jpg',
    readTime: '3 mnt baca'
  },
  {
    id: 2,
    title: 'Cara Memilih Bahan Stiker Label: Vinyl Tahan Air vs Kromo Glossy',
    category: 'Stiker & Label',
    date: '22 Mei 2026',
    excerpt: 'Panduan menentukan stiker berbahan dasar plastik vinyl untuk botol minuman dingin/frozen food dan stiker kertas kromo untuk toples makanan kering.',
    content: `
      <p>Kesalahan paling umum saat mencetak label kemasan adalah memilih bahan kertas untuk produk yang disimpan di dalam kulkas atau freezer. Berikut ringkasan teknisnya:</p>
      
      <h4 style="margin-top: 18px; margin-bottom: 8px;">Stiker Vinyl (Matte, Glossy, atau Transparan)</h4>
      <p>Terbuat dari material plastik fleksibel sintetis yang 100% tidak sobek terkena air maupun embun pendingin. Wajib digunakan untuk botol kopi susu dingin, sambal kemasan botol, frozen food, dan sabun cair.</p>
      
      <h4 style="margin-top: 18px; margin-bottom: 8px;">Stiker Kromo (Chromo)</h4>
      <p>Terbuat dari bahan dasar kertas berlapis licin dengan daya rekat sangat kuat dan biaya cetak jauh lebih ekonomis. Sangat tepat untuk segel kardus pengiriman, toples kue kering nastar, dan kemasan snack kering.</p>
    `,
    image: '/images/rt2.jpg',
    readTime: '4 mnt baca'
  },
  {
    id: 3,
    title: 'Spesifikasi Ukuran Sablon Cup Minuman Plastik 12 oz hingga 22 oz',
    category: 'Sablon Cup',
    date: '10 April 2026',
    excerpt: 'Standar gramatur ketebalan gelas plastik PP dan PET beserta aturan persiapan file vektor untuk sablon silinder melingkar.',
    content: `
      <p>Bagi pemilik coffee shop dan booth minuman di Balikpapan dan Samarinda, pemilihan ketebalan cup plastik (gramatur 7 gram hingga 8 gram) berpengaruh pada kenyamanan genggaman konsumen dan kerapian sealer tutup cup.</p>
      
      <h4 style="margin-top: 18px; margin-bottom: 8px;">Ukuran Populer:</h4>
      <ul>
        <li><strong>14 oz & 16 oz:</strong> Paling umum digunakan untuk menu es kopi susu, matcha latte, dan teh buah.</li>
        <li><strong>22 oz:</strong> Digunakan untuk porsi jumbo boba tea, thai tea, dan es teh kemasan besar.</li>
      </ul>
      <p style="margin-top: 12px;">Pastikan file logo dikirimkan dalam format vektor (CDR, AI, atau PDF) agar raster cetak sablon silinder tidak pecah.</p>
    `,
    image: '/images/rt4.jpg',
    readTime: '3 mnt baca'
  },
  {
    id: 4,
    title: 'Standar Pisau Pond & Garis Lipatan Dus Kemasan Makanan',
    category: 'Teknis Produksi',
    date: '18 Maret 2026',
    excerpt: 'Bagaimana pisau pond creasing dan die-cut membentuk dus kuncian otomatis (lock bottom) tanpa memerlukan lem tambahan.',
    content: `
      <p>Dus kuncian otomatis (auto-lock bottom) memangkas waktu pengemasan hingga 60% dibanding dus konvensional yang harus direkatkan manual. Di workshop SmartprintID, pisau pond dirakit dengan toleransi 0.5 mm sehingga setiap kuncian mengunci presisi saat dirakit.</p>
    `,
    image: '/images/bhm2.jpg',
    readTime: '5 mnt baca'
  }
];
