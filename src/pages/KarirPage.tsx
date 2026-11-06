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
          <h1 className="page-title">Bergabung dengan Tim Workshop SmartprintID</h1>
          <p className="page-subtitle">
            Peluang karir divisi pra-cetak, operator cetak offset, finishing pond, dan layanan pelanggan di Balikpapan Barat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        {/* 1. Standar Lingkungan Kerja */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, marginBottom: 64, alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 12 }}>
              Budaya Kerja Workshop
            </h2>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Kolaborasi terukur dari pemeriksaan file pra-cetak hingga pengiriman produk.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>01</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>Praktik Mesin Industri</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Pengoperasian mesin offset lembaran, digital press, sablon cup, dan pond dengan supervisi berpengalaman.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>02</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>Alur Kerja Terkoordinasi</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Sinkronisasi harian antara desainer, CS, dan operator produksi demi ketepatan jadwal pesanan.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <span className="mono-num" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>03</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>Apresiasi &amp; Insentif</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Kompensasi bulanan tepat waktu didukung bonus ketelitian dan pencapaian target produksi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Lowongan Kerja Aktif */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: 8 }}>Lowongan Kerja Tersedia</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
              Penempatan di Workshop SmartprintID, Balikpapan Barat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
            {JOBS.map((job) => (
              <article key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>{job.type}</span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>{job.department}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>{job.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 16 }}>
                    {job.description}
                  </p>

                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: 14, borderRadius: 'var(--radius-sm)', marginBottom: 20, border: '1px solid var(--border-medium)' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', marginBottom: 6 }}>
                      Kualifikasi:
                    </div>
                    <ul style={{ paddingLeft: 18, fontSize: '0.84rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 5 }}>
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
                    Kirim Lamaran
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Direct Application Info */}
        <section className="card" style={{ padding: '32px 28px' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: 8 }}>Kirim CV &amp; Portofolio</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 20, maxWidth: 680 }}>
            Kirimkan berkas ke <strong style={{ color: 'var(--text-main)' }}>order@smartprint.co.id</strong> dengan subjek <em>[Posisi] - Nama Anda</em>, atau konfirmasi via WhatsApp.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/628115444638?text=Halo%20HRD%20SmartprintID,%20saya%20ingin%20mengonfirmasi%20pengiriman%20lamaran%20kerja"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <MessageSquare size={16} />
              <span>Konfirmasi via WhatsApp</span>
            </a>
            <a href="mailto:order@smartprint.co.id" className="btn btn-secondary btn-sm">
              <Mail size={16} />
              <span>Kirim via Email</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
