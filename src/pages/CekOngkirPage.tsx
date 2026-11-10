import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  MapPin,
  Package,
  Clock,
  ShieldCheck,
  ArrowRight,
  Search,
  CheckCircle2,
  RefreshCw,
  Zap
} from 'lucide-react';
import { CITIES, calculateShippingRates, ShippingRate } from '../data/shipping';

const CITY_DEST_MAP: Record<string, number> = {
  'kaltim_bpp': 8649, // Margo Mulyo Balikpapan
  'kaltim_smd': 8653, // Samarinda
  'kaltim_btg': 8650, // Bontang
  'kaltim_kukar': 8655, // Kutai Kartanegara
  'kaltim_kutim': 9101, // Kutai Timur (Sangatta)
  'kaltim_kubar': 8654, // Kutai Barat
  'kaltim_berau': 8640, // Berau
  'kaltim_ppu': 8644, // Penajam Paser Utara / IKN
  'kaltim_paser': 8651, // Tanah Grogot
  'kalsel_bjm': 7011, // Banjarmasin
  'dki_pusat': 1553, // Jakarta Pusat
  'dki_selatan': 1555, // Jakarta Selatan
  'dki_barat': 1551, // Jakarta Barat
  'dki_timur': 1554, // Jakarta Timur
  'jabar_bdg': 3884, // Bandung
  'jabar_bks': 3885, // Bekasi
  'jatim_sby': 4688, // Surabaya
  'jateng_smg': 4001, // Semarang
  'diy_ygy': 4201, // Yogyakarta
  'sulsel_mks': 1001, // Makassar
  'sumut_mdn': 2011 // Medan
};

interface LiveDestination {
  id: number;
  label: string;
}

