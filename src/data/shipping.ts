export interface CityDestination {
  id: string;
  province: string;
  city: string;
  type: string;
  postal: string;
}

export interface ShippingRate {
  courier: string;
  service: string;
  cost: number;
  etd: string;
  type: 'Instant' | 'Reguler' | 'Express' | 'Cargo' | 'Travel Kaltim';
}

export const CITIES: CityDestination[] = [
  // Kalimantan Timur & IKN
  { id: 'kaltim_bpp', province: 'Kalimantan Timur', city: 'Kota Balikpapan', type: 'Kota', postal: '76131' },
  { id: 'kaltim_smd', province: 'Kalimantan Timur', city: 'Kota Samarinda', type: 'Kota', postal: '75111' },
  { id: 'kaltim_ppu', province: 'Kalimantan Timur', city: 'Kab. Penajam Paser Utara (IKN)', type: 'Kabupaten', postal: '76141' },
  { id: 'kaltim_btg', province: 'Kalimantan Timur', city: 'Kota Bontang', type: 'Kota', postal: '75311' },
  { id: 'kaltim_kukar', province: 'Kalimantan Timur', city: 'Kab. Kutai Kartanegara (Tenggarong)', type: 'Kabupaten', postal: '75511' },
  { id: 'kaltim_kutim', province: 'Kalimantan Timur', city: 'Kab. Kutai Timur (Sangatta)', type: 'Kabupaten', postal: '75611' },
  { id: 'kaltim_kubar', province: 'Kalimantan Timur', city: 'Kab. Kutai Barat (Sendawar)', type: 'Kabupaten', postal: '75711' },
  { id: 'kaltim_berau', province: 'Kalimantan Timur', city: 'Kab. Berau (Tanjung Redeb)', type: 'Kabupaten', postal: '77311' },
  { id: 'kaltim_paser', province: 'Kalimantan Timur', city: 'Kab. Paser (Tanah Grogot)', type: 'Kabupaten', postal: '76211' },
  
  // Kalimantan Lainnya
  { id: 'kaltara_trkn', province: 'Kalimantan Utara', city: 'Kota Tarakan', type: 'Kota', postal: '77111' },
  { id: 'kaltara_bul', province: 'Kalimantan Utara', city: 'Kab. Bulungan (Tanjung Selor)', type: 'Kabupaten', postal: '77211' },
  { id: 'kalsel_bjm', province: 'Kalimantan Selatan', city: 'Kota Banjarmasin', type: 'Kota', postal: '70111' },
  { id: 'kalsel_bjb', province: 'Kalimantan Selatan', city: 'Kota Banjarbaru', type: 'Kota', postal: '70711' },
  { id: 'kalbar_ptk', province: 'Kalimantan Barat', city: 'Kota Pontianak', type: 'Kota', postal: '78111' },
  { id: 'kalteng_plk', province: 'Kalimantan Tengah', city: 'Kota Palangka Raya', type: 'Kota', postal: '73111' },

  // Jawa & Bali
  { id: 'dki_pusat', province: 'DKI Jakarta', city: 'Kota Jakarta Pusat', type: 'Kota', postal: '10110' },
  { id: 'dki_selatan', province: 'DKI Jakarta', city: 'Kota Jakarta Selatan', type: 'Kota', postal: '12110' },
  { id: 'dki_barat', province: 'DKI Jakarta', city: 'Kota Jakarta Barat', type: 'Kota', postal: '11110' },
  { id: 'dki_timur', province: 'DKI Jakarta', city: 'Kota Jakarta Timur', type: 'Kota', postal: '13110' },
  { id: 'jabar_bdg', province: 'Jawa Barat', city: 'Kota Bandung', type: 'Kota', postal: '40111' },
  { id: 'jateng_smg', province: 'Jawa Tengah', city: 'Kota Semarang', type: 'Kota', postal: '50111' },
  { id: 'diy_ygy', province: 'D.I. Yogyakarta', city: 'Kota Yogyakarta', type: 'Kota', postal: '55111' },
  { id: 'jatim_sby', province: 'Jawa Timur', city: 'Kota Surabaya', type: 'Kota', postal: '60111' },
  { id: 'bali_dps', province: 'Bali', city: 'Kota Denpasar', type: 'Kota', postal: '80111' },

  // Sumatera & Sulawesi & Indonesia Timur
  { id: 'sulsel_mks', province: 'Sulawesi Selatan', city: 'Kota Makassar', type: 'Kota', postal: '90111' },
  { id: 'sulut_mnd', province: 'Sulawesi Utara', city: 'Kota Manado', type: 'Kota', postal: '95111' },
  { id: 'sumut_mdn', province: 'Sumatera Utara', city: 'Kota Medan', type: 'Kota', postal: '20111' },
  { id: 'sumbar_pdg', province: 'Sumatera Barat', city: 'Kota Padang', type: 'Kota', postal: '25111' },
  { id: 'papua_jyp', province: 'Papua', city: 'Kota Jayapura', type: 'Kota', postal: '99111' }
];

