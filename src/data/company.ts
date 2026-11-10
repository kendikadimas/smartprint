export interface Machine {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  specs: string;
  desc: string;
}

export interface EquipmentCategory {
  categoryName: string;
  items: { name: string; desc: string }[];
}

export interface ValueItem {
  number: string;
  title: string;
  desc: string;
}

export interface LeaderItem {
  role: string;
  name: string;
  titleSuffix?: string;
  level: 'board' | 'management';
}

export interface ClientPartner {
  name: string;
  category: 'BUMN & Lembaga' | 'Korporat & Industri' | 'F&B & Ritel';
  logo?: string;
}

// 1. Featured Production Machines with authentic photos
export const FEATURED_MACHINES: Machine[] = [
  {
    id: 'heidelberg-sorm72',
    name: 'Mesin Offset Heidelberg SORM 72',
    category: 'Offset Sheetfed Press',
    image: '/images/machines/heidelberg-sorm72.jpg',
    badge: 'Produksi Partai Besar',
    specs: 'Kapasitas ribuan lembar/jam, akurasi register tinggi, kestabilan warna CMYK',
    desc: 'Mesin offset lembaran standar industri internasional untuk mencetak dus makanan, kalender, paper bag, dan materi komersial dengan warna presisi.'
  },
  {
    id: 'mesin-pond-92x66',
    name: 'Mesin Pond 92 x 66 (Die-Cut)',
    category: 'Pond & Creasing Kemasan',
    image: '/images/machines/mesin-pond-92x66.jpg',
    badge: 'Spesialis Dus & Karton',
    specs: 'Area kerja 92 x 66 cm, pisau pond presisi, garis tekuk lipatan rapi',
    desc: 'Mesin pond bertenaga besar untuk memotong pola kemasan dus kue, kotak nasi, kardus, dan paper bag siap rakit tanpa serabut.'
  },
  {
    id: 'fuji-xerox-b9100',
    name: 'Mesin Fuji Xerox B9100',
    category: 'High-Speed Digital Press',
    image: '/images/machines/fuji-xerox-b9100.jpg',
    badge: 'Digital Press Cepat',
    specs: 'Kecepatan tinggi, resolusi teks monokrom tajam 2400 dpi, auto-duplex',
    desc: 'Solusi produksi cepat untuk pencetakan buku, nota/blanko, continuous form, dan dokumen korporasi dalam jumlah ribuan lembar per hari.'
  },
  {
    id: 'fuji-xerox-docucentre-vii3372',
    name: 'Fuji Xerox DocuCentre-VII3372',
    category: 'Full-Color Digital Graphic',
    image: '/images/machines/fuji-xerox-docucentre-vii3372.jpg',
    badge: 'Full Color Grafis Tajam',
    specs: 'Warna CMYK pekat, mendukung Art Carton s/d 310gsm, proofing akurat',
    desc: 'Digital press warna untuk cetak stiker vinyl anti air, kartu nama, poster promosi, brosur express, dan sampel dummy sebelum cetak massal.'
  },
  {
    id: 'mesin-jilid-lem',
    name: 'Mesin Jilid Lem Mesinoke BM300',
    category: 'Automatic Book Binding',
    image: '/images/machines/mesin-jilid-lem.jpg',
    badge: 'Jilid Lem Panas Otomatis',
    specs: 'Full-Automatic Glue Binding, daya rekat kuat hotmelt, milling punggung buku',
    desc: 'Menghasilkan jilid buku tahunan, laporan instansi, novel, dan katalog dengan punggung kotak tegak dan lem yang tidak mudah rontok.'
  },
  {
    id: 'mesin-laminasi-roll',
    name: 'Mesin Laminasi PLD Digital Roll',
    category: 'Thermal Roll Laminator',
    image: '/images/machines/mesin-laminasi-roll.jpg',
    badge: 'Lapisan Doff & Glossy',
    specs: 'Tekanan silinder stabil, pemanas ganda anti-kerut, daya rekat tinggi',
    desc: 'Memberikan lapisan pelindung anti air dan anti gores pada dus kemasan, cover buku, dan stiker label makanan tahan minyak.'
  }
];

