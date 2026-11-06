import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Factory, ArrowRight, MessageSquare } from 'lucide-react';

export default function TentangKamiPage() {
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
          <h1 className="page-title">PT OLEH KELUARGA BESAR (SmartprintID)</h1>
          <p className="page-subtitle">
            Perusahaan jasa percetakan lokal yang beroperasi lebih dari 30 tahun di Balikpapan, Kalimantan Timur (sejak 1994).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        {/* 1. Identitas Operasional Split */}
        <section style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, marginBottom: 64 }}>
          <div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 16 }}>
              Dedikasi Percetakan &amp; Spesialis Kemasan Sejak 1994
            </h2>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 18 }}>
              PT OLEH KELUARGA BESAR atau dikenal dengan <strong>SmartprintID</strong> adalah perusahaan percetakan lokal yang melayani kebutuhan korporat &amp; instansi pemerintahan, UMKM &amp; pelaku usaha lokal, event organizer (EO) &amp; komunitas, mahasiswa &amp; pelajar, hingga pesanan personal.
            </p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 24 }}>
              Setiap produk dikerjakan dengan bahan berkualitas, teknologi mesin terbaik, pelayanan ramah, cepat tanggap, harga kompetitif, serta garansi cetak ulang jika terjadi kesalahan produksi.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Konsultasi &amp; Cepat Tanggap</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Konsultasi gratis untuk spesifikasi kertas kemasan, stiker, dan materi promosi.
                </p>
              </div>

              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Garansi Cetak Ulang</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Jaminan cetak ulang jika terjadi salah produksi, dengan sistem ACC proofing yang aman.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Credentials Sidebar Card */}
          <aside className="card" style={{ padding: 28, height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Informasi Workshop &amp; Kontak</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 20, lineHeight: 1.5 }}>
              Kunjungi workshop kami untuk melihat sampel kemasan makanan, stiker, dan contoh bahan:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.86rem', borderTop: '1px solid var(--border-medium)', paddingTop: 18 }}>
              <div>
                <strong>Alamat Workshop &amp; Pengiriman:</strong><br />
                Jl. Gunung Empat No 68 RT 25 Margo Mulyo, Balikpapan (76131).
              </div>
              <div>
                <strong>Alamat Kantor:</strong><br />
                Jl. Telindung X No 73 RT 88, Balikpapan.
              </div>
              <div>
                <strong>WhatsApp Resmi:</strong><br />
                <a href="https://wa.me/628115420700" target="_blank" rel="noopener noreferrer" className="mono-num" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                  0811-5420-700
                </a>
              </div>
              <div>
                <strong>Email Bisnis:</strong><br />
                order@smartprint.co.id
              </div>
              <div>
                <strong>Jam Operasional:</strong><br />
                08.00 - 22.00 WITA <span style={{ color: 'var(--text-muted)' }}>(Buka Setiap Hari)</span>
              </div>
            </div>

            <Link to="/kontak" className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: 22 }}>
              Lihat Kontak &amp; Peta Lengkap
            </Link>
          </aside>
        </section>

        {/* 2. Lini Mesin Produksi */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Peralatan Cetak &amp; Finishing</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Mesin cetak offset lembaran, pond die-cut otomatis, dan foil timbul di workshop kami.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="/images/bhm2.jpg" alt="Lini Cetak Offset Lembaran" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Cetak Offset Lembaran</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Produksi dus makanan, paper bag, kalender, dan brosur dalam partai besar dengan warna CMYK presisi.
                </p>
              </div>
            </article>

            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="/images/rt1.jpg" alt="Mesin Pond Die Cut" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Mesin Pond &amp; Die-Cut</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Garis lipatan rel dan potongan pisau pond untuk dus kemasan kuncian, hangtag, dan stiker.
                </p>
              </div>
            </article>

            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="/images/rt6.jpg" alt="Mesin Foil Emas dan Emboss" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>Foil Emas &amp; Emboss Timbul</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Aplikasi foil metalik emas/perak dan cetak timbul untuk map ijazah, sertifikat, dan box premium.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 3. Komitmen Mutu */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: 12 }}>Kontrol Mutu Produksi</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Setiap pesanan melewati pemeriksaan menyeluruh sebelum serah terima atau pengiriman.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>01</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Pemeriksaan File Pra-Cetak</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Memastikan resolusi minimal 300 DPI, format CMYK, dan margin aman pisau potong.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>02</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Kalibrasi Register Warna Mesin</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Uji lembar pertama (proof sheet) sebelum pencetakan massal dilanjutkan.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>03</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Pemeriksaan Pond &amp; Finishing</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Memastikan lipatan rapi, presisi, dan kuncian dus kokoh saat dirakit.
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
