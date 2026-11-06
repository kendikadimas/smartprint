import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    product: 'Dus Box Makanan',
    quantity: '1000 pcs',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo SmartprintID Balikpapan, saya ingin konsultasi cetak:%0A- Nama: ${encodeURIComponent(formData.name)}%0A- No WhatsApp: ${encodeURIComponent(formData.whatsapp)}%0A- Kategori Produk: ${encodeURIComponent(formData.product)}%0A- Kuantitas: ${encodeURIComponent(formData.quantity)}%0A- Catatan: ${encodeURIComponent(formData.notes || '-')}`;
    window.open(`https://wa.me/628115420700?text=${text}`, '_blank');
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Kontak &amp; Lokasi</span>
          </nav>
          <h1 className="page-title">Hubungi Tim &amp; Kunjungi Workshop</h1>
          <p className="page-subtitle">
            Konsultasikan ukuran, bahan, dan jumlah cetak, atau datang langsung ke workshop kami di Balikpapan Barat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        <div className="split-sidebar">
          {/* Contact Form Card */}
          <div className="card responsive-card-pad">
            <h2 style={{ fontSize: '1.5rem', marginBottom: 6 }}>Formulir Konsultasi Cetak</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 20 }}>
              Kirim rincian kebutuhan Anda untuk terhubung langsung dengan tim kami via WhatsApp.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="client-name">Nama Lengkap / Usaha</label>
                  <input
                    type="text"
                    id="client-name"
                    required
                    className="form-control"
                    placeholder="Contoh: Dimas (Kopi Balikpapan)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="client-wa">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    id="client-wa"
                    required
                    className="form-control mono-num"
                    placeholder="0812-xxxx-xxxx"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="prod-select">Kategori Produk</label>
                  <select
                    id="prod-select"
                    className="form-control"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    <option value="Kemasan (Kotak Kue/Nasi, Kardus, Paper Bag)">Kemasan (Kotak Kue, Nasi, Kardus, Paper Bag)</option>
                    <option value="Stiker & Label (Vinyl, Chromo, Cutting)">Stiker &amp; Label (Vinyl Anti Air, Chromo, Cutting)</option>
                    <option value="Produk Promosi (Spanduk, Banner, Poster)">Produk Promosi (Spanduk, X-Banner, Roll Banner)</option>
                    <option value="Produk Cetak (Buku, Kalender, Map, Brosur)">Produk Cetak (Buku, Brosur, Kalender, Map Rapot)</option>
                    <option value="Reklame (Neon Box, Huruf Timbul, Papan Nama)">Reklame (Neon Box, Huruf Timbul, Papan Nama)</option>
                    <option value="Souvenir (Mug Custom, Tumbler, Plakat)">Souvenir (Mug SNI, Tumbler, Plakat)</option>
                    <option value="Jasa Percetakan (Print, Jilid, Laminasi)">Jasa Percetakan (Print Dokumen, Jilid, Laminasi)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="qty-select">Estimasi Kuantitas</label>
                  <input
                    type="text"
                    id="qty-select"
                    className="form-control"
                    placeholder="Contoh: 1.000 pcs"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="client-notes">Catatan Ukuran / Spesifikasi (Opsional)</label>
                <textarea
                  id="client-notes"
                  rows={4}
                  className="form-control"
                  placeholder="Sebutkan ukuran panjang x lebar x tinggi (cm), jenis bahan, atau finishing yang diinginkan..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <WhatsAppIcon size={18} />
                <span>Kirim Konsultasi ke WhatsApp Workshop</span>
              </button>
            </form>
          </div>

          {/* Workshop Location & Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: 16 }}>SmartprintID (PT OLEH KELUARGA BESAR)</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Alamat Workshop &amp; Gudang:</strong><br />
                    Jl. Gunung Empat No 68 RT 25 Margo Mulyo, Balikpapan (76131).<br />
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Alamat Kantor: Jl. Telindung X No 73 RT 88 Balikpapan</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <WhatsAppIcon size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>WhatsApp Resmi:</strong><br />
                    <a href="https://wa.me/628115420700" target="_blank" rel="noopener noreferrer" className="mono-num" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                      0811-5420-700
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Email Bisnis:</strong><br />
                    <a href="mailto:order@smartprint.co.id" style={{ textDecoration: 'underline' }}>
                      order@smartprint.co.id
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Clock size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Jam Operasional:</strong><br />
                    08.00 - 22.00 WITA (Buka Setiap Hari)
                  </div>
                </div>
              </div>
            </div>

            {/* Kebijakan Layanan Card */}
            <div className="card" style={{ padding: 22, backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-medium)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: 8, color: 'var(--primary)' }}>Kebijakan &amp; Garansi Toko</h4>
              <ul style={{ paddingLeft: 18, fontSize: '0.84rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li><strong>Free Ongkir:</strong> Min. order Rp 500.000 (wilayah Balikpapan).</li>
                <li><strong>Garansi Cetak Ulang:</strong> Jika salah produksi (retur 1-2 hari).</li>
                <li><strong>Persetujuan ACC:</strong> Produksi dimulai setelah ACC tertulis.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