// 2. Full 20+ Production Machines List from Company Profile
export const WORKSHOP_EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    categoryName: 'Cetak Offset & Digital Press',
    items: [
      { name: 'Mesin Heidelberg SORM 72', desc: 'Mesin offset lembaran komersial untuk cetak dus, kalender, brosur volume besar.' },
      { name: 'Mesin Cetak Offset Ryobi 500K', desc: 'Offset presisi untuk blanko, nota, formulir, dan cetakan komersial.' },
      { name: 'Mesin Cetak Fuji Xerox B9100', desc: 'Digital press monokrom berkecepatan tinggi untuk buku, dokumen & form.' },
      { name: 'Mesin Fuji Xerox DocuCentre-VII3372', desc: 'Digital press warna kualitas grafis untuk stiker, poster, dan proofing.' },
      { name: 'Mesin Cetak Sublim Epson SureColor F130', desc: 'Printer sublimasi khusus transfer media tekstil, mug, dan suvenir.' },
      { name: 'Mesin Pembuatan Plat Cetak', desc: 'Unit pembuatan plat cetak offset untuk akurasi raster dan register warna.' }
    ]
  },
  {
    categoryName: 'Pond, Cutting & Die-Cut Kemasan',
    items: [
      { name: 'Mesin Pond 92 x 66', desc: 'Pond kemasan karton, box kue, kardus katering, dan lubang handle paper bag.' },
      { name: 'Mesin Pemotong Stiker A3+ Rhinotec RC 32 ASC', desc: 'Cutting sticker lembaran A3+ dengan sensor optik presisi tinggi.' },
      { name: 'Mesin Pemotong Stiker Roll Rhinotec RC 60', desc: 'Cutting sticker bahan roll meteran untuk branding label botol & kemasan.' },
      { name: 'Mesin Potong Kertas DQ 201', desc: 'Mesin potong hidrolik otomatis untuk kerapian tepi cetakan dan potong ukuran presisi.' },
      { name: 'Mesin Pingul Sudut Oval', desc: 'Membuat sudut membulat/oval pada kartu nama, hangtag, dan kartu identitas.' }
    ]
  },
  {
    categoryName: 'Finishing, Penjilidan & Laminasi',
    items: [
      { name: 'Mesin Jilid Lem Otomatis Mesinoke BM300', desc: 'Penjilidan lem panas (perfect binding) untuk buku, katalog, majalah tebal.' },
      { name: 'Mesin Laminasi PLD Digital Roll', desc: 'Laminasi thermal panas doff/matte dan glossy untuk dus kemasan dan cover.' },
      { name: 'Mesin Anleg Hardcover', desc: 'Perakitan cover tebal (hardcover) untuk map ijazah, map rapot, dan agenda.' },
      { name: 'Mesin Porporasi & Lipat (Folding)', desc: 'Membuat garis putus-putus sobekan karcis/tiket dan melipat brosur rapi.' },
      { name: 'Mesin Lem & Press Tekan', desc: 'Pengeleman presisi dan penekanan karton agar hasil perakitan merekat maksimal.' }
    ]
  },
  {
    categoryName: 'Reklame, Merchandise & Promosi',
    items: [
      { name: 'Mesin Heat Press & Press Kaos', desc: 'Transfer panas suhu tinggi untuk apparel, totebag blacu, dan kain promosi.' },
      { name: 'Mesin Press Roll Sticker', desc: 'Pengaplikasian transfer tape dan finishing stiker label gulungan.' },
      { name: 'Mesin Pembuat Pin & Gantungan Kunci', desc: 'Pencetak pin bros dan suvenir ganci custom untuk event dan komunitas.' },
      { name: 'Mesin Cetak Mug Custom', desc: 'Mesin press keramik untuk mug souvenir dan tumbler promosi perusahaan.' },
      { name: 'Mesin Tali Lanyard', desc: 'Produksi tali id card berlogo custom untuk korporat, BUMN, dan kepanitiaan.' },
      { name: 'Peralatan Reklame & Neon Box', desc: 'Fasilitas perakitan huruf timbul akrilik/stainless, neon box, dan papan informasi.' }
    ]
  }
];

// 3. 5 Corporate Values
export const COMPANY_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Integritas (Integrity)',
    desc: 'Menjunjung tinggi kejujuran, etika profesi, dan transparansi gramatur bahan pada setiap cetakan.'
  },
  {
    number: '02',
    title: 'Kolaborasi (Collaboration)',
    desc: 'Mendorong komunikasi terbuka dan kemitraan sinergis bersama pelaku UMKM, korporasi, dan instansi.'
  },
  {
    number: '03',
    title: 'Inovasi (Innovation)',
    desc: 'Terus memperbarui teknik cetak, material ramah lingkungan, dan pola pisau kemasan modern.'
  },
  {
    number: '04',
    title: 'Fokus Pelanggan (Customer-Oriented)',
    desc: 'Menempatkan kepuasan pemesan sebagai prioritas mutlak melalui konsultasi gratis dan tanggap cepat.'
  },
  {
    number: '05',
    title: 'Akuntabilitas (Accountability)',
    desc: 'Bertanggung jawab penuh atas hasil produksi dengan jaminan garansi cetak ulang jika terjadi salah produksi.'
  }
];

