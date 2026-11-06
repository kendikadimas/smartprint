import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CheckCircle2, Truck, Factory, Sparkles } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';

export default function HomePage() {
  // Quick Print Estimator State
  const [productType, setProductType] = useState('box');
  const [quantity, setQuantity] = useState(1000);
  const [material, setMaterial] = useState('ivory270');

  const calculateEstimate = () => {
    let unitPrice = 1650;
    if (productType === 'box') {
      if (material === 'ivory300') unitPrice = 1850;
      else if (material === 'kraft290') unitPrice = 1550;
      else if (material === 'duplex310') unitPrice = 1350;
      else unitPrice = 1650;
      if (quantity >= 3000) unitPrice *= 0.88;
      else if (quantity >= 2000) unitPrice *= 0.93;
    } else if (productType === 'stiker') {
      unitPrice = material === 'vinyl' ? 450 : 300;
      if (quantity >= 2000) unitPrice *= 0.85;
    } else if (productType === 'cup') {
      unitPrice = 380;
      if (quantity >= 2000) unitPrice = 340;
    } else if (productType === 'paperbag') {
      unitPrice = 2200;
      if (quantity >= 1000) unitPrice = 1950;
    }
    const total = Math.round(unitPrice * quantity);
    return { unitPrice: Math.round(unitPrice), total };
  };

  const estimate = calculateEstimate();

  return (
    <main>
      {/* 1. Hero Section */}
      <section style={{ padding: '48px 0 40px', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="container">
          <div className="grid-hero">
            <div>
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
                marginBottom: 16
              }}>
                SmartprintID by PT OLEH KELUARGA BESAR
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 18 }}>
                Spesialis <span className="serif-italic">Kemasan &amp; Percetakan</span> di Balikpapan
              </h1>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 24, maxWidth: 540 }}>
                Menawarkan berbagai produk kemasan, produk cetak, promosi, stiker &amp; label, reklame, jasa percetakan, dan souvenir. Berpengalaman lebih dari 30 tahun di Balikpapan sejak 1994.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <a
                  href="https://wa.me/628115420700?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20pesanan%20cetak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <WhatsAppIcon size={18} />
                  <span>Konsultasi Cetak WA</span>
                </a>
                <Link to="/katalog" className="btn btn-secondary btn-lg">
                  <span>Lihat Katalog Produk</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Producer Strengths Pills */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 18, borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Lebih 30 Tahun di Balikpapan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Garansi Cetak Ulang Salah Produksi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Free Ongkir Balikpapan (Min. 500rb)</span>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-card)' }}>
                <img
                  src="/images/bhm1.jpg"
                  alt="Workshop Produksi Cetak SmartprintID Balikpapan"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 18,
                left: 18,
                right: 18,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-dropdown)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Workshop Balikpapan Barat (76131)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Jl. Gunung Empat No 68 RT 25 Margo Mulyo
                  </div>
                </div>
                <Link to="/tentang-kami" className="btn btn-outline-primary btn-sm">
                  Kunjungi Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Print Estimator Section */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 6 }}>
                Kalkulator Estimasi Biaya Cetak
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                Simulasi perkiraan biaya cetak Anda secara mandiri sebelum naik produksi.
              </p>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <div className="form-grid-2" style={{ marginBottom: 20 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="prod-type">Jenis Produk</label>
                  <select
                    id="prod-type"
                    className="form-control"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                  >
                    <option value="box">Dus Box Makanan</option>
                    <option value="stiker">Stiker Label Kemasan</option>
                    <option value="cup">Sablon Cup Minuman</option>
                    <option value="paperbag">Paper Bag</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="mat-type">Pilihan Material</label>
                  <select
                    id="mat-type"
                    className="form-control"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  >
                    {productType === 'box' && (
                      <>
                        <option value="ivory270">Ivory 270 gsm (Standar Food Grade)</option>
                        <option value="ivory300">Ivory 300 gsm (Ekstra Tebal)</option>
                        <option value="kraft290">Kraft Brown 290 gsm (Vintage)</option>
                        <option value="duplex310">Duplex 310 gsm (Hemat &amp; Kokoh)</option>
                      </>
                    )}
                    {productType === 'stiker' && (
                      <>
                        <option value="vinyl">Vinyl Tahan Air (Matte/Glossy)</option>
                        <option value="chromo">Kromo Glossy (Toples Kering)</option>
                      </>
                    )}
                    {productType === 'cup' && (
                      <>
                        <option value="pp7">PP Starindo 7 gr (12-16 oz)</option>
                        <option value="pp8">PP Hoki 8 gr (16-22 oz)</option>
                      </>
                    )}
                    {productType === 'paperbag' && (
                      <>
                        <option value="kraft150">Kraft Coklat 150 gsm</option>
                        <option value="art210">Art Carton 210 gsm + Doff</option>
                      </>
                    )}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="qty-type">Jumlah Pesanan</label>
                  <select
                    id="qty-type"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    <option value="500">500 pcs</option>
                    <option value="1000">1.000 pcs</option>
                    <option value="2000">2.000 pcs</option>
                    <option value="3000">3.000 pcs</option>
                    <option value="5000">5.000 pcs</option>
                  </select>
                </div>
              </div>

              {/* Result Banner */}
              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '18px 22px',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 14
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Estimasi Biaya Satuan:</div>
                  <div className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                    Rp {estimate.unitPrice.toLocaleString('id-ID')} / pcs
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginTop: 2 }}>
                    Total: <strong className="mono-num" style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>Rp {estimate.total.toLocaleString('id-ID')}</strong> ({quantity.toLocaleString('id-ID')} pcs)
                  </div>
                </div>

                <a
                  href={`https://wa.me/628115420700?text=Halo%20SmartprintID,%20saya%20ingin%20pesan%20${productType}%20sebanyak%20${quantity}%20pcs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon size={16} />
                  <span>Pesan via WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Asymmetric Producer Strengths Section */}
      <section style={{ padding: '68px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: '1.9rem', marginBottom: 8 }}>
              Kualitas Industri, Layanan <span className="serif-italic">Tangan Pertama</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Keunggulan cetak langsung dari workshop Balikpapan Barat.
            </p>
          </div>

          <div className="grid-2">
            {/* Left Full Red Accent Card */}
            <div className="card-red" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 32 }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  marginBottom: 14
                }}>
                  <Factory size={13} />
                  <span>BERPENGALAMAN SEJAK 1994</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', lineHeight: 1.25, marginBottom: 14 }}>
                  Lebih dari 30 Tahun di Balikpapan
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, opacity: 0.95, marginBottom: 20 }}>
                  PT OLEH KELUARGA BESAR (SmartprintID) menyediakan produk cetak berkualitas, mesin teknologi terbaik, pelayanan ramah dan profesional, serta harga yang kompetitif.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#FFFFFF' }} />
                    <span>Konsultasi gratis &amp; cepat tanggap</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#FFFFFF' }} />
                    <span>Garansi cetak ulang jika salah produksi</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#FFFFFF' }} />
                    <span>Persetujuan tertulis (ACC) sebelum cetak</span>
                  </div>
                </div>
              </div>

              <Link to="/tentang-kami" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>Profil &amp; Workshop Kami</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Cards Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>Spesialis Kemasan &amp; 7 Kategori Produk</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Kotak makanan, kotak kue/nasi, stiker &amp; label, media promosi, reklame, jasa percetakan, dan souvenir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                    <Truck size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>Free Ongkir &amp; COD Balikpapan</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Gratis ongkir untuk pesanan minimal Rp 500.000 di area Balikpapan, serta opsi kurir GoSend same-day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', flexShrink: 0 }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>Garansi Retur 1-2 Hari</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Garansi cetak ulang jika terjadi salah produksi, dengan retur 1-2 hari setelah barang diterima sesuai kondisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Magazine Showcase Matrix */}
      <section style={{ padding: '68px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <h2 style={{ fontSize: '1.9rem' }}>
                Lini Produk <span className="serif-italic">Cetak &amp; Kemasan</span>
              </h2>
            </div>
            <Link to="/katalog" className="btn btn-secondary btn-sm">
              <span>Buka Semua Katalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Matrix Top: Spotlight Horizontal Split + Red Accent Card */}
          <div className="showcase-matrix-top">
            {/* Spotlight Card: Dus Box Kemasan */}
            <div className="card spotlight-card">
              <div style={{ height: '100%', minHeight: 250, overflow: 'hidden' }}>
                <img
                  src="/images/rt1.jpg"
                  alt="Dus Box Kemasan Makanan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>Dus Box Makanan</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 14 }}>
                    Box kue, donat, dan katering bahan food grade tahan minyak dengan kuncian pisau pond presisi.
                  </p>
                  <div className="mono-num" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                    Mulai Rp 1.650 / pcs
                  </div>
                </div>
                <Link to="/katalog?cat=kemasan" className="btn btn-outline-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: 14 }}>
                  Lihat Spesifikasi
                </Link>
              </div>
            </div>

            {/* Red Card: Stiker & Label Kemasan */}
            <div className="card-red" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 8 }}>Stiker Label Kemasan</h3>
                <p style={{ fontSize: '0.88rem', opacity: 0.95, lineHeight: 1.5, marginBottom: 14 }}>
                  Vinyl anti air untuk botol minuman dan frozen food, serta kromo hemat untuk toples kering.
                </p>
                <div className="mono-num" style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                  Mulai Rp 350 / pcs
                </div>
              </div>
              <Link to="/katalog?cat=stiker" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start', marginTop: 16 }}>
                Pilihan Stiker
              </Link>
            </div>
          </div>

          {/* Matrix Bottom: 4 Supporting Category Cards */}
          <div className="grid-4">
            {PRODUCTS.slice(2, 6).map((item) => (
              <div key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 150, overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 18, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: 6, lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: 12 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border-subtle)' }}>
                    <span className="mono-num" style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--primary)' }}>
                      {item.basePrice}
                    </span>
                    <Link to={`/katalog?cat=${item.category}`} style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Detail &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Workshop Satu Atap Section (Clean & Scannable) */}
      <section style={{ padding: '68px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: '1.9rem', marginBottom: 8 }}>
              Workshop Satu Atap Balikpapan Barat
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Fasilitas pra-cetak, mesin offset, dan finishing di Jl. Gunung Empat No. 68.
            </p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ padding: 22 }}>
              <div style={{ height: 160, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 16 }}>
                <img src="/images/bhm2.jpg" alt="Mesin Cetak Offset SmartprintID" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Mesin Offset &amp; Digital</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Cetak lembaran berkecepatan tinggi dengan kestabilan warna CMYK untuk dus, paper bag, dan brosur.
              </p>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ height: 160, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 16 }}>
                <img src="/images/rt1.jpg" alt="Mesin Pond Die Cut Kemasan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Pond Die-Cut &amp; Creasing</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Potongan pisau pond presisi, garis tekuk lipatan rapi, dan pembuatan kuncian dus siap rakit.
              </p>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ height: 160, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 16 }}>
                <img src="/images/rt6.jpg" alt="Foil Emas dan Map Rapot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Hotprint Foil Emas &amp; Emboss</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Aksen metalik emas/perak dan cetak timbul untuk map rapot, ijazah, dan kemasan premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technical Guides & Articles Preview */}
      <section style={{ padding: '68px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <h2 style={{ fontSize: '1.9rem' }}>
                Panduan Material &amp; Tips Cetak
              </h2>
            </div>
            <Link to="/artikel" className="btn btn-secondary btn-sm">
              <span>Buka Semua Panduan</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid-3">
            {ARTICLES.slice(0, 3).map((item) => (
              <article key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 160, overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>{item.category}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.08rem', marginBottom: 6, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {item.excerpt}
                    </p>
                  </div>
                  <div style={{ paddingTop: 12, marginTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
                    <Link to="/artikel" style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--primary)' }}>
                      Baca Panduan &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Clean CTA */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="card-red cta-banner-flex" style={{
            padding: '40px 32px'
          }}>
            <div style={{ maxWidth: 600 }}>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 8, color: '#FFFFFF' }}>
                Siap Memulai Produksi Cetakan Anda?
              </h2>
              <p style={{ fontSize: '0.96rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
                Konsultasikan ukuran, bahan, dan jumlah pesanan Anda langsung dengan tim workshop SmartprintID Balikpapan Barat.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/628115420700?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20pesanan%20cetak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg"
              >
                <WhatsAppIcon size={18} />
                <span>Chat WA (0811-5420-700)</span>
              </a>
              <Link to="/cek-ongkir" className="btn btn-outline-white btn-lg">
                <span>Cek Ongkir Ekspedisi</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
