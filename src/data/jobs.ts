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
    department: 'Divisi Setting Pra-Cetak',
    type: 'Penuh Waktu',
    location: 'Balikpapan Barat',
    description: 'Menyusun imposisi cetak, pola pisau pond packaging, dan separasi warna CMYK sebelum piringan cetak dibuat.',
    requirements: [
      'Terampil CorelDraw, Illustrator, dan Photoshop',
      'Memahami margin potong (bleed) dan profil warna cetak',
      'Pendidikan SMK Grafika/Multimedia atau D3 Desain'
    ]
  },
  {
    id: 'operator_offset',
    title: 'Operator Mesin Cetak Offset',
    department: 'Divisi Cetak',
    type: 'Penuh Waktu',
    location: 'Balikpapan Barat',
    description: 'Mengoperasikan mesin cetak offset lembaran, mengatur register warna, dan menjaga densitas tinta cetak.',
    requirements: [
      'Pengalaman kerja pada mesin cetak offset',
      'Paham takaran tinta dan ketepatan register warna',
      'Sehat jasmani dan tidak buta warna'
    ]
  },
  {
    id: 'staf_finishing',
    title: 'Staf Finishing & Mesin Pond',
    department: 'Divisi Finishing',
    type: 'Penuh Waktu',
    location: 'Balikpapan Barat',
    description: 'Menjalankan mesin pond die-cut, hotprint timbul, laminasi, dan sortir mutu sebelum pengemasan.',
    requirements: [
      'Rapi, teliti, dan terbiasa dengan target produksi',
      'Diutamakan berpengalaman di percetakan atau packaging',
      'Pendidikan minimal SMA/SMK sederajat'
    ]
  },
  {
    id: 'admin_cs',
    title: 'Admin CS & Layanan Pelanggan',
    department: 'Divisi Layanan',
    type: 'Penuh Waktu',
    location: 'Balikpapan Barat',
    description: 'Melayani konsultasi spesifikasi bahan, menghitung estimasi biaya/ongkir, dan mencatat jadwal pengerjaan.',
    requirements: [
      'Komunikatif, ramah, dan teliti menghitung rincian order',
      'Terbiasa menggunakan WhatsApp dan spreadsheet',
      'Pendidikan minimal SMA/SMK sederajat'
    ]
  }
];
