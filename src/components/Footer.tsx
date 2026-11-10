import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: 14 }} aria-label="SmartprintID Beranda">
              <img src="/images/logo.jpg" alt="SmartprintID" />
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 18, lineHeight: 1.6 }}>
              PT OLEH KELUARGA BESAR. Jasa percetakan dan spesialis kemasan beroperasi lebih dari 30 tahun di Kota Balikpapan (sejak 1994).
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: '0.82rem' }}>
              <a
                href="https://www.instagram.com/smartprintID/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)' }}
              >
                Instagram: @smartprintID
              </a>
              <span style={{ color: 'var(--border-strong)' }}>•</span>
              <a
                href="https://www.tiktok.com/@Smartprint_id"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)' }}
              >
                TikTok: @Smartprint_id
              </a>
              <span style={{ color: 'var(--border-strong)' }}>•</span>
              <a
                href="https://www.facebook.com/SmartprintID"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)' }}
              >
                Facebook: Smartprint ID
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
            <h4>Alamat &amp; Kontak</h4>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Office 1 (Workshop &amp; Gudang Pengiriman):</strong><br />
                  Jl. Gunung Empat RT. 25 No 68 Margo Mulyo, Balikpapan (76131).<br />
                  <span style={{ color: 'var(--text-muted)' }}>Office 2 (Kantor Administrasi): Jl. Telindung 10 No 73, Muara Rapak</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <WhatsAppIcon size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>WhatsApp Resmi:</strong>{' '}
                  <a href="https://wa.me/628115420700" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    0811-5420-700
                  </a>
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
                  08.00 - 22.00 WITA (Buka Setiap Hari)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>&copy; 2019 PT OLEH KELUARGA BESAR. SmartprintID.</div>
          <div>Spesialis Kemasan &amp; Percetakan Balikpapan</div>
        </div>
      </div>
    </footer>
  );
}
