export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export const JOBS: JobPosition[] = [
  {
    id: 'designer_prepress',
    title: 'Graphic Designer & Pre-Press',
    department: 'Divisi Pre-Press & Setting',
    type: 'Penuh Waktu (Full-Time)',
    location: 'Jl. Gunung Empat RT.25 No. 68, Balikpapan Barat',
    description: 'Menyusun tata letak cetak (imposisi), menggambar pola pisau pond dus kemasan, separasi warna CMYK, dan menyiapkan pratinjau persetujuan pelanggan.',
    requirements: [
      'Menguasai CorelDraw, Adobe Illustrator, dan Photoshop',
      'Memahami batas potong (bleed), margin, dan profil warna cetak',
      'Teliti memeriksa ukuran dan ejaan sebelum naik cetak',
      'Pendidikan minimal SMK Multimedia / Desain Grafis / D3'
    ]
  },
  {
    id: 'operator_offset',
    title: 'Operator Mesin Cetak Offset',
    department: 'Divisi Cetak',
    type: 'Penuh Waktu (Full-Time)',
    location: 'Jl. Gunung Empat RT.25 No. 68, Balikpapan Barat',
    description: 'Mengoperasikan mesin cetak offset lembaran, mengatur presisi register warna, pencampuran tinta, serta perawatan berkala mesin produksi.',
    requirements: [
      'Memiliki pengalaman mengoperasikan mesin cetak offset',
      'Memahami takaran pencampuran tinta dan ketepatan register',
      'Disiplin, sehat jasmani, dan tidak buta warna',
      'Pendidikan minimal SMA / SMK sederajat'
    ]
  },
  {
    id: 'staf_finishing',
    title: 'Staf Finishing & Mesin Pond',
    department: 'Divisi Finishing',
    type: 'Penuh Waktu (Full-Time)',
    location: 'Jl. Gunung Empat RT.25 No. 68, Balikpapan Barat',
    description: 'Menjalankan mesin pond die-cut, hotprint foil emas, mesin laminasi, pelipatan box makanan, serta pemeriksaan mutu akhir sebelum pengemasan.',
    requirements: [
      'Rapi, cekatan, dan teliti dalam pekerjaan tangan maupun mesin',
      'Diutamakan yang pernah bekerja di percetakan atau pengemasan',
      'Mampu bekerja sama dalam target tim produksi',
      'Pendidikan minimal SMA / SMK sederajat'
    ]
  },
  {
    id: 'admin_cs',
    title: 'Customer Service & Admin Pesanan',
    department: 'Divisi Layanan Pelanggan',
    type: 'Penuh Waktu (Full-Time)',
    location: 'Jl. Gunung Empat RT.25 No. 68, Balikpapan Barat',
    description: 'Melayani konsultasi spesifikasi cetak via WhatsApp dan di workshop, menghitung estimasi harga dan ongkir, serta mencatat jadwal SPK produksi.',
    requirements: [
      'Komunikatif dan terbiasa melayani pelanggan dengan sopan',
      'Terampil menggunakan aplikasi spreadsheet dan WhatsApp Web',
      'Teliti menghitung ukuran, gramatur, dan kuantitas pesanan',
      'Pendidikan minimal SMA / SMK / D3'
    ]
  }
];
