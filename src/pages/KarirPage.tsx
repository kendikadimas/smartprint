import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle2, MessageSquare, Mail, MapPin } from 'lucide-react';
import { JOBS } from '../data/jobs';

export default function KarirPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Karir &amp; Rekrutmen</span>
          </nav>
          <div className="section-index">REKRUTMEN TIM PRODUKSI &amp; DESAIN</div>
          <h1 className="page-title">Bergabung dengan Tim Workshop SmartprintID</h1>
          <p className="page-subtitle">
            Kami membuka kesempatan bagi praktisi desain grafis pra-cetak, operator mesin cetak offset, teknisi finishing pond, dan staf layanan pelanggan untuk berkarya di Balikpapan Barat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        {/* 1. Standar Lingkungan Kerja */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, marginBottom: 64, alignItems: 'flex-start' }}>
          <div>
            <div className="section-index">01 / LINGKUNGAN KERJA</div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 12 }}>
              Standar Kerja di Lini Produksi Kami
            </h2>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Setiap divisi bekerja saling terhubung mulai dari pemeriksaan file desain hingga barang siap dikirim ke pelanggan.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>01</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>Praktik Langsung di Mesin Industri</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Anggota tim mengoperasikan peralatan cetak offset, digital press, sablon silinder, dan mesin pond dengan pendampingan teknis langsung dari supervisor berpengalaman.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>02</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>Alur Kerja Terukur &amp; Kolaboratif</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Koordinasi harian yang jelas antara bagian admin CS, desainer pre-press, dan operator produksi untuk menjaga ketepatan jadwal pemenuhan pesanan.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>03</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>Apresiasi Kinerja Produksi</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Kompensasi bulanan tepat waktu disertai insentif berdasarkan ketelitian pengerjaan dan pencapaian target produksi tim workshop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Lowongan Kerja Aktif */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 32 }}>
            <div className="section-index">02 / POSISI TERBUKA</div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Daftar Lowongan Kerja di Balikpapan</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Penempatan kerja langsung di Workshop SmartprintID, Jl. Gunung Empat RT.25 No. 68, Balikpapan Barat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
            {JOBS.map((job) => (
              <article key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>{job.type}</span>
                    <span className="section-index" style={{ fontSize: '0.72rem', marginBottom: 0 }}>{job.department}</span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: 10 }}>{job.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 18 }}>
                    {job.description}
                  </p>

                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: 16, borderRadius: 'var(--radius-sm)', marginBottom: 20, border: '1px solid var(--border-medium)' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: 8 }}>
                      Kualifikasi yang Dicari:
                    </div>
                    <ul style={{ paddingLeft: 18, fontSize: '0.86rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-medium)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin size={14} />
                    <span>Balikpapan Barat</span>
                  </div>
                  <a
                    href={`https://wa.me/628115444638?text=Halo%20HRD%20SmartprintID,%20saya%20ingin%20melamar%20posisi%20${encodeURIComponent(job.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Kirim Lamaran Posisi Ini
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Direct Application Info */}
        <section className="card" style={{ borderLeft: '5px solid var(--primary)', padding: '36px 32px' }}>
          <div className="section-index">PENGIRIMAN BERKAS EMAIL / WHATSAPP</div>
          <h2 style={{ fontSize: '1.45rem', marginBottom: 10 }}>Kirimkan CV &amp; Portofolio Anda</h2>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 24, maxWidth: 760 }}>
            Anda dapat mengirimkan Curriculum Vitae (CV) dan tautan portofolio ke alamat email{' '}
            <strong style={{ color: 'var(--text-main)' }}>order@smartprint.co.id</strong> atau{' '}
            <strong style={{ color: 'var(--text-main)' }}>smartprint.id@gmail.com</strong> dengan subjek format <em>[Posisi yang Dilamar] - Nama Anda</em>.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/628115444638?text=Halo%20HRD%20SmartprintID,%20saya%20ingin%20mengonfirmasi%20pengiriman%20lamaran%20kerja"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageSquare size={16} />
              <span>Konfirmasi Lamaran via WA</span>
            </a>
            <a href="mailto:order@smartprint.co.id" className="btn btn-secondary">
              <Mail size={16} />
              <span>Kirim Berkas via Email</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
