import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

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
    const text = `Halo SmartprintID Balikpapan, saya ingin konsultasi cetak:%0A- Nama: ${encodeURIComponent(formData.name)}%0A- No WhatsApp: ${encodeURIComponent(formData.whatsapp)}%0A- Jenis Produk: ${encodeURIComponent(formData.product)}%0A- Kuantitas: ${encodeURIComponent(formData.quantity)}%0A- Catatan: ${encodeURIComponent(formData.notes || '-')}`;
    window.open(`https://wa.me/628115444638?text=${text}`, '_blank');
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
          <h1 className="page-title">Hubungi Tim Produksi &amp; Kunjungi Workshop</h1>
          <p className="page-subtitle">
            Kirimkan rincian dimensi, gramatur kertas, dan kuantitas cetak yang Anda butuhkan, atau datang langsung ke workshop kami di Balikpapan Barat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 36, alignItems: 'flex-start' }}>
          {/* Contact Form Card */}
          <div className="card" style={{ padding: 36 }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: 8 }}>Kirim Rincian Pesanan Cetak</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: 24 }}>
              Isi data di bawah ini untuk langsung terhubung dengan tim customer service workshop kami via WhatsApp.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="prod-select">Jenis Cetakan</label>
                  <select
                    id="prod-select"
                    className="form-control"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    <option value="Dus Box Makanan">Dus Box Makanan (Food Packaging)</option>
                    <option value="Stiker Label Kemasan">Stiker Label Botol / Toples</option>
                    <option value="Sablon Cup Minuman">Sablon Cup Minuman Plastik</option>
                    <option value="Paper Bag Butik">Paper Bag Kraft / Art Carton</option>
                    <option value="Map Rapot & Ijazah">Map Rapot &amp; Ijazah Emboss Emas</option>
                    <option value="Kalender & Souvenir">Kalender Spiral / Mug SNI</option>
                    <option value="Lainnya">Lainnya / Ukuran Kustom</option>
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
                <Send size={18} />
                <span>Kirim Konsultasi ke WhatsApp Workshop</span>
              </button>
            </form>
          </div>

          {/* Workshop Location & Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: 16 }}>Workshop SmartprintID</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Alamat Workshop:</strong><br />
                    Jl. Gunung Empat (Gg. Sumber) RT.25 No. 68, Kel. Margo Mulyo, Kec. Balikpapan Barat, Kota Balikpapan 76131.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Telepon Kantor &amp; Workshop:</strong><br />
                    <span className="mono-num">(0542) 415737</span> | Fax: <span className="mono-num">(0542) 741492</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <MessageSquare size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>WhatsApp Konsultasi Cepat:</strong><br />
                    <a href="https://wa.me/628115444638" target="_blank" rel="noopener noreferrer" className="mono-num" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                      0811-5444-638
                    </a>{' '}
                    / <span className="mono-num">0822-5012-1212</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Email Penawaran &amp; Pengiriman File:</strong><br />
                    <a href="mailto:order@smartprint.co.id" style={{ textDecoration: 'underline' }}>
                      order@smartprint.co.id
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Clock size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Jam Operasional Workshop:</strong><br />
                    Senin s/d Minggu: <span className="mono-num">08:00 - 22:00 WITA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps External Action Box */}
            <div className="card" style={{ padding: 24, backgroundColor: 'var(--bg-subtle)' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: 8 }}>Petunjuk Arah ke Workshop</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 16 }}>
                Masuk dari Jl. Letjen Suprapto, belok ke arah Jl. Gunung Empat (dekat Puskesmas Margo Mulyo / kawasan Kampung Atas Air).
              </p>
              <a
                href="https://maps.google.com/?q=SmartprintID+Balikpapan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