// 4. Organization Structure & Leadership
export const ORGANIZATION_LEADERS: LeaderItem[] = [
  { role: 'Komisaris (Commissioner)', name: 'Indah Etikasari, S.T.', level: 'board' },
  { role: 'Direktur Utama (Chief Executive Officer)', name: 'Satrio Puji Laksono, S.T.', level: 'board' },
  { role: 'Direktur (Director)', name: 'Ratri Ayu Amalia, S.Ak.', level: 'board' },
  { role: 'Kepala Produksi', name: 'Suyoto', level: 'management' },
  { role: 'Kepala Pemasaran', name: 'Diah Nandya Putri', level: 'management' },
  { role: 'Kepala Akuntansi', name: 'Dewita Cahya Lestari', level: 'management' },
  { role: 'Kepala Pengembangan', name: 'Bagus Pangestu', level: 'management' }
];

// 5. Authentic Client Portfolio
export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: 'Otoritas Jasa Keuangan (OJK)', category: 'BUMN & Lembaga', logo: '/images/clients/client_1.png' },
  { name: 'Angkasa Pura | Supports', category: 'BUMN & Lembaga', logo: '/images/clients/client_13.png' },
  { name: 'BPJS Ketenagakerjaan', category: 'BUMN & Lembaga', logo: '/images/clients/client_14.png' },
  { name: 'Bank BRI', category: 'BUMN & Lembaga', logo: '/images/clients/client_7.png' },
  { name: 'Bank Syariah Indonesia (BSI)', category: 'BUMN & Lembaga', logo: '/images/clients/client_11.png' },
  { name: 'Nindya Karya (Danareksa)', category: 'BUMN & Lembaga', logo: '/images/clients/client_3.png' },
  { name: 'Institut Teknologi Kalimantan (ITK)', category: 'BUMN & Lembaga', logo: '/images/clients/client_4.png' },
  { name: 'Nusantara (IKN)', category: 'BUMN & Lembaga', logo: '/images/clients/client_12.png' },
  { name: 'Waskita Precast', category: 'BUMN & Lembaga', logo: '/images/clients/client_17.png' },
  { name: 'Adhi Beton', category: 'BUMN & Lembaga', logo: '/images/clients/client_18.png' },
  { name: 'Domino\'s Pizza', category: 'F&B & Ritel', logo: '/images/clients/client_23.png' },
  { name: 'Pepper Lunch', category: 'F&B & Ritel', logo: '/images/clients/client_25.png' },
  { name: 'Krisbow', category: 'Korporat & Industri', logo: '/images/clients/client_20.png' },
  { name: 'Kawan Lama Solution', category: 'Korporat & Industri', logo: '/images/clients/client_8.png' },
  { name: 'PT Intraco Penta, Tbk (INTA)', category: 'Korporat & Industri', logo: '/images/clients/client_15.png' },
  { name: 'Kobexindo', category: 'Korporat & Industri', logo: '/images/clients/client_10.png' },
  { name: 'Lesso Pipa Plastik', category: 'Korporat & Industri', logo: '/images/clients/client_21.png' },
  { name: 'Singa Merah', category: 'Korporat & Industri', logo: '/images/clients/client_22.png' },
  { name: 'Banti Indonesia', category: 'Korporat & Industri', logo: '/images/clients/client_5.png' },
  { name: 'SSC Works', category: 'Korporat & Industri', logo: '/images/clients/client_9.png' },
  { name: 'Kimora Sushi', category: 'F&B & Ritel', logo: '/images/clients/client_19.png' },
  { name: 'Selera Nikmat Nusantara', category: 'F&B & Ritel', logo: '/images/clients/client_16.png' },
  { name: 'Karya Utama Kita (Oleh-oleh Kaltim)', category: 'F&B & Ritel', logo: '/images/clients/client_24.png' }
];

// 6. Dual Official Offices
export const OFFICIAL_OFFICES = [
  {
    title: 'Office 1: Workshop & Pusat Pengiriman',
    address: 'Jl. Gunung Empat RT. 25 No. 68, Kel. Margo Mulyo, Balikpapan 76131',
    note: 'Titik muat kurir, gudang bahan kertas, dan lini mesin cetak offset & pond',
    phone: '(0542) 415737 / 0811-5420-700',
    hours: '08:00 - 22:00 WITA (Buka Setiap Hari)'
  },
  {
    title: 'Office 2: Kantor Administrasi',
    address: 'Jl. Telindung 10 No. 73, Kelurahan Muara Rapak, Balikpapan Utara',
    note: 'Layanan administrasi, konsultasi cetak korporat, dan urusan legalitas perseroan',
    phone: '0811-5420-700',
    hours: '08:00 - 17:00 WITA (Senin - Sabtu)'
  }
];

