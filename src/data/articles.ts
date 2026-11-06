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
    title: 'Perbandingan Kertas Dus: Ivory, Kraft Coklat, dan Duplex',
    category: 'Material Kemasan',
    date: '15 Jun 2026',
    excerpt: 'Karakteristik ketebalan dan ketahanan minyak pada kertas Ivory food grade, Kraft unbleached, dan Duplex lembaran.',
    content: `
      <p>Pemilihan kertas menentukan kekuatan tumpukan dus dan keamanan produk di dalamnya:</p>
      <h4 style="margin-top: 14px; margin-bottom: 6px;">1. Kertas Ivory (270 - 300 gsm)</h4>
      <p>Dua sisi putih higienis (luar glossy halus, dalam matte). Pilihan standar untuk box kue, donat, martabak, dan kuliner berminyak.</p>
      <h4 style="margin-top: 14px; margin-bottom: 6px;">2. Kertas Kraft Coklat (275 - 290 gsm)</h4>
      <p>Serat kayu alami coklat yang kuat dan ramah lingkungan. Populer untuk kemasan biji kopi, snack kering, dan paper bag butik.</p>
      <h4 style="margin-top: 14px; margin-bottom: 6px;">3. Kertas Duplex (250 - 310 gsm)</h4>
      <p>Luar putih halus, dalam abu-abu. Pilihan ekonomis dan kokoh untuk dus nasi katering partai besar.</p>
    `,
    image: '/images/rt1.jpg',
    readTime: '3 mnt baca'
  },
  {
    id: 2,
    title: 'Memilih Stiker Label: Vinyl Tahan Air vs Kromo Glossy',
    category: 'Stiker & Label',
    date: '22 Mei 2026',
    excerpt: 'Panduan stiker plastik vinyl untuk botol minuman dingin/frozen food dan kromo kertas untuk kemasan kering.',
    content: `
      <p>Hindari salah pilih bahan label kemasan:</p>
      <h4 style="margin-top: 14px; margin-bottom: 6px;">Stiker Vinyl (Matte, Glossy, Transparan)</h4>
      <p>Bahan plastik sintetis fleksibel, anti air, dan tidak sobek terkena embun pendingin. Wajib untuk botol kopi, sambal, frozen food, dan sabun cair.</p>
      <h4 style="margin-top: 14px; margin-bottom: 6px;">Stiker Kromo (Chromo)</h4>
      <p>Bahan kertas berlapis licin dengan daya rekat kuat dan biaya hemat. Tepat untuk segel dus kemasan dan toples kue kering.</p>
    `,
    image: '/images/rt2.jpg',
    readTime: '3 mnt baca'
  },
  {
    id: 3,
    title: 'Standar Ukuran Sablon Cup Minuman 12 oz hingga 22 oz',
    category: 'Sablon Cup',
    date: '10 Apr 2026',
    excerpt: 'Ketebalan gramatur gelas plastik PP dan PET beserta format file vektor untuk sablon silinder melingkar.',
    content: `
      <p>Standar cup untuk kedai minuman:</p>
      <ul>
        <li><strong>14 &amp; 16 oz:</strong> Paling umum untuk es kopi susu, teh, dan minuman kekinian.</li>
        <li><strong>22 oz:</strong> Ukuran jumbo untuk boba tea dan thai tea porsi besar.</li>
      </ul>
      <p style="margin-top: 10px;">Gunakan file vektor (CDR, AI, atau PDF) agar garis sablon silinder tajam dan tidak pecah.</p>
    `,
    image: '/images/rt4.jpg',
    readTime: '2 mnt baca'
  },
  {
    id: 4,
    title: 'Standar Pisau Pond & Garis Lipatan Box Kuncian',
    category: 'Teknis Produksi',
    date: '18 Mar 2026',
    excerpt: 'Cara kerja pisau pond creasing dan die-cut membentuk dus kuncian otomatis (lock bottom) tanpa lem.',
    content: `
      <p>Dus kuncian otomatis memangkas waktu packing hingga 60%. Pisau pond di workshop dirakit dengan toleransi 0.5 mm agar kuncian presisi dan kokoh saat dirakit.</p>
    `,
    image: '/images/bhm2.jpg',
    readTime: '2 mnt baca'
  }
];
