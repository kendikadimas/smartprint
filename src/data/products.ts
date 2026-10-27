export interface Product {
  id: string;
  category: 'kemasan' | 'stiker' | 'cup' | 'paperbag' | 'map' | 'souvenir';
  categoryLabel: string;
  title: string;
  desc: string;
  basePrice: string;
  materials: string[];
  minOrder: string;
  image: string;
  flagship?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'box_kemasan',
    category: 'kemasan',
    categoryLabel: 'Kemasan & Box',
    title: 'Dus Box Makanan & Kemasan Kuliner Food Grade',
    desc: 'Packaging cetak kustom untuk box kue, martabak, donat, katering, dan oleh-oleh khas Balikpapan. Dilengkapi laminasi tahan minyak dan kuncian pisau pond presisi.',
    basePrice: 'Rp 1.650 / pcs',
    materials: ['Ivory 270 gsm', 'Ivory 300 gsm', 'Kraft Brown 290 gsm', 'Duplex 310 gsm'],
    minOrder: '500 pcs',
    image: '/images/rt1.jpg',
    flagship: true
  },
  {
    id: 'stiker_label',
    category: 'stiker',
    categoryLabel: 'Stiker & Label',
    title: 'Stiker Label Botol, Frozen Food & Kemasan',
    desc: 'Cetak stiker potong kiss-cut atau die-cut siap tempel. Material vinyl tahan air untuk minuman dingin dan kromo glossy untuk toples kering.',
    basePrice: 'Rp 350 / pcs',
    materials: ['Vinyl Tahan Air (Matte/Glossy)', 'Vinyl Transparan Bening', 'Chromo Kertas Licin'],
    minOrder: '100 pcs',
    image: '/images/rt2.jpg',
    flagship: true
  },
  {
    id: 'sablon_cup',
    category: 'cup',
    categoryLabel: 'Sablon Cup',
    title: 'Sablon Cup Minuman Plastik Kopi & Boba (12 - 22 oz)',
    desc: 'Sablon silinder melingkar 1 hingga 3 warna untuk kedai kopi dan booth minuman di Balikpapan dan Samarinda. Tinta pekat, anti luntur terkena es.',
    basePrice: 'Rp 380 / pcs',
    materials: ['PP Starindo Tebal 7 gr', 'PP Hoki 8 gr', 'Cup PET Bening Premium'],
    minOrder: '1.000 pcs',
    image: '/images/rt4.jpg'
  },
  {
    id: 'paper_bag',
    category: 'paperbag',
    categoryLabel: 'Paper Bag',
    title: 'Paper Bag Kraft Alami & Art Carton Butik',
    desc: 'Tas kertas ramah lingkungan dengan tali kur atau twisted paper handle. Sering digunakan oleh butik fashion, toko roti, dan seminar instansi.',
    basePrice: 'Rp 2.200 / pcs',
    materials: ['Kraft Coklat 150 gsm', 'Art Carton 210 gsm + Doff', 'Kraft Putih 150 gsm'],
    minOrder: '300 pcs',
    image: '/images/rt3.jpg'
  },
  {
    id: 'map_rapot',
    category: 'map',
    categoryLabel: 'Map Rapot & Ijazah',
    title: 'Map Rapot & Sampul Ijazah Hotprint Foil Emas',
    desc: 'Sampul dokumen sekolah dan universitas berbahan ASE tebal busa dengan aksen cetak hotprint emas timbul (emboss) dan siku kuningan sudut.',
    basePrice: 'Rp 14.500 / pcs',
    materials: ['Bahan ASE Busa Tebal', 'Isi Plastik Doff/Bening 10-20 Lembar', 'Sudut Kuningan'],
    minOrder: '50 pcs',
    image: '/images/rt6.jpg'
  },
  {
    id: 'kalender_spiral',
    category: 'souvenir',
    categoryLabel: 'Souvenir & Kalender',
    title: 'Kalender Meja & Kalender Dinding Spiral Kawat',
    desc: 'Kalender cetak tahunan perusahaan dan yayasan. Dudukan board tebal dilapisi linen hitam mewah dengan jilid kawat spiral kokoh.',
    basePrice: 'Rp 18.000 / pcs',
    materials: ['Art Carton 260 gsm', 'Board Linen Tebal Hardcover', 'Spiral Kawat Putih/Hitam'],
    minOrder: '50 pcs',
    image: '/images/rt6.jpg'
  },
  {
    id: 'mug_custom',
    category: 'souvenir',
    categoryLabel: 'Souvenir & Merchandise',
    title: 'Mug Keramik SNI & Cangkir Enamel Cetak Logo',
    desc: 'Cinderamata tahan cuci untuk merchandise instansi pemerintah, BUMN, perhotelan, dan reuni alumni di Kalimantan Timur.',
    basePrice: 'Rp 19.500 / pcs',
    materials: ['Keramik SNI Standar Putih', 'Enamel Klasik Retro', 'Termasuk Dus Satuan'],
    minOrder: '24 pcs',
    image: '/images/r5.jpg'
  },
  {
    id: 'reklame_akrilik',
    category: 'souvenir',
    categoryLabel: 'Reklame & Huruf Timbul',
    title: 'Papan Nama Ruko, Neon Box & Huruf Timbul Akrilik',
    desc: 'Fabrikasi media luar ruang untuk identitas ruko, etalase toko, dan kantor di area Balikpapan dan IKN Nusantara.',
    basePrice: 'Rp 350.000 / m²',
    materials: ['Akrilik 3mm + Lampu LED', 'Plat Aluminium / Galvanis', 'Rangka Hollow Kuat'],
    minOrder: '1 unit',
    image: '/images/rt4.jpg'
  }
];
