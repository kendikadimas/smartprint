import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Katalog', path: '/katalog' },
    { label: 'Cek Ongkir', path: '/cek-ongkir' },
    { label: 'Tentang Kami', path: '/tentang-kami' },
    { label: 'Karir', path: '/karir' },
    { label: 'Artikel', path: '/artikel' },
    { label: 'Kontak', path: '/kontak' }
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-info">
            <span>Jl. Gunung Empat RT.25 No. 68 Balikpapan (76131)</span>
            <span>•</span>
            <span>Senin - Jumat: 09:00 - 17:00 WITA</span>
          </div>
          <div className="top-bar-contact">
            <a href="tel:0542415737" className="mono-num">Tel: (0542) 415737</a>
            <span>•</span>
            <a href="mailto:order@smartprint.co.id">order@smartprint.co.id</a>
            <span>•</span>
            <a
              href="https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20cetak"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-wa mono-num"
            >
              WA: 0811-5444-638
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo.jpg" alt="SmartprintID Logo" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
            <div>
              <span className="brand-name">SmartprintID</span>
              <span className="brand-sub">Great Service &amp; Quality</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" aria-label="Navigasi Utama">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <a
              href="https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20ingin%20konsultasi%20pesanan%20cetak"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <MessageSquare size={16} />
              <span>Konsultasi WA</span>
            </a>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ paddingTop: 12, borderTop: '1px solid var(--border-medium)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="tel:08115444638" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
              <Phone size={15} />
              <span>Hubungi Workshop (0811-5444-638)</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