export default function CekOngkirPage() {
  const [destination, setDestination] = useState('kaltim_smd');
  const [weightGrams, setWeightGrams] = useState(1000);
  const [courierFilter, setCourierFilter] = useState<'all' | 'Reguler' | 'Express' | 'Cargo' | 'Travel Kaltim'>('all');

  // Live RajaOngkir States
  const [liveRates, setLiveRates] = useState<ShippingRate[] | null>(null);
  const [isLiveLoading, setIsLiveLoading] = useState(false);
  const [isLiveActive, setIsLiveActive] = useState(false);

  // Search by subdistrict/city
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<LiveDestination[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedLiveDest, setSelectedLiveDest] = useState<LiveDestination | null>(null);

  const weightPresets = [
    { label: '500g (Stiker)', grams: 500 },
    { label: '1 Kg (Standar)', grams: 1000 },
    { label: '3 Kg (100 Paper Bag)', grams: 3000 },
    { label: '10 Kg (500 Box Kue)', grams: 10000 },
    { label: '20 Kg (100 Map Rapot)', grams: 20000 },
    { label: '25 Kg (1.000 Box Dus)', grams: 25000 }
  ];

  // Search destination with debounce
  useEffect(() => {
    if (searchQuery.trim().length < 3) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/ongkir?action=search&q=${encodeURIComponent(searchQuery)}`);
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data)) {
            setSearchResults(json.data.slice(0, 8).map((d: any) => ({
              id: d.id,
              label: d.label
            })));
          }
        }
      } catch (err) {
        console.error('Failed to search RajaOngkir destination:', err);
      } finally {
        setIsSearching(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch Live Rates when destination or weight changes
  useEffect(() => {
    let isCancelled = false;

    async function fetchLiveCost() {
      setIsLiveLoading(true);

      const targetDestId = selectedLiveDest
        ? selectedLiveDest.id
        : (CITY_DEST_MAP[destination] || 8653);

      try {
        const res = await fetch(`/api/ongkir?destination=${targetDestId}&weight=${weightGrams}`);
        if (!res.ok) throw new Error('API request failed');

        const json = await res.json();
        if (isCancelled) return;

        if (json.status === 'success' && Array.isArray(json.results) && json.results.length > 0) {
          setLiveRates(json.results);
          setIsLiveActive(true);
        } else {
          setLiveRates(null);
          setIsLiveActive(false);
        }
      } catch (err) {
        if (!isCancelled) {
          setLiveRates(null);
          setIsLiveActive(false);
        }
      } finally {
        if (!isCancelled) {
          setIsLiveLoading(false);
        }
      }
    }

    fetchLiveCost();

    return () => {
      isCancelled = true;
    };
  }, [destination, selectedLiveDest, weightGrams]);

  // Final rates with fallback
  const displayedRates = useMemo(() => {
    const raw = liveRates && liveRates.length > 0
      ? liveRates
      : calculateShippingRates(destination, weightGrams);

    if (courierFilter === 'all') return raw;
    return raw.filter((r) => r.type === courierFilter);
  }, [liveRates, destination, weightGrams, courierFilter]);

  const weightKg = Math.ceil(weightGrams / 1000);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Cek Ongkir</span>
          </nav>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'var(--primary)',
            color: '#FFFFFF',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.76rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: 12
          }}>
            Layanan Ekspedisi Resmi
          </div>
          <h1 className="page-title">Cek Ongkir dari Balikpapan</h1>
          <p className="page-subtitle">
            Kalkulator ongkos kirim resmi terhubung langsung ke RajaOngkir dari Workshop SmartprintID Balikpapan Barat (76131).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        <div className="card responsive-card-pad">

          {/* Service Live Indicator Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            backgroundColor: isLiveActive ? '#ECFDF5' : 'var(--bg-subtle)',
            border: `1px solid ${isLiveActive ? '#A7F3D0' : 'var(--border-medium)'}`,
            padding: '10px 16px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 24,
            fontSize: '0.82rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {isLiveActive ? (
                <CheckCircle2 size={16} style={{ color: '#059669' }} />
              ) : (
                <Zap size={16} style={{ color: 'var(--primary)' }} />
              )}
              <span style={{ fontWeight: 700, color: isLiveActive ? '#065F46' : 'var(--text-main)' }}>
                {isLiveActive
                  ? 'Terkoneksi Real-time API RajaOngkir (Titik Muat: Margo Mulyo Balikpapan 76131)'
                  : 'Engine Tarif Terkalibrasi Workshop Balikpapan (Jalur Darat, Udara & Cargo)'}
              </span>
            </div>
            {isLiveLoading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}>
                <RefreshCw size={14} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                <span>Memperbarui tarif...</span>
              </div>
            )}
          </div>

          {/* Controls Grid */}
          <div className="form-grid-3">
            {/* Origin */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="origin-input">
                <span>Kota Asal Pengiriman</span>
                <span className="form-label-hint">Titik Muat Workshop</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="origin-input"
                  className="form-control"
                  value="Margo Mulyo, Balikpapan Barat (76131)"
                  disabled
                  style={{ backgroundColor: 'var(--bg-subtle)', fontWeight: 600, color: 'var(--text-main)' }}
                />
              </div>
            </div>

            {/* Destination Selector */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="dest-select">
                <span>Kota / Kabupaten Tujuan</span>
                <span className="form-label-hint">Pilih Lokasi</span>
              </label>
              <select
                id="dest-select"
                className="form-control"
                value={selectedLiveDest ? 'custom' : destination}
                onChange={(e) => {
                  if (e.target.value !== 'custom') {
                    setSelectedLiveDest(null);
                    setDestination(e.target.value);
                  }
                }}
              >
                {selectedLiveDest && (
                  <option value="custom">
                    📍 {selectedLiveDest.label.substring(0, 36)}...
                  </option>
                )}
                {CITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.city} - {c.province}
                  </option>
                ))}
              </select>
            </div>

            {/* Weight */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="weight-input">
                <span>Berat Paket (Gram)</span>
                <span className="form-label-hint mono-num">Pembulatan: {weightKg} Kg</span>
              </label>
              <input
                type="number"
                id="weight-input"
                className="form-control mono-num"
                min="100"
                step="100"
                value={weightGrams}
                onChange={(e) => setWeightGrams(Math.max(100, Number(e.target.value)))}
              />
            </div>
          </div>

          {/* Advanced Search: Kecamatan / Kelurahan RajaOngkir */}
          <div style={{ marginTop: 18, marginBottom: 20 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: 14, color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  className="form-control"
                  style={{ paddingLeft: 38 }}
                  placeholder="Atau cari spesifik kecamatan / kelurahan tujuan (contoh: Sepaku IKN, Samarinda Ulu, Tenggarong)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Autocomplete Dropdown */}
              {searchResults.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-dropdown)',
                  zIndex: 20,
                  marginTop: 4,
                  maxHeight: 240,
                  overflowY: 'auto'
                }}>
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        padding: '10px 14px',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        borderBottom: '1px solid var(--border-subtle)'
                      }}
                      onMouseDown={() => {
                        setSelectedLiveDest(item);
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-hover)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF'; }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {selectedLiveDest && (
              <div style={{ marginTop: 8, fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>Tujuan aktif: <strong>{selectedLiveDest.label}</strong></span>
                <button
                  type="button"
                  onClick={() => setSelectedLiveDest(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.78rem' }}
                >
                  Ganti ke Pilihan Kota
                </button>
              </div>
            )}
          </div>

          {/* Preset Chips */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600 }}>
              Contoh Bobot Cetakan:
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {weightPresets.map((preset) => (
                <button
                  key={preset.grams}
                  type="button"
                  onClick={() => setWeightGrams(preset.grams)}
                  className={`btn btn-sm ${weightGrams === preset.grams ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.78rem', padding: '6px 12px' }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courier Filter Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            padding: '12px 0',
            marginBottom: 20
          }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {(['all', 'Reguler', 'Express', 'Cargo', 'Travel Kaltim'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setCourierFilter(filter)}
                  className={`btn btn-sm ${courierFilter === filter ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.8rem' }}
                >
                  {filter === 'all' ? 'Semua Opsi' : filter}
                </button>
              ))}
            </div>
            <div className="mono-num" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              1.000 gram = 1 Kg (standar volume ekspedisi)
            </div>
          </div>

          {/* Rates Result Grid */}
          <div className="rates-grid">
            {displayedRates.map((rate, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-main)' }}>{rate.courier}</span>
                    <span style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      backgroundColor: rate.type === 'Cargo' ? '#EFF6FF' : rate.type === 'Express' ? '#FEF2F2' : '#F3F4F6',
                      color: rate.type === 'Cargo' ? '#1D4ED8' : rate.type === 'Express' ? 'var(--primary)' : 'var(--text-muted)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      {rate.type}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 12 }}>
                    Layanan: <strong>{rate.service}</strong>
                  </div>
                </div>

                <div style={{ paddingTop: 12, borderTop: '1px solid var(--border-medium)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Estimasi Tarif:</div>
                    <div className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                      Rp {rate.cost.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={13} />
                    <span>{rate.etd}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Advice Ledger */}
        <section className="split-feature" style={{ marginTop: 56 }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>
              Kebijakan Pengiriman Toko
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Ketentuan kurir resmi, bebas ongkir, dan proses pengemasan pesanan.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem', flexShrink: 0 }}>
                  01
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 2 }}>Free Ongkir &amp; COD Balikpapan</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Gratis ongkir untuk pemesanan minimal Rp 500.000 di area Balikpapan. Tersedia opsi COD langsung.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem', flexShrink: 0 }}>
                  02
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 2 }}>Kurir Resmi yang Didukung</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Pengiriman reguler &amp; kargo via JNE, J&amp;T Express, TIKI, POS, serta GoSend (Instant/Same Day Balikpapan).
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem', flexShrink: 0 }}>
                  03
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', marginBottom: 2 }}>Estimasi Packing &amp; Same-Day</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Estimasi proses packing 1 hari kerja. Khusus stiker dan spanduk, pesanan masuk jam 8 pagi bisa selesai di hari yang sama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
