import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CheckCircle2, MessageSquare, ShieldCheck, Truck, Factory, Sparkles } from 'lucide-react';
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
      <section style={{ padding: '64px 0 56px', backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
                Pabrikasi <span className="serif-italic">Percetakan &amp; Kemasan</span> Berkualitas di Balikpapan
              </h1>
              <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 28, maxWidth: 540 }}>
                Pusat produksi cetak offset lembaran, dus box makanan food grade, stiker label botol, dan sablon cup langsung dari workshop Jl. Gunung Empat No. 68. Tanpa perantara, harga transparan, dan kendali mutu terjamin.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
                <a
                  href="https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20pesanan%20cetak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <MessageSquare size={18} />
                  <span>Konsultasi Cetak WA</span>
                </a>
                <Link to="/katalog" className="btn btn-secondary btn-lg">
                  <span>Lihat Katalog Produk</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Producer Strengths Pills */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Mesin Offset &amp; Pond Sendiri</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Kertas Food Grade Bersertifikat</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Kirim Cepat Kaltim &amp; IKN</span>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-card)' }}>
                <img
                  src="/images/bhm1.jpg"
                  alt="Workshop Produksi Cetak SmartprintID Balikpapan"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-dropdown)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Balikpapan Barat (76131)
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
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>
                Kalkulator Estimasi Biaya Cetak
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Hitung perkiraan biaya pesanan Anda secara transparan sebelum memulai proses produksi.
              </p>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 24 }}>
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
                    <option value="paperbag">Paper Bag Kraft/Art</option>
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
                        <option value="kraft290">Kraft Brown 290 gsm (Vintage Ramah Lingkungan)</option>
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
                padding: '20px 24px',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimasi Biaya Satuan:</div>
                  <div className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                    Rp {estimate.unitPrice.toLocaleString('id-ID')} / pcs
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-body)', marginTop: 4 }}>
                    Total: <strong className="mono-num">Rp {estimate.total.toLocaleString('id-ID')}</strong> ({quantity.toLocaleString('id-ID')} pcs)
                  </div>
                </div>

                <a
                  href={`https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20ingin%20pesan%20${productType}%20sebanyak%20${quantity}%20pcs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MessageSquare size={16} />
                  <span>Pesan Sekarang via WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Asymmetric Producer Strengths Section */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 10 }}>
              Kualitas Industri, Layanan <span className="serif-italic">Tangan Pertama</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Keunggulan operasional percetakan berbasis workshop di Balikpapan Barat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {/* Left Full Red Accent Card */}
            <div className="card-red" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: 16
                }}>
                  <Factory size={14} />
                  <span>KAMI ADALAH PRODUSEN</span>
                </div>
                <h3 style={{ fontSize: '1.7rem', lineHeight: 1.25, marginBottom: 16 }}>
                  Langsung dari Workshop, Tanpa Makelar &amp; Perantara
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, opacity: 0.95, marginBottom: 24 }}>
                  Kami memiliki mesin cetak offset lembaran, mesin pond otomatis, sablon silinder, dan peralatan hotprint foil di Jl. Gunung Empat RT.25 No. 68. Anda berhubungan langsung dengan operator dan tim teknis yang memproduksi cetakan Anda.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#FFFFFF' }} />
                    <span>Transparansi gramatur kertas dan profil warna CMYK</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#FFFFFF' }} />
                    <span>Kemudahan revisi dan konsultasi pisau pond custom</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#FFFFFF' }} />
                    <span>Garansi mutu cetak rapi dan tepat waktu</span>
                  </div>
                </div>
              </div>

              <Link to="/tentang-kami" className="btn btn-white" style={{ alignSelf: 'flex-start' }}>
                <span>Lihat Profil Workshop &amp; Mesin</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Cards Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Calculator size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Hemat Waktu &amp; Biaya Terukur</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      Cek tarif ongkos kirim dan estimasi biaya cetak langsung secara mandiri. Tanpa biaya tersembunyi, siap kirim ke seluruh Kalimantan Timur dan kawasan IKN.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Bantuan Setting File Desain Pra-Cetak</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      Tim desainer pre-press kami memeriksa batas potong (bleed), akurasi teks, dan separasi warna CMYK sebelum piringan cetak dibuat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Truck size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Pengiriman Fleksibel &amp; Kargo Kaltim</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      Mendukung kurir workshop dalam kota Balikpapan, travel antar kota (same day) Samarinda/PPU, serta JNE Trucking untuk kargo kemasan berat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Magazine Showcase Matrix */}
      <section style={{ padding: '72px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 style={{ fontSize: '2rem' }}>
                Lini Produk <span className="serif-italic">Cetak &amp; Kemasan</span> Unggulan
              </h2>
            </div>
            <Link to="/katalog" className="btn btn-secondary">
              <span>Buka Semua Katalog (8 Produk)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Matrix Top: Spotlight Horizontal Split + Red Accent Card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 24, marginBottom: 24 }}>
            {/* Spotlight Card: Dus Box Kemasan */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ height: '100%', minHeight: 280, overflow: 'hidden' }}>
                <img
                  src="/images/rt1.jpg"
                  alt="Dus Box Kemasan Makanan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge badge-red" style={{ marginBottom: 12 }}>PRODUK UTAMA</span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: 10 }}>Dus Box Makanan &amp; Kuliner</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 16 }}>
                    Packaging cetak logo food grade untuk kue, donat, katering, dan oleh-oleh. Kertas Ivory tahan minyak dengan kuncian pisau pond presisi.
                  </p>
                  <div className="mono-num" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)' }}>
                    Mulai Rp 1.650 / pcs
                  </div>
                </div>
                <Link to="/katalog?cat=kemasan" className="btn btn-outline-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: 16 }}>
                  Lihat Spesifikasi Box
                </Link>
              </div>
            </div>

            {/* Red Card: Stiker & Label Kemasan */}
            <div className="card-red" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  marginBottom: 14
                }}>
                  BEST-SELLER BOTOL &amp; FROZEN
                </span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: 10 }}>Stiker Label Tahan Air &amp; Kromo</h3>
                <p style={{ fontSize: '0.92rem', opacity: 0.95, lineHeight: 1.6, marginBottom: 18 }}>
                  Bahan vinyl anti sobek dan anti luntur saat terkena embun dingin, serta bahan chromo ekonomis untuk kemasan toples kering.
                </p>
                <div className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                  Mulai Rp 350 / pcs
                </div>
              </div>
              <Link to="/katalog?cat=stiker" className="btn btn-white btn-sm" style={{ alignSelf: 'flex-start', marginTop: 20 }}>
                Pilihan Bahan Stiker
              </Link>
            </div>
          </div>

          {/* Matrix Bottom: 4 Supporting Category Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {PRODUCTS.slice(2, 6).map((item) => (
              <div key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 160, overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: 8, lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 14 }}>
                      {item.desc.substring(0, 85)}...
                    </p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
                    <span className="mono-num" style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--primary)' }}>
                      {item.basePrice}
                    </span>
                    <Link to={`/katalog?cat=${item.category}`} style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-main)' }}>
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
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 10 }}>
              Workshop Satu Atap Balikpapan Barat
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Memusatkan seluruh tahapan pra-cetak, pencetakan, dan finishing di Jl. Gunung Empat RT.25 No. 68.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="card" style={{ padding: 24 }}>
              <div style={{ height: 180, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 18 }}>
                <img src="/images/bhm2.jpg" alt="Mesin Cetak Offset SmartprintID" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge badge-red" style={{ marginBottom: 10 }}>DIVISI CETAK</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Mesin Offset &amp; Digital Press</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Pencetakan lembaran berkecepatan tinggi dengan kestabilan densitas tinta CMYK pada kertas Ivory, Kraft, Duplex, dan Art Paper.
              </p>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <div style={{ height: 180, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 18 }}>
                <img src="/images/rt1.jpg" alt="Mesin Pond Die Cut Kemasan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge badge-emerald" style={{ marginBottom: 10 }}>DIVISI FINISHING</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Pond Die-Cut &amp; Creasing</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Pemotongan pola box presisi, garis tekuk lipatan rapi, dan pembuatan kuncian tanpa lem untuk kemasan kuliner siap rakit.
              </p>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <div style={{ height: 180, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 18 }}>
                <img src="/images/rt6.jpg" alt="Foil Emas dan Map Rapot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge badge-amber" style={{ marginBottom: 10 }}>DIVISI KHUSUS</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Hotprint Foil Emas &amp; Emboss</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Aksen emas/perak metalik dan cetak timbul untuk map rapot sekolah, ijazah universitas, piagam, dan kemasan kosmetik premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technical Guides & Articles Preview */}
      <section style={{ padding: '72px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 style={{ fontSize: '2rem' }}>
                Panduan Material &amp; Tips Cetak
              </h2>
            </div>
            <Link to="/artikel" className="btn btn-secondary">
              <span>Buka Semua Artikel</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {ARTICLES.slice(0, 3).map((item) => (
              <article key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 180, overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <span className="badge badge-neutral">{item.category}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      {item.excerpt}
                    </p>
                  </div>
                  <div style={{ paddingTop: 16, marginTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
                    <Link to="/artikel" style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)' }}>
                      Baca Panduan &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Clean CTA (Non-glaring, High Contrast) */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="card" style={{
            padding: '48px 40px',
            borderLeft: '5px solid var(--primary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 28
          }}>
            <div style={{ maxWidth: 640 }}>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 10 }}>
                Siap Memulai Produksi Cetakan Anda?
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Kirimkan file desain atau diskusikan kebutuhan ukuran dan gramatur kemasan Anda langsung dengan tim workshop SmartprintID Balikpapan Barat.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20pesanan%20cetak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <MessageSquare size={18} />
                <span>Chat WhatsApp (0811-5444-638)</span>
              </a>
              <Link to="/cek-ongkir" className="btn btn-secondary btn-lg">
                <span>Cek Ongkir Ekspedisi</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
