import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Clock, BookOpen, MessageSquare } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';

export default function ArtikelPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return ARTICLES;
    const q = searchQuery.toLowerCase();
    return ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Artikel &amp; Panduan Teknis</span>
          </nav>
          <div className="section-index">DOKUMENTASI MATERIAL &amp; ARSIP WORKSHOP</div>
          <h1 className="page-title">Panduan Spesifikasi Cetak &amp; Kemasan</h1>
          <p className="page-subtitle">
            Referensi praktis mengenai karakteristik kertas kemasan makanan, daya tahan stiker label anti air, persiapan file pra-cetak CMYK, serta panduan teknis percetakan dari smartprint.co.id.
          </p>

          <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="search-wrapper">
              <span className="search-icon">
                <Search size={18} />
              </span>
              <input
                type="search"
                className="search-input"
                placeholder="Cari topik panduan (contoh: ivory, stiker, cup)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mono-num" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Menampilkan <strong style={{ color: 'var(--text-main)' }}>{filteredArticles.length}</strong> artikel &amp; panduan
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginBottom: 72 }}>
        {filteredArticles.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>Artikel Tidak Ditemukan</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
              Tidak ada panduan yang cocok dengan kata kunci "{searchQuery}".
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setSearchQuery('')}
            >
              Tampilkan Semua Artikel
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 28 }}>
            {filteredArticles.map((article) => (
              <article key={article.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>{article.category}</span>
                      <span className="mono-num" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{article.date}</span>
                    </div>

                    <h2 style={{ fontSize: '1.25rem', marginBottom: 10, lineHeight: 1.35 }}>
                      {article.title}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 18 }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedArticle(article)}
                    >
                      Baca Selengkapnya
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              aria-label="Tutup"
              onClick={() => setSelectedArticle(null)}
            >
              <X size={20} />
            </button>

            <div style={{ height: 240, borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: 20 }}>
              <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
              <span className="badge badge-red">{selectedArticle.category}</span>
              <span className="mono-num" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selectedArticle.date}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>• {selectedArticle.readTime}</span>
            </div>

            <h1 style={{ fontSize: '1.6rem', marginBottom: 16, lineHeight: 1.3 }}>
              {selectedArticle.title}
            </h1>

            <div
              style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border-medium)' }}>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSelectedArticle(null)}>
                Tutup Panduan
              </button>
              <a
                href={`https://wa.me/628115444638?text=Halo%20SmartprintID,%20saya%20tertarik%20dengan%20panduan%20${encodeURIComponent(selectedArticle.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <MessageSquare size={15} />
                <span>Konsultasi Terkait Topik Ini</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
