export interface Product {
  id: string;
  category: 'kemasan' | 'stiker' | 'promosi' | 'cetak' | 'reklame' | 'souvenir' | 'jasa';
  categoryLabel: string;
  title: string;
  desc: string;
  basePrice: string;
  materials: string[];
  minOrder: string;
  image: string;
  flagship?: boolean;
}

export const CATEGORIES: { id: Product['category']; label: string; desc: string }[] = [
  { id: 'kemasan', label: 'Kemasan (Spesialis Utama)', desc: 'Kotak kue, kotak nasi, kotak oleh-oleh, kardus, dan paper bag.' },
  { id: 'stiker', label: 'Stiker & Label', desc: 'Stiker vinyl, stiker chromo, stiker label, branding, dan cutting sticker.' },
  { id: 'promosi', label: 'Produk Promosi', desc: 'Spanduk, X-banner, roll banner, tripod banner, umbul-umbul, dan poster.' },
  { id: 'cetak', label: 'Produk Cetak', desc: 'Buku, brosur, kalender, nota/blanko, amplop, map, dan continuous form.' },
  { id: 'reklame', label: 'Reklame', desc: 'Neon box, huruf timbul, papan nama toko, dan papan informasi.' },
  { id: 'souvenir', label: 'Souvenir', desc: 'Mug custom, gantungan kunci, tumbler, plakat, dan merchandise kustom.' },
  { id: 'jasa', label: 'Jasa Percetakan', desc: 'Printing, fotokopi, penjilidan dokumen, laminasi, dan finishing.' }
];

export const PRODUCTS: Product[] = [
  // 1. KEMASAN (Spesialisasi Utama Klien)
  {
    id: 'box_kemasan',
    category: 'kemasan',
    categoryLabel: 'Kemasan',
    title: 'Dus Box Makanan & Kotak Kue / Nasi',
    desc: 'Kotak kue, kotak nasi, dan kotak oleh-oleh bahan food grade tahan minyak dengan lipatan pisau pond presisi.',
    basePrice: 'Rp 1.650 / pcs',
    materials: ['Ivory Food Grade 270-300 gsm', 'Kraft Brown 290 gsm', 'Duplex 310 gsm'],
    minOrder: '500 pcs',
    image: '/images/rt1.jpg',
    flagship: true
  },
  {
    id: 'paper_bag',
    category: 'kemasan',
    categoryLabel: 'Kemasan',
    title: 'Paper Bag Toko & Kemasan Butik',
    desc: 'Tas kertas kraft coklat dan art carton laminasi untuk belanjaan oleh-oleh, butik, dan packaging seminar.',
    basePrice: 'Rp 2.200 / pcs',
    materials: ['Kraft Coklat 150 gsm', 'Art Carton 210 gsm + Laminasi', 'Tali Kur / Twisted Handle'],
    minOrder: '300 pcs',
    image: '/images/rt3.jpg'
  },

  // 2. STIKER & LABEL
  {
    id: 'stiker_label',
    category: 'stiker',
    categoryLabel: 'Stiker & Label',
    title: 'Stiker Label Vinyl Tahan Air & Chromo',
    desc: 'Stiker kiss-cut siap tempel untuk botol minuman, toples kue kering, frozen food, dan stiker branding kemasan.',
    basePrice: 'Rp 350 / pcs',
    materials: ['Vinyl Tahan Air', 'Vinyl Transparan', 'Chromo Glossy'],
    minOrder: '100 pcs',
    image: '/images/rt2.jpg',
    flagship: true
  },

  // 3. PRODUK PROMOSI
  {
    id: 'banner_promosi',
    category: 'promosi',
    categoryLabel: 'Produk Promosi',
    title: 'Spanduk, X-Banner & Roll Banner',
    desc: 'Media promosi event dan toko indoor/outdoor. Pemesanan pagi bisa selesai di hari yang sama (same-day).',
    basePrice: 'Rp 65.000 / set',
    materials: ['Flexi Korea 440 gsm', 'Flexi Standar 280 gsm', 'Rangka X-Banner / Roll Up Aluminium'],
    minOrder: '1 pcs',
    image: '/images/bhm1.jpg'
  },

  // 4. PRODUK CETAK
  {
    id: 'map_rapot',
    category: 'cetak',
    categoryLabel: 'Produk Cetak',
    title: 'Map Rapot, Ijazah & Kalender Spiral',
    desc: 'Map ijazah emboss foil emas sudut kuningan, kalender meja/dinding spiral, buku, brosur, dan nota blanko.',
    basePrice: 'Rp 14.500 / pcs',
    materials: ['ASE Busa Tebal Hotprint Emas', 'Art Carton 260 gsm Jilid Kawat', 'NCR 2-3 Rangkap'],
    minOrder: '50 pcs',
    image: '/images/rt6.jpg'
  },

  // 5. REKLAME
  {
    id: 'reklame_akrilik',
    category: 'reklame',
    categoryLabel: 'Reklame',
    title: 'Neon Box, Huruf Timbul & Papan Nama',
    desc: 'Identitas toko luar ruang dari akrilik LED, plat galvanis/kuningan, dan neon box toko tahan cuaca.',
    basePrice: 'Rp 350.000 / m²',
    materials: ['Akrilik 3mm + Modul LED', 'Plat Stainless / Kuningan', 'Rangka Hollow Galvanis'],
    minOrder: '1 unit',
    image: '/images/rt4.jpg'
  },

  // 6. SOUVENIR
  {
    id: 'mug_souvenir',
    category: 'souvenir',
    categoryLabel: 'Souvenir',
    title: 'Mug Custom SNI, Tumbler & Plakat',
    desc: 'Mug keramik sablon, tumbler laser grafir, gantungan kunci, dan plakat akrilik untuk souvenir instansi/komunitas.',
    basePrice: 'Rp 19.500 / pcs',
    materials: ['Keramik SNI Putih', 'Stainless Tumbler', 'Akrilik Grafir Tebal'],
    minOrder: '24 pcs',
    image: '/images/r5.jpg'
  },

  // 7. JASA PERCETAKAN
  {
    id: 'jasa_percetakan',
    category: 'jasa',
    categoryLabel: 'Jasa Percetakan',
    title: 'Jasa Cetak, Fotokopi, Jilid & Laminasi',
    desc: 'Layanan print dokumen massal, fotokopi, jilid softcover/hardcover, laminasi doff/glossy, dan finishing pisau pond.',
    basePrice: 'Mulai Rp 250 / lbr',
    materials: ['HVS 70-80 gsm', 'Laminasi Doff/Glossy Panas', 'Hardcover / Spiral Kawat'],
    minOrder: '1 berkas',
    image: '/images/bhm2.jpg'
  }
];
