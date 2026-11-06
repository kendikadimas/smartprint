import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Package, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { CITIES, calculateShippingRates, ShippingRate } from '../data/shipping';

export default function CekOngkirPage() {
  const [destination, setDestination] = useState('kaltim_smd');
  const [weightGrams, setWeightGrams] = useState(1000);
  const [courierFilter, setCourierFilter] = useState<'all' | 'Reguler' | 'Express' | 'Cargo' | 'Travel Kaltim'>('all');

  const weightPresets = [
    { label: '500g (Stiker)', grams: 500 },
    { label: '1 Kg (Standar)', grams: 1000 },
    { label: '3 Kg (100 Paper Bag)', grams: 3000 },
    { label: '10 Kg (500 Box Kue)', grams: 10000 },
    { label: '20 Kg (100 Map Rapot)', grams: 20000 },
    { label: '25 Kg (1.000 Box Dus)', grams: 25000 }
  ];

  const rates = useMemo(() => {
    const raw = calculateShippingRates(destination, weightGrams);
    if (courierFilter === 'all') return raw;
    return raw.filter((r) => r.type === courierFilter);
  }, [destination, weightGrams, courierFilter]);

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
          <h1 className="page-title">Cek Ongkir dari Balikpapan</h1>
          <p className="page-subtitle">
            Estimasi ongkir paket cetakan dari Workshop Balikpapan Barat (76131) ke seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        <div className="card responsive-card-pad">
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
                  value="Balikpapan Barat (76131)"
                  disabled
                  style={{ backgroundColor: 'var(--bg-subtle)', fontWeight: 600, color: 'var(--text-main)' }}
                />
              </div>
            </div>

            {/* Destination */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="dest-select">
                <span>Kota / Kabupaten Tujuan</span>
                <span className="form-label-hint">Pilih Lokasi</span>
              </label>
              <select
                id="dest-select"
                className="form-control"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
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
            {rates.map((rate, idx) => (
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
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>
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
                    Pengiriman reguler via JNE, J&amp;T Express, dan TIKI, serta GoSend (Instant/Same Day Balikpapan).
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
