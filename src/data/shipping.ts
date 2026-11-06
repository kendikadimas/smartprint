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
  type: 'Instant' | 'Reguler' | 'Express' | 'Cargo';
  isFree?: boolean;
}

export const CITIES: CityDestination[] = [
  // Kalimantan Timur & Sekitarnya
  { id: 'kaltim_bpp', province: 'Kalimantan Timur', city: 'Kota Balikpapan', type: 'Kota', postal: '76131' },
  { id: 'kaltim_smd', province: 'Kalimantan Timur', city: 'Kota Samarinda', type: 'Kota', postal: '75111' },
  { id: 'kaltim_ppu', province: 'Kalimantan Timur', city: 'Kab. Penajam Paser Utara', type: 'Kabupaten', postal: '76141' },
  { id: 'kaltim_btg', province: 'Kalimantan Timur', city: 'Kota Bontang', type: 'Kota', postal: '75311' },
  { id: 'kaltim_kukar', province: 'Kalimantan Timur', city: 'Kab. Kutai Kartanegara (Tenggarong)', type: 'Kabupaten', postal: '75511' },
  { id: 'kaltim_kutim', province: 'Kalimantan Timur', city: 'Kab. Kutai Timur (Sangatta)', type: 'Kabupaten', postal: '75611' },
  { id: 'kaltim_berau', province: 'Kalimantan Timur', city: 'Kab. Berau (Tanjung Redeb)', type: 'Kabupaten', postal: '77311' },
  { id: 'kaltim_paser', province: 'Kalimantan Timur', city: 'Kab. Paser (Tanah Grogot)', type: 'Kabupaten', postal: '76211' },

  // Kalimantan Lainnya
  { id: 'kaltara_trkn', province: 'Kalimantan Utara', city: 'Kota Tarakan', type: 'Kota', postal: '77111' },
  { id: 'kalsel_bjm', province: 'Kalimantan Selatan', city: 'Kota Banjarmasin', type: 'Kota', postal: '70111' },
  { id: 'kalbar_ptk', province: 'Kalimantan Barat', city: 'Kota Pontianak', type: 'Kota', postal: '78111' },
  { id: 'kalteng_plk', province: 'Kalimantan Tengah', city: 'Kota Palangka Raya', type: 'Kota', postal: '73111' },

  // Pulau Lainnya
  { id: 'dki_jkt', province: 'DKI Jakarta', city: 'Kota Jakarta', type: 'Kota', postal: '10110' },
  { id: 'jatim_sby', province: 'Jawa Timur', city: 'Kota Surabaya', type: 'Kota', postal: '60111' },
  { id: 'sulsel_mks', province: 'Sulawesi Selatan', city: 'Kota Makassar', type: 'Kota', postal: '90111' }
];

export function calculateShippingRates(destId: string, grams: number, subtotalOrder = 0): ShippingRate[] {
  const kg = Math.max(1, Math.ceil(grams / 1000));
  const dest = destId.toLowerCase();

  // Zone Balikpapan (Kurir: GoSend, JNE, J&T, TIKI + Free Ongkir min 500rb)
  if (dest.includes('bpp')) {
    const isFree = subtotalOrder >= 500000;
    return [
      {
        courier: 'GoSend / Kurir Toko',
        service: 'Instant / Same Day Balikpapan',
        cost: isFree ? 0 : 15000,
        etd: 'Hari Ini (Same Day)',
        type: 'Instant',
        isFree
      },
      { courier: 'JNE', service: 'REG (Reguler Balikpapan)', cost: isFree ? 0 : kg * 9000, etd: '1 Hari', type: 'Reguler', isFree },
      { courier: 'J&T Express', service: 'EZ Balikpapan', cost: isFree ? 0 : kg * 10000, etd: '1 Hari', type: 'Reguler', isFree },
      { courier: 'TIKI', service: 'REG', cost: isFree ? 0 : kg * 9500, etd: '1 Hari', type: 'Reguler', isFree },
      { courier: 'JNE Trucking (JTR)', service: 'Kargo Berat (Min 10 Kg)', cost: Math.max(30000, kg * 3000), etd: '1-2 Hari', type: 'Cargo' }
    ];
  }

  // Zone Kaltim (Samarinda, PPU, Bontang, Kukar)
  if (dest.includes('smd') || dest.includes('ppu') || dest.includes('btg') || dest.includes('kukar')) {
    return [
      { courier: 'JNE', service: 'REG', cost: kg * 18000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'J&T Express', service: 'EZ', cost: kg * 19000, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'TIKI', service: 'REG', cost: kg * 18500, etd: '1-2 Hari', type: 'Reguler' },
      { courier: 'JNE Trucking (JTR)', service: 'Kargo Darat Kaltim', cost: Math.max(40000, kg * 4000), etd: '2-3 Hari', type: 'Cargo' }
    ];
  }

  // Luar Kaltim
  return [
    { courier: 'JNE', service: 'REG', cost: kg * 38000, etd: '2-3 Hari', type: 'Reguler' },
    { courier: 'J&T Express', service: 'EZ', cost: kg * 39000, etd: '2-3 Hari', type: 'Reguler' },
    { courier: 'TIKI', service: 'REG', cost: kg * 38500, etd: '2-3 Hari', type: 'Reguler' },
    { courier: 'JNE Trucking (JTR)', service: 'Kargo Antar Pulau', cost: Math.max(80000, kg * 8000), etd: '4-7 Hari', type: 'Cargo' }
  ];
}
