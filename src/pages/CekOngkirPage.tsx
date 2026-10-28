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
          <h1 className="page-title">Kalkulator Cek Ongkir dari Balikpapan</h1>
          <p className="page-subtitle">
            Perhitungan estimasi ongkos kirim paket cetakan langsung dari titik muat Workshop SmartprintID Balikpapan Barat (76131) ke Samarinda, IKN Nusantara, Kalimantan, dan seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        <div className="card" style={{ padding: 36 }}>
          {/* Controls Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: 24, marginBottom: 28 }}>
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
            padding: '16px 0',
            borderTop: '1px solid var(--border-medium)',
            borderBottom: '1px solid var(--border-medium)',
            marginBottom: 24
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
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
                    <span className={`badge ${rate.type === 'Cargo' ? 'badge-amber' : rate.type === 'Express' ? 'badge-red' : 'badge-neutral'}`}>
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
        <section style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 36 }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: 12 }}>
              Rekomendasi Pengiriman Berdasarkan Bobot
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Kertas kemasan makanan dan map ijazah memiliki bobot gramatur yang padat. Pilih moda pengiriman yang paling efisien untuk volume order Anda.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>01</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Dalam Kota Balikpapan (Ambil / Kurir Internal)</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Pesanan dapat diambil langsung di workshop Jl. Gunung Empat No. 68 atau dikirim hari yang sama menggunakan armada kurir workshop kami.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>02</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Samarinda, Penajam IKN, Bontang &amp; Tenggarong</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Untuk pesanan mendesak atau berbobot 10-30 Kg ke kota sekitarnya, moda Travel Antar Kota (Same-Day) atau JTR Kargo adalah opsi tercepat dan paling ekonomis.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>03</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Luar Pulau &amp; Seluruh Indonesia (Kargo Berat)</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Untuk pengiriman di atas 10 Kg ke Jakarta, Surabaya, Makassar, dan Banjarmasin, gunakan opsi JNE Trucking (JTR) untuk tarif per kilogram terendah.
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