export function calculateShippingRates(destId: string, grams: number): ShippingRate[] {
  const kg = Math.max(1, Math.ceil(grams / 1000));
  const dest = destId.toLowerCase();

  // Zone 0: Dalam Kota Balikpapan
  if (dest.includes('bpp')) {
    return [
      { courier: 'Smartprint Kurir', service: 'Same-Day Workshop', cost: Math.max(15000, kg * 5000), etd: 'Hari Ini', type: 'Instant' },
      { courier: 'JNE', service: 'REG (Reguler)', cost: kg * 10000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'J&T Express', service: 'EZ', cost: kg * 11000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'SiCepat', service: 'SIUNT', cost: kg * 10000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'Pos Indonesia', service: 'Pos Reguler', cost: kg * 9000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'JNE Trucking', service: 'JTR (Min 10 Kg)', cost: Math.max(35000, kg * 3000), etd: '2-3 Hari', type: 'Cargo' }
    ];
  }

  // Zone 1: Samarinda, IKN/PPU, Kukar, Bontang
  if (dest.includes('smd') || dest.includes('ppu') || dest.includes('kukar') || dest.includes('btg')) {
    return [
      { courier: 'Travel Kaltim', service: 'Same-Day Antar Kota', cost: Math.max(50000, kg * 5000), etd: 'Hari Ini / Esok', type: 'Travel Kaltim' },
      { courier: 'JNE', service: 'REG', cost: kg * 18000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'JNE', service: 'YES (Yakin Esok Sampai)', cost: kg * 32000, etd: '1 Hari', type: 'Express' },
      { courier: 'J&T Express', service: 'EZ', cost: kg * 19000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'SiCepat', service: 'REG', cost: kg * 18000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'Pos Indonesia', service: 'Pos Kilat', cost: kg * 16000, etd: '2-3 Hari', type: 'Reguler' },
      { courier: 'JNE Trucking', service: 'JTR (Kargo Kaltim)', cost: Math.max(45000, kg * 4500), etd: '2-3 Hari', type: 'Cargo' }
    ];
  }

  // Zone 2: Kalimantan Lainnya (Kutim, Berau, Banjarmasin, Tarakan)
  if (dest.includes('kaltim') || dest.includes('kalsel') || dest.includes('kaltara') || dest.includes('kalteng') || dest.includes('kalbar')) {
    return [
      { courier: 'JNE', service: 'REG', cost: kg * 28000, etd: '2-3 Hari', type: 'Reguler' },
      { courier: 'J&T Express', service: 'EZ', cost: kg * 29000, etd: '2-3 Hari', type: 'Reguler' },
      { courier: 'SiCepat', service: 'REG', cost: kg * 27000, etd: '2-4 Hari', type: 'Reguler' },
      { courier: 'Pos Indonesia', service: 'Pos Kilat Khusus', cost: kg * 25000, etd: '2-4 Hari', type: 'Reguler' },
      { courier: 'JNE Trucking', service: 'JTR Cargo Regional', cost: Math.max(75000, kg * 7500), etd: '3-5 Hari', type: 'Cargo' }
    ];
  }

  // Zone 3: Jawa & Bali (Jakarta, Surabaya, Bandung, Jogja, Denpasar)
  if (dest.includes('dki') || dest.includes('jabar') || dest.includes('jateng') || dest.includes('jatim') || dest.includes('diy') || dest.includes('bali')) {
    return [
      { courier: 'JNE', service: 'REG', cost: kg * 38000, etd: '2-3 Hari', type: 'Reguler' },
      { courier: 'JNE', service: 'YES (Kilat Udara)', cost: kg * 65000, etd: '1-2 Hari', type: 'Express' },
      { courier: 'J&T Express', service: 'EZ', cost: kg * 39000, etd: '2-3 Hari', type: 'Reguler' },
      { courier: 'SiCepat', service: 'BEST (Besok Sampai)', cost: kg * 42000, etd: '1-2 Hari', type: 'Express' },
      { courier: 'Pos Indonesia', service: 'Pos Kilat', cost: kg * 35000, etd: '3-4 Hari', type: 'Reguler' },
      { courier: 'JNE Trucking', service: 'JTR Cargo Antar Pulau', cost: Math.max(85000, kg * 8500), etd: '4-7 Hari', type: 'Cargo' }
    ];
  }

  // Zone 4: Sumatera, Sulawesi, Papua
  return [
    { courier: 'JNE', service: 'REG', cost: kg * 46000, etd: '3-4 Hari', type: 'Reguler' },
    { courier: 'J&T Express', service: 'EZ', cost: kg * 48000, etd: '3-5 Hari', type: 'Reguler' },
    { courier: 'Pos Indonesia', service: 'Pos Kilat', cost: kg * 42000, etd: '4-6 Hari', type: 'Reguler' },
    { courier: 'JNE Trucking', service: 'JTR Kargo Laut/Darat', cost: Math.max(95000, kg * 9500), etd: '5-9 Hari', type: 'Cargo' }
  ];
}
