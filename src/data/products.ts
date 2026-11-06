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
    title: 'Dus Box Makanan & Kemasan Kuliner',
    desc: 'Box kue, katering, dan oleh-oleh bahan food grade tahan minyak dengan kuncian pisau pond presisi.',
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
    title: 'Stiker Label Botol & Frozen Food',
    desc: 'Stiker kiss-cut siap tempel. Vinyl tahan air untuk minuman dingin/frozen dan kromo glossy untuk toples kering.',
    basePrice: 'Rp 350 / pcs',
    materials: ['Vinyl Tahan Air', 'Vinyl Transparan', 'Chromo Glossy'],
    minOrder: '100 pcs',
    image: '/images/rt2.jpg',
    flagship: true
  },
  {
    id: 'sablon_cup',
    category: 'cup',
    categoryLabel: 'Sablon Cup',
    title: 'Sablon Cup Plastik (12 - 22 oz)',
    desc: 'Sablon melingkar 1-3 warna untuk kedai kopi dan booth minuman. Tinta pekat, presisi, dan anti luntur terkena es.',
    basePrice: 'Rp 380 / pcs',
    materials: ['PP Starindo 7 gr', 'PP Hoki 8 gr', 'Cup PET Bening'],
    minOrder: '1.000 pcs',
    image: '/images/rt4.jpg'
  },
  {
    id: 'paper_bag',
    category: 'paperbag',
    categoryLabel: 'Paper Bag',
    title: 'Paper Bag Kraft & Art Carton',
    desc: 'Tas kertas dengan tali kur atau twisted handle untuk butik, bakery, dan seminar kit.',
    basePrice: 'Rp 2.200 / pcs',
    materials: ['Kraft Coklat 150 gsm', 'Art Carton 210 gsm + Doff', 'Kraft Putih 150 gsm'],
    minOrder: '300 pcs',
    image: '/images/rt3.jpg'
  },
  {
    id: 'map_rapot',
    category: 'map',
    categoryLabel: 'Map Rapot & Ijazah',
    title: 'Map Rapot & Ijazah Foil Emas',
    desc: 'Sampul bahan ASE tebal berlapis busa dengan aksen hotprint emas timbul dan siku kuningan.',
    basePrice: 'Rp 14.500 / pcs',
    materials: ['Bahan ASE Busa Tebal', 'Isi Plastik 10-20 Lembar', 'Sudut Kuningan'],
    minOrder: '50 pcs',
    image: '/images/rt6.jpg'
  },
  {
    id: 'kalender_spiral',
    category: 'souvenir',
    categoryLabel: 'Souvenir & Kalender',
    title: 'Kalender Meja & Dinding Spiral',
    desc: 'Kalender tahunan dengan dudukan board linen hardcover tebal dan jilid kawat spiral.',
    basePrice: 'Rp 18.000 / pcs',
    materials: ['Art Carton 260 gsm', 'Board Linen Hardcover', 'Spiral Kawat'],
    minOrder: '50 pcs',
    image: '/images/rt6.jpg'
  },
  {
    id: 'mug_custom',
    category: 'souvenir',
    categoryLabel: 'Souvenir & Merchandise',
    title: 'Mug Keramik SNI & Enamel Cetak Logo',
    desc: 'Mug keramik dan enamel tahan cuci untuk souvenir kantor, event, dan cinderamata komunitas.',
    basePrice: 'Rp 19.500 / pcs',
    materials: ['Keramik SNI Putih', 'Enamel Klasik', 'Termasuk Box Satuan'],
    minOrder: '24 pcs',
    image: '/images/r5.jpg'
  },
  {
    id: 'reklame_akrilik',
    category: 'souvenir',
    categoryLabel: 'Reklame & Huruf Timbul',
    title: 'Papan Nama Toko & Akrilik LED',
    desc: 'Media identitas luar ruang dari plat aluminium dan akrilik LED untuk ruko, etalase, dan kantor.',
    basePrice: 'Rp 350.000 / m²',
    materials: ['Akrilik 3mm + LED', 'Plat Aluminium/Galvanis', 'Rangka Besi Hollow'],
    minOrder: '1 unit',
    image: '/images/rt4.jpg'
  }
];
