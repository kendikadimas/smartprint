import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import KatalogPage from './pages/KatalogPage';
import CekOngkirPage from './pages/CekOngkirPage';
import TentangKamiPage from './pages/TentangKamiPage';
import KarirPage from './pages/KarirPage';
import ArtikelPage from './pages/ArtikelPage';
import KontakPage from './pages/KontakPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<KatalogPage />} />
          <Route path="/cek-ongkir" element={<CekOngkirPage />} />
          <Route path="/tentang-kami" element={<TentangKamiPage />} />
          <Route path="/karir" element={<KarirPage />} />
          <Route path="/artikel" element={<ArtikelPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          {/* Legacy / Alias paths */}
          <Route path="/blog" element={<Navigate to="/artikel" replace />} />
          <Route path="/katalog.html" element={<Navigate to="/katalog" replace />} />
          <Route path="/cek-ongkir.html" element={<Navigate to="/cek-ongkir" replace />} />
          <Route path="/tentang-kami.html" element={<Navigate to="/tentang-kami" replace />} />
          <Route path="/karir.html" element={<Navigate to="/karir" replace />} />
          <Route path="/blog.html" element={<Navigate to="/artikel" replace />} />
          <Route path="/kontak.html" element={<Navigate to="/kontak" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
