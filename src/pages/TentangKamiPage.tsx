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
          <h1 className="page-title">Pabrikasi Cetak Langsung di Balikpapan Barat</h1>
          <p className="page-subtitle">
            SmartprintID beroperasi sebagai produsen tangan pertama dengan fasilitas mesin cetak offset lembaran, sablon silinder, dan lini finishing die-cut terpusat di Jl. Gunung Empat RT.25 No. 68, Balikpapan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        {/* 1. Identitas Operasional Split */}
        <section style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, marginBottom: 64 }}>
          <div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 16 }}>
              Menghubungkan Desain Brand dengan Kemasan Fisik yang Presisi
            </h2>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 18 }}>
              Kualitas produk kuliner, dokumen sekolah, maupun merchandise dinilai pertama kali dari kualitas cetakannya: ketebalan gramatur kertas, ketajaman separasi warna CMYK, dan kerapian lipatan pisau pond die-cut.
            </p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: 28 }}>
              Dengan memusatkan divisi pra-cetak (pre-press setting), mesin cetak offset lembaran, sablon silinder cup, dan lini finishing di bawah satu atap workshop di Balikpapan Barat, kami memangkas rantai perantara sehingga biaya produksi lebih terukur dan jadwal pengerjaan terkontrol langsung.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Sentra Kemasan Kaltim &amp; IKN</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Menyuplai kebutuhan kemasan UMKM, katering, perhotelan, sekolah, dan instansi di Balikpapan, Samarinda, hingga IKN Nusantara.
                </p>
              </div>

              <div className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 6 }}>Harga Pabrik Tangan Pertama</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Pelanggan dapat menghitung estimasi biaya produksi dan berat pengiriman secara mandiri tanpa biaya tersembunyi.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Credentials Sidebar Card */}
          <aside className="card" style={{ borderTop: '4px solid var(--primary)', padding: 28, height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: 10 }}>Kunjungan &amp; Sampel Bahan</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 20, lineHeight: 1.55 }}>
              Anda dapat mengunjungi workshop kami untuk memegang langsung sampel gramatur kertas Ivory, Kraft, Duplex, dan contoh foil emas sebelum mencetak:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.86rem', borderTop: '1px solid var(--border-medium)', paddingTop: 18 }}>
              <div>
                <strong>Alamat Lengkap:</strong><br />
                Jl. Gunung Empat RT.25 No. 68, Kel. Margo Mulyo, Balikpapan Barat (76131).
              </div>
              <div>
                <strong>Telepon &amp; Fax:</strong><br />
                <span className="mono-num">(0542) 415737</span> | Fax: <span className="mono-num">(0542) 741492</span>
              </div>
              <div>
                <strong>WhatsApp Layanan Pelanggan:</strong><br />
                <span className="mono-num">0811-5444-638</span> / <span className="mono-num">0822-5012-1212</span>
              </div>
              <div>
                <strong>Jam Operasional:</strong><br />
                Senin s/d Minggu: <span className="mono-num">08:00 - 22:00 WITA</span>
              </div>
            </div>

            <Link to="/kontak" className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: 22 }}>
              Lihat Peta &amp; Kontak Lengkap
            </Link>
          </aside>
        </section>

        {/* 2. Lini Mesin Produksi */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Peralatan Cetak &amp; Finishing di Fasilitas Kami</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Dokumentasi mesin cetak offset lembaran, mesin pond die-cut otomatis, dan mesin hotprint timbul di workshop.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="/images/bhm2.jpg" alt="Lini Cetak Offset Lembaran" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <span className="badge badge-red" style={{ marginBottom: 10 }}>OFFSET &amp; DIGITAL PRESS</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Lini Cetak Offset Lembaran</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Digunakan untuk produksi dus kemasan makanan, paper bag, kalender, dan brosur dalam jumlah ratusan hingga ribuan lembar dengan kestabilan warna CMYK yang konsisten.
                </p>
              </div>
            </article>

            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="/images/rt1.jpg" alt="Mesin Pond Die Cut" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <span className="badge badge-emerald" style={{ marginBottom: 10 }}>DIE-CUT &amp; POND</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Mesin Pond &amp; Pola Kemasan</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Membuat garis lipatan (creasing) dan potongan pisau pond untuk dus kuncian, jendela mika kemasan, hangtag produk, serta stiker label kiss-cut.
                </p>
              </div>
            </article>

            <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src="/images/rt6.jpg" alt="Mesin Foil Emas dan Emboss" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <span className="badge badge-amber" style={{ marginBottom: 10 }}>HOTPRINT &amp; EMBOSS</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Mesin Foil Emas &amp; Cetak Timbul</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Menerapkan lapisan foil metalik emas atau perak beserta efek timbul (emboss) pada sampul map rapot sekolah, ijazah universitas, dan kemasan premium.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 3. Komitmen Mutu */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: 12 }}>Komitmen Mutu Produksi</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Setiap pesanan melewati empat tahapan verifikasi sebelum diserahkan kepada pelanggan atau pihak ekspedisi.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>01</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Pemeriksaan File Pra-Cetak (Pre-Press)</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Memastikan resolusi gambar di atas 300 DPI, mode warna CMYK, dan margin pisau potong aman agar tidak ada teks terpotong.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>02</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Kalibrasi Ketepatan Register Warna Mesin</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Operator memeriksa lembar cetak pertama (proof print) secara teliti sebelum pencetakan massal dilanjutkan.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>03</span>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>Kontrol Kualitas Pisau Pond &amp; Finishing</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Pemeriksaan hasil tekukan lipatan box agar kuncian tidak robek dan mudah dirakit oleh staf kemasan Anda.
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
