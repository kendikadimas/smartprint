import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, MessageSquare, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

export default function KatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'kemasan', label: 'Dus & Box Kemasan' },
    { id: 'stiker', label: 'Stiker & Label' },
    { id: 'cup', label: 'Sablon Cup' },
    { id: 'paperbag', label: 'Paper Bag' },
    { id: 'map', label: 'Map Rapot & Ijazah' },
    { id: 'souvenir', label: 'Souvenir & Reklame' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Katalog Produk</span>
          </nav>
          <div className="section-index">DAFTAR PRODUKSI &amp; SPESIFIKASI MATERIAL</div>
          <h1 className="page-title">Katalog Produk Percetakan</h1>
          <p className="page-subtitle">
            Seluruh item diproduksi langsung di workshop Balikpapan Barat menggunakan mesin offset lembaran, digital press, sablon silinder, dan mesin pond otomatis.
          </p>

          {/* Search Bar & Counter */}
          <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="search-wrapper">
              <span className="search-icon">
                <Search size={18} />
              </span>
              <input
                type="search"
                className="search-input"
                placeholder="Cari produk atau bahan (contoh: ivory, stiker, cup)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mono-num" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Menampilkan <strong style={{ color: 'var(--text-main)' }}>{filteredProducts.length}</strong> spesifikasi produk
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="container" style={{ marginBottom: 72 }}>
        {filteredProducts.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>Produk Tidak Ditemukan</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
              Tidak ada produk yang cocok dengan pencarian "{searchQuery}".
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            >
              Reset Filter &amp; Pencarian
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>
            {filteredProducts.map((p) => (
              <article key={p.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: 12, left: 12 }}>
                    <span className="badge badge-red">{p.categoryLabel}</span>
                  </div>
                </div>

                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div className="section-index" style={{ fontSize: '0.72rem', marginBottom: 4 }}>
                      MIN. ORDER {p.minOrder}
                    </div>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: 10, lineHeight: 1.35 }}>
                      {p.title}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 16 }}>
                      {p.desc}
                    </p>

                    <div style={{ marginBottom: 18 }}>
                      <div style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
                        Opsi Material Pilihan:
                      </div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {p.materials.map((m, idx) => (
                          <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.72rem', textTransform: 'none' }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Mulai Dari:</div>
                      <div className="mono-num" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {p.basePrice}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => setSelectedProduct(p)}
                    >
                      Lihat Rincian
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Custom Order Box */}
        <div className="card" style={{
          marginTop: 48,
          borderLeft: '4px solid var(--primary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20
        }}>
          <div>
            <div className="section-index">UKURAN KUSTOM &amp; PISAU POND KHUSUS</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 6 }}>Butuh Dimensi Box Khusus atau Sampel Kertas?</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Kami memproduksi pisau pond sesuai lekukan kemasan Anda dan melayani pengiriman sampel bahan ke alamat Anda.
            </p>
          </div>
          <a
            href="https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20butuh%20cetak%20ukuran%20kustom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <MessageSquare size={16} />
            <span>Konsultasi Ukuran Kustom</span>
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              aria-label="Tutup"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={20} />
            </button>

            <div style={{ height: 220, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 20 }}>
              <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <span className="badge badge-red" style={{ marginBottom: 10 }}>{selectedProduct.categoryLabel}</span>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 12 }}>{selectedProduct.title}</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 20 }}>
              {selectedProduct.desc}
            </p>

            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: 18, borderRadius: 'var(--radius-sm)', marginBottom: 20, border: '1px solid var(--border-medium)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: 8 }}>
                Pilihan Material &amp; Gramatur:
              </div>
              <ul style={{ paddingLeft: 20, fontSize: '0.88rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {selectedProduct.materials.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border-medium)', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Minimal Pemesanan: <strong>{selectedProduct.minOrder}</strong></span>
                <span>Estimasi Harga: <strong className="mono-num" style={{ color: 'var(--primary)' }}>{selectedProduct.basePrice}</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>
                Tutup
              </button>
              <a
                href={`https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20ingin%20tanya%20spesifikasi%20${selectedProduct.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare size={16} />
                <span>Pesan Produk Ini via WA</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
