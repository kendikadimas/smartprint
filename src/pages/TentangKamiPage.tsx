import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Factory,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Users,
  Award,
  Sparkles,
  X
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import {
  FEATURED_MACHINES,
  WORKSHOP_EQUIPMENT_CATEGORIES,
  COMPANY_VALUES,
  ORGANIZATION_LEADERS,
  CLIENT_LOGOS,
  OFFICIAL_OFFICES,
  Machine
} from '../data/company';

export default function TentangKamiPage() {
  const [equipmentModalOpen, setEquipmentModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Tentang Kami</span>
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
            Company Profile Resmi
          </div>
          <h1 className="page-title">PT OLEH KELUARGA BESAR (SmartprintID)</h1>
          <p className="page-subtitle">
            Pabrikasi cetak kemasan dan komersial beroperasi lebih dari 30 tahun di Balikpapan, Kalimantan Timur (sejak 1994).
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="container" style={{ marginBottom: 72 }}>
        
        {/* 1. Profil Usaha & Dual Office Sidebar */}
        <section className="split-sidebar" style={{ marginBottom: 64 }}>
          <div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 16 }}>
              Dedikasi Percetakan &amp; Spesialis Kemasan Sejak 1994
            </h2>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 18 }}>
              <strong>PT OLEH KELUARGA BESAR</strong> atau dikenal dengan <strong>SmartprintID</strong> adalah perusahaan percetakan lokal di Balikpapan yang melayani kebutuhan cetak korporat, BUMN &amp; instansi pemerintah, UMKM &amp; pelaku usaha kuliner, event organizer (EO) &amp; komunitas, hingga pesanan personal.
            </p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 24 }}>
              Seluruh produk dikerjakan mandiri di workshop kami dengan bahan berkualitas food grade, lini mesin offset dan digital mutakhir, layanan cepat tanggap, harga bersaing, serta garansi cetak ulang jika terjadi salah produksi.
            </p>

            <div className="form-grid-2">
              <div className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <ShieldCheck size={20} style={{ color: 'var(--primary)' }} />
                  <h3 style={{ fontSize: '1.05rem', margin: 0 }}>Garansi Cetak Ulang</h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Jaminan cetak ulang tanpa biaya tambahan jika terjadi kesalahan produksi dengan sistem persetujuan ACC proofing sebelum naik mesin.
                </p>
              </div>

              <div className="card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Factory size={20} style={{ color: 'var(--primary)' }} />
                  <h3 style={{ fontSize: '1.05rem', margin: 0 }}>Produsen Tangan Pertama</h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Mesin offset lembaran, pond die-cut, dan laminator milik sendiri di Balikpapan Barat sehingga harga lebih hemat tanpa perantara.
                </p>
              </div>
            </div>
          </div>

          {/* Dual Offices Sidebar Card */}
          <aside className="card" style={{ padding: 26, height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.18rem', marginBottom: 6 }}>Lokasi Kantor &amp; Workshop</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: 18, lineHeight: 1.5 }}>
              Fasilitas resmi PT OLEH KELUARGA BESAR di Kota Balikpapan:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: '0.86rem', borderTop: '1px solid var(--border-medium)', paddingTop: 16 }}>
              {OFFICIAL_OFFICES.map((off, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--bg-subtle)', padding: 14, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)' }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <MapPin size={15} style={{ color: 'var(--primary)' }} />
                    <span>{off.title}</span>
                  </div>
                  <div style={{ color: 'var(--text-body)', lineHeight: 1.5, marginBottom: 6 }}>
                    {off.address}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {off.note}
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>WhatsApp Resmi:</span>
                  <a href="https://wa.me/628115420700" target="_blank" rel="noopener noreferrer" className="mono-num" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                    0811-5420-700
                  </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Email:</span>
                  <a href="mailto:order@smartprint.co.id" style={{ color: 'var(--text-main)', fontWeight: 600 }}>
                    order@smartprint.co.id
                  </a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Operasional:</span>
                  <span style={{ fontWeight: 600 }}>08.00 - 22.00 WITA</span>
                </div>
              </div>
            </div>

            <Link to="/kontak" className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: 18 }}>
              Hubungi Workshop &amp; Peta
            </Link>
          </aside>
        </section>

        {/* 2. Visi & Misi Perusahaan */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Visi &amp; Misi Perusahaan</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Komitmen PT OLEH KELUARGA BESAR dalam menghadirkan standar mutu percetakan terbaik.
            </p>
          </div>

          <div className="grid-2">
            <div className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--primary)',
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: 10
                }}>
                  <Award size={16} />
                  <span>Visi Perusahaan (Vision)</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', lineHeight: 1.35, marginBottom: 12 }}>
                  Menjadi Perusahaan Percetakan Kelas Dunia
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
                  Menjadi perusahaan kelas dunia yang berfokus di bidang percetakan untuk menciptakan produk bernilai tinggi dengan pelayanan profesional dan berorientasi penuh pada kepuasan pelanggan.
                </p>
              </div>
            </div>

            <div className="card" style={{ padding: 28 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '0.84rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 10
              }}>
                <Sparkles size={16} />
                <span>Misi Perusahaan (Mission)</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, margin: 0, padding: 0 }}>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.78rem', flexShrink: 0, marginTop: 2 }}>
                    1
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                    Menciptakan produk cetak bermutu tinggi melalui pemanfaatan mesin teknologi yang up-to-date.
                  </span>
                </li>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.78rem', flexShrink: 0, marginTop: 2 }}>
                    2
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                    Menghadirkan layanan tepat waktu, terencana, menjawab kebutuhan mitra, serta harga kompetitif.
                  </span>
                </li>
                <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.78rem', flexShrink: 0, marginTop: 2 }}>
                    3
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                    Berinovasi secara terus-menerus mengikuti perkembangan tren desain dan kebutuhan pasar terkini.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Fasilitas & Mesin Produksi Utama (Real Machine Photos) */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Mesin Produksi &amp; Peralatan Cetak</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                Foto asli mesin cetak offset lembaran, digital press, dan mesin pond die-cut di workshop Balikpapan Barat.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setEquipmentModalOpen(true)}
            >
              <Cpu size={15} />
              <span>Lihat 20+ Daftar Peralatan Lengkap &rarr;</span>
            </button>
          </div>

          <div className="grid-3">
            {FEATURED_MACHINES.slice(0, 6).map((m) => (
              <article
                key={m.id}
                className="card"
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setSelectedMachine(m)}
              >
                <div style={{ height: 240, position: 'relative', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 14 }}>
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: 'rgba(17, 24, 39, 0.85)',
                    color: '#FFFFFF',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {m.badge}
                  </span>
                </div>

                <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>
                      {m.category}
                    </div>
                    <h3 style={{ fontSize: '1.18rem', marginBottom: 8, lineHeight: 1.3 }}>
                      {m.name}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: 12 }}>
                      {m.desc}
                    </p>
                  </div>
                  <div style={{ paddingTop: 10, borderTop: '1px solid var(--border-medium)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <strong>Spesifikasi:</strong> {m.specs}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Nilai-Nilai Perusahaan (5 Core Values) */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Nilai-Nilai Perusahaan</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Fondasi profesionalisme yang kami pegang teguh dalam setiap lembar cetakan dan pelayanan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16 }}>
            {COMPANY_VALUES.map((val) => (
              <div key={val.number} className="card" style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="mono-num" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 8 }}>
                    {val.number}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 6, lineHeight: 1.3 }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Legalitas & Struktur Organisasi */}
        <section style={{ marginBottom: 64 }}>
          <div className="split-sidebar">
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'var(--bg-subtle)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-medium)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.76rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 12
              }}>
                Badan Hukum Resmi
              </div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: 14 }}>
                Manajemen &amp; Tata Kelola Perusahaan
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 16 }}>
                Perusahaan didirikan dalam bentuk <strong>PERSEROAN TERBATAS (PT) PT OLEH KELUARGA BESAR</strong>. Dewan Komisaris berwenang melakukan pengawasan dan memberikan nasihat atas kebijakan direksi, sementara Direksi bertanggung jawab penuh memimpin operasional dan strategi pengembangan usaha.
              </p>
              <div className="card" style={{ padding: 20, backgroundColor: 'var(--bg-subtle)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: 6, color: 'var(--text-main)' }}>Prinsip Tata Kelola:</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Transparansi administrasi, kepatuhan legalitas hukum, serta koordinasi harian terpadu antara desainer pra-cetak, operator mesin industri, dan tim kontrol kualitas.
                </p>
              </div>
            </div>

            {/* Leadership Matrix */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Users size={18} style={{ color: 'var(--primary)' }} />
                <span>Struktur Kepemimpinan</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ORGANIZATION_LEADERS.map((leader, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: idx !== ORGANIZATION_LEADERS.length - 1 ? '1px solid var(--border-medium)' : 'none',
                      fontSize: '0.86rem'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{leader.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{leader.role}</div>
                    </div>
                    {leader.level === 'board' && (
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--bg-subtle)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--primary)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-sm)'
                      }}>
                        Dewan Direksi
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Portofolio Klien & Mitra Terpercaya */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Portofolio Klien &amp; Mitra Terpercaya</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Dipercaya oleh puluhan lembaga negara, BUMN terkemuka, institusi perbankan, brand F&amp;B nasional, dan pelaku industri di Kalimantan Timur &amp; IKN.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 14
          }}>
            {CLIENT_LOGOS.map((logoUrl, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  height: 86,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <img
                  src={logoUrl}
                  alt="Mitra Klien SmartprintID"
                  style={{
                    maxHeight: 52,
                    maxWidth: 126,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 7. Bottom CTA Banner */}
        <section>
          <div className="card-red cta-banner-flex" style={{ padding: '36px 30px' }}>
            <div style={{ maxWidth: 640 }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 8, color: '#FFFFFF' }}>
                Konsultasikan Kebutuhan Cetak Anda Langsung ke Workshop
              </h2>
              <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6 }}>
                Diskusikan gramatur kertas, dummy sampel kemasan, dan kuantitas pesanan Anda bersama tim teknis SmartprintID di Balikpapan Barat.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/628115420700?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20spesifikasi%20cetak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg"
              >
                <WhatsAppIcon size={18} />
                <span>Chat WA Workshop</span>
              </a>
              <Link to="/cek-ongkir" className="btn btn-outline-white btn-lg">
                <span>Cek Ongkir Pengiriman</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Modal 1: Full 20+ Equipment Categories List */}
      {equipmentModalOpen && (
        <div className="modal-overlay" onClick={() => setEquipmentModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 840 }}>
            <button
              type="button"
              className="modal-close"
              aria-label="Tutup Modal"
              onClick={() => setEquipmentModalOpen(false)}
            >
              <X size={20} />
            </button>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: 'var(--primary)',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 8
            }}>
              <Factory size={15} />
              <span>Fasilitas Workshop Lengkap</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: 8 }}>
              Daftar 20+ Mesin &amp; Peralatan Produksi SmartprintID
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 24 }}>
              Peralatan milik sendiri di Jl. Gunung Empat No. 68 untuk mendukung alur pra-cetak, percetakan massal, pond die-cut, hingga finishing rapi.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxHeight: '60vh', overflowY: 'auto', paddingRight: 4 }}>
              {WORKSHOP_EQUIPMENT_CATEGORIES.map((cat, idx) => (
                <div key={idx} style={{ backgroundColor: 'var(--bg-subtle)', padding: 18, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: 12, borderBottom: '1px solid var(--border-medium)', paddingBottom: 6 }}>
                    {cat.categoryName}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} style={{ backgroundColor: '#FFFFFF', padding: 12, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--text-main)', marginBottom: 4 }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--border-medium)', display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setEquipmentModalOpen(false)}
              >
                Tutup
              </button>
              <a
                href="https://wa.me/628115420700?text=Halo%20SmartprintID,%20saya%20ingin%20tanya%20spesifikasi%20mesin%20cetak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <WhatsAppIcon size={16} />
                <span>Konsultasi Kapasitas Mesin</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Single Machine Detail Preview */}
      {selectedMachine && (
        <div className="modal-overlay" onClick={() => setSelectedMachine(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640 }}>
            <button
              type="button"
              className="modal-close"
              aria-label="Tutup"
              onClick={() => setSelectedMachine(null)}
            >
              <X size={20} />
            </button>

            <div style={{ height: 320, borderRadius: 'var(--radius-sm)', marginBottom: 18, backgroundColor: '#FFFFFF', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 14 }}>
              <img
                src={selectedMachine.image}
                alt={selectedMachine.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>
              {selectedMachine.category}
            </div>
            <h2 style={{ fontSize: '1.45rem', marginBottom: 10 }}>{selectedMachine.name}</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 18 }}>
              {selectedMachine.desc}
            </p>

            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: 14, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', marginBottom: 20 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 4 }}>
                Spesifikasi &amp; Kapasitas Kerja:
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                {selectedMachine.specs}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSelectedMachine(null)}>
                Tutup
              </button>
              <a
                href={`https://wa.me/628115420700?text=Halo%20SmartprintID,%20saya%20ingin%20tanya%20produksi%20dengan%20${selectedMachine.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <WhatsAppIcon size={16} />
                <span>Pesan Cetak via Mesin Ini</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
