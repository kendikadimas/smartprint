import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: 14 }}>
              <img src="/images/logo.jpg" alt="SmartprintID Logo" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <div>
                <span className="brand-name">SmartprintID</span>
                <span className="brand-sub">Great Service &amp; Quality</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 18, lineHeight: 1.6 }}>
              Pabrikasi dan workshop percetakan komersial langsung dari Balikpapan Barat. Melayani pengadaan kemasan UMKM, korporasi, dan instansi di Kalimantan Timur serta kawasan IKN.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/smartprintid/"
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-neutral"
              >
                Instagram @smartprintid
              </a>
              <a
                href="https://www.facebook.com/SmartprintID"
                target="_blank"
                rel="noopener noreferrer"
                className="badge badge-neutral"
              >
                Facebook SmartprintID
              </a>
            </div>
          </div>

          {/* Lini Produk */}
          <div className="footer-col">
            <h4>Lini Produk</h4>
            <ul className="footer-links">
              <li><Link to="/katalog?cat=kemasan">Dus &amp; Box Kemasan Makanan</Link></li>
              <li><Link to="/katalog?cat=stiker">Stiker Label Vinyl &amp; Kromo</Link></li>
              <li><Link to="/katalog?cat=cup">Sablon Cup Minuman Kopi</Link></li>
              <li><Link to="/katalog?cat=paperbag">Paper Bag Kraft &amp; Butik</Link></li>
              <li><Link to="/katalog?cat=map">Map Rapot &amp; Ijazah Foil Emas</Link></li>
              <li><Link to="/katalog?cat=souvenir">Kalender Spiral &amp; Mug SNI</Link></li>
            </ul>
          </div>

          {/* Navigasi Situs */}
          <div className="footer-col">
            <h4>Navigasi Situs</h4>
            <ul className="footer-links">
              <li><Link to="/">Beranda Utama</Link></li>
              <li><Link to="/katalog">Katalog Produk</Link></li>
              <li><Link to="/cek-ongkir">Kalkulator Cek Ongkir</Link></li>
              <li><Link to="/tentang-kami">Profil &amp; Fasilitas Mesin</Link></li>
              <li><Link to="/karir">Lowongan Kerja Workshop</Link></li>
              <li><Link to="/artikel">Artikel &amp; Panduan Teknis</Link></li>
              <li><Link to="/kontak">Kontak &amp; Peta Lokasi</Link></li>
            </ul>
          </div>

          {/* Alamat Workshop */}
          <div className="footer-col">
            <h4>Alamat Workshop</h4>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Workshop Balikpapan Barat (76131)</strong><br />
                  Jl. Gunung Empat (Gg. Sumber) RT.25 No. 68, Kel. Margo Mulyo, Kota Balikpapan.
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/628115444638" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    0811-5444-638
                  </a>{' '}
                  / 0822-5012-1212<br />
                  <strong>Telepon:</strong> (0542) 415737
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <a href="mailto:order@smartprint.co.id">order@smartprint.co.id</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Clock size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Jam Operasional:</strong><br />
                  Senin s/d Minggu: 08:00 - 22:00 WITA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>&copy; 2026 SmartprintID Balikpapan (smartprint.co.id). Hak cipta dilindungi.</div>
          <div>Pabrikasi Cetak Kemasan &amp; Komersial Kalimantan Timur</div>
        </div>
      </div>
    </footer>
  );
}
