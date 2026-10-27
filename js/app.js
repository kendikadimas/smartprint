const PRINT_PRODUCTS = [
  {
    id: 'box_kemasan',
    category: 'kemasan',
    categoryName: 'Kemasan & Box',
    title: 'Dus Box Makanan & Kue (Food Packaging)',
    desc: 'Kemasan cetak logo untuk roti, martabak, donat, katering, dan oleh-oleh. Menggunakan kertas food grade tahan minyak dengan potongan pisau pond presisi.',
    unit: 'box',
    minOrder: '500 box',
    weightPer1000: 25000,
    basePrice1000: 1650000,
    flagship: true,
    materials: [
      { name: 'Ivory 270 gsm (Food Grade Putih)', multiplier: 1.0 },
      { name: 'Ivory 300 gsm (Tebal & Kokoh)', multiplier: 1.2 },
      { name: 'Kraft Brown 290 gsm (Unbleached)', multiplier: 0.92 },
      { name: 'Duplex 310 gsm (Ekonomis)', multiplier: 0.85 }
    ],
    finishings: [
      { name: 'Potong Pond Standar', addCost: 0 },
      { name: 'Jendela Mika (Window)', addCost: 150000 },
      { name: 'Laminasi Doff Luar', addCost: 180000 },
      { name: 'Laminasi Glossy Luar', addCost: 180000 },
      { name: 'Emboss / Hotprint Logo', addCost: 220000 }
    ],
    image: 'images/rt1.jpg'
  },
  {
    id: 'stiker_label',
    category: 'stiker',
    categoryName: 'Stiker & Label',
    title: 'Stiker Label Kemasan Produk & Botol',
    desc: 'Stiker label untuk kemasan makanan, toples, botol kopi, dan pouch. Tersedia bahan Vinyl tahan air untuk produk dingin/frozen atau Kromo glossy.',
    unit: 'pcs',
    minOrder: '100 pcs',
    weightPer1000: 800,
    basePrice1000: 175000,
    materials: [
      { name: 'Kromo Glossy (Kertas)', multiplier: 1.0 },
      { name: 'Vinyl Matte (Tahan Air)', multiplier: 1.45 },
      { name: 'Vinyl Transparan Bening', multiplier: 1.6 }
    ],
    finishings: [
      { name: 'Kiss-Cut (Tinggal Tempel)', addCost: 0 },
      { name: 'Laminasi Doff', addCost: 35000 },
      { name: 'Laminasi Glossy', addCost: 35000 },
      { name: 'Poly Emas Foil', addCost: 95000 }
    ],
    image: 'images/rt2.jpg'
  },
  {
    id: 'paper_bag',
    category: 'paperbag',
    categoryName: 'Paper Bag',
    title: 'Paper Bag Cetak Logo (Kraft & Art Carton)',
    desc: 'Kantong kertas belanja butik, toko ritel, seminar kit instansi, dan kemasan hantaran dengan tali kur atau pita.',
    unit: 'pcs',
    minOrder: '300 pcs',
    weightPer1000: 18000,
    basePrice1000: 2400000,
    materials: [
      { name: 'Kraft Coklat 150 gsm', multiplier: 0.85 },
      { name: 'Art Carton 210 gsm', multiplier: 1.0 },
      { name: 'Art Carton 260 gsm', multiplier: 1.25 }
    ],
    finishings: [
      { name: 'Tali Kur + Mata Ayam', addCost: 0 },
      { name: 'Tali Pita Satin', addCost: 150000 },
      { name: 'Laminasi Doff + Foil Emas', addCost: 350000 }
    ],
    image: 'images/rt3.jpg'
  },
  {
    id: 'sablon_cup',
    category: 'sabloncup',
    categoryName: 'Sablon Cup',
    title: 'Sablon Cup Minuman Kopi & Boba (12-22 oz)',
    desc: 'Sablon silinder gelas plastik PP dan PET untuk kedai kopi dan minuman. Tinta khusus food packaging yang tajam dan tidak luntur.',
    unit: 'cup',
    minOrder: '1.000 cup',
    weightPer1000: 9500,
    basePrice1000: 450000,
    materials: [
      { name: 'Cup PP 7-8 gr (Standar)', multiplier: 1.0 },
      { name: 'Cup PP Oval Slim', multiplier: 1.15 }
    ],
    finishings: [
      { name: 'Sablon 1 Sisi (1 Warna)', addCost: 0 },
      { name: 'Sablon 2 Sisi Bolak-Balik', addCost: 50000 },
      { name: 'Sablon Melingkar', addCost: 90000 }
    ],
    image: 'images/rt4.jpg'
  },
  {
    id: 'map_rapot',
    category: 'sekolah',
    categoryName: 'Map Rapot & Ijazah',
    title: 'Map Rapot & Sampul Ijazah ASE Foil Emas',
    desc: 'Sampul dokumen resmi sekolah, universitas, dan instansi berbahan ASE tebal berlapis busa dengan cetak hotprint emas timbul.',
    unit: 'map',
    minOrder: '50 map',
    weightPer1000: 350000,
    basePrice1000: 16000000,
    materials: [
      { name: 'Cover ASE Standar + Busa', multiplier: 1.0 },
      { name: 'Cover ASE Spon Tebal + Kantong', multiplier: 1.18 }
    ],
    finishings: [
      { name: 'Hotprint Foil Emas Logo', addCost: 0 },
      { name: 'Emboss Timbul Logo', addCost: 450000 },
      { name: 'Siku Logam Kuningan (4 Sudut)', addCost: 350000 }
    ],
    image: 'images/rt6.jpg'
  },
  {
    id: 'souvenir_mug',
    category: 'souvenir',
    categoryName: 'Souvenir & Kalender',
    title: 'Mug Keramik SNI & Kalender Meja Spiral',
    desc: 'Cetak mug promosi perusahaan dan kalender meja/dinding jilid spiral kawat untuk kebutuhan korporasi dan instansi.',
    unit: 'pcs',
    minOrder: '24 pcs',
    weightPer1000: 380000,
    basePrice1000: 18000000,
    materials: [
      { name: 'Mug Keramik Putih SNI', multiplier: 1.0 },
      { name: 'Kalender Meja Art Carton 260 gsm', multiplier: 1.05 },
      { name: 'Mug Two-Tone Warna Dalam', multiplier: 1.15 }
    ],
    finishings: [
      { name: 'Box Satuan Putih', addCost: 0 },
      { name: 'Box Motif Jendela', addCost: 150000 },
      { name: 'Laminasi Doff Kalender', addCost: 250000 }
    ],
    image: 'images/r5.jpg'
  }
];

// Theme configuration: Strictly Light Mode only (as per design direction)
const ThemeManager = {
  init() {
    try {
      localStorage.removeItem('smartprint_theme');
    } catch (e) {}
    document.documentElement.removeAttribute('data-theme');
  },
  toggle() {
    document.documentElement.removeAttribute('data-theme');
  },
  apply() {
    document.documentElement.removeAttribute('data-theme');
  }
};

ThemeManager.init();

const SmartprintApp = {
  currentCategory: 'all',
  selectedCalcProduct: PRINT_PRODUCTS[0],
  calcQuantity: 1000,
  selectedMaterialIndex: 0,
  selectedFinishingIndex: 0,

  init() {
    this.updateWorkshopStatus();
    this.initNavigation();
    this.renderCatalog();
    this.initPrintCalculator();
    this.fetchHeadlessBlog();
    this.bindEvents();

    setInterval(() => this.updateWorkshopStatus(), 60000);
  },

  initNavigation() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    if (menuBtn && mainNav) {
      menuBtn.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        menuBtn.querySelector('span').textContent = isOpen ? 'Tutup' : 'Menu';
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (mainNav && mainNav.classList.contains('is-open')) {
          mainNav.classList.remove('is-open');
          if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.querySelector('span').textContent = 'Menu';
            menuBtn.focus();
          }
        }
        SettingsModal.close();
        if (typeof window.closeApplyModal === 'function') window.closeApplyModal();
        if (typeof window.closeArticleModal === 'function') window.closeArticleModal();
      }
    });
  },

  updateWorkshopStatus() {
    const statusBadge = document.getElementById('workshop-status-badge');
    if (!statusBadge) return;

    // Balikpapan uses WITA (UTC+8)
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bppTime = new Date(utc + (3600000 * 8));
    const hours = bppTime.getHours();
    const isOpen = (hours >= 8 && hours < 22);

    if (isOpen) {
      statusBadge.className = 'status-indicator';
      statusBadge.innerHTML = '<span class="status-dot" aria-hidden="true"></span><span>Workshop Buka (08:00 - 22:00 WITA)</span>';
    } else {
      statusBadge.className = 'status-indicator is-closed';
      statusBadge.innerHTML = '<span class="status-dot" aria-hidden="true"></span><span>Workshop Tutup (Buka 08:00 WITA)</span>';
    }
  },

  renderCatalog() {
    const grid = document.getElementById('product-catalog-grid');
    if (!grid) return;

    const filtered = this.currentCategory === 'all'
      ? PRINT_PRODUCTS
      : PRINT_PRODUCTS.filter(p => p.category === this.currentCategory);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="ui-state-box" role="status">
          <h3>Kategori Belum Memiliki Produk</h3>
          <p>Tidak ada item untuk kategori yang dipilih. Tampilkan seluruh katalog untuk melihat semua layanan cetak.</p>
          <button type="button" class="btn btn-secondary btn-sm" onclick="SmartprintApp.resetCategory()">Tampilkan Semua Produk</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      const isFlagship = prod.flagship && this.currentCategory === 'all';
      const unitEstimate = Math.round(prod.basePrice1000 / 1000).toLocaleString('id-ID');
      return `
        <article class="product-card ${isFlagship ? 'product-card-flagship' : ''}" id="card-${prod.id}">
          <div class="product-img-wrapper">
            <img src="${prod.image}" alt="${prod.title}" class="product-img" loading="lazy" />
            <span class="product-badge">${isFlagship ? 'PRODUK UTAMA • ' : ''}${prod.categoryName}</span>
          </div>
          <div class="product-body">
            <div>
              <div class="product-meta-top">MIN. ORDER ${prod.minOrder} • ESTIMASI BERAT ${(prod.weightPer1000 / 1000).toFixed(1)} KG / 1.000 ${prod.unit.toUpperCase()}</div>
              <h3 class="product-title">${prod.title}</h3>
              <p class="product-desc">${prod.desc}</p>
              <div class="product-specs-tags" aria-label="Pilihan bahan">
                ${prod.materials.map(m => `<span class="spec-tag">${m.name}</span>`).join('')}
              </div>
            </div>
            <div class="product-footer">
              <div>
                <span class="product-price-label">Estimasi Mulai (Grosir 1.000 ${prod.unit})</span>
                <span class="product-price-val">Rp ${unitEstimate} <span style="font-size: 0.78rem; font-weight: 500; color: var(--text-muted);">/ ${prod.unit}</span></span>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button type="button" class="btn btn-primary btn-sm" onclick="SmartprintApp.selectForCalculator('${prod.id}')">
                  Simulasi Harga
                </button>
                <button type="button" class="btn btn-secondary btn-sm" onclick="SmartprintApp.consultProduct('${encodeURIComponent(prod.title)}')">
                  Tanya Spesifikasi
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  resetCategory() {
    this.currentCategory = 'all';
    document.querySelectorAll('.category-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.category === 'all');
    });
    this.renderCatalog();
  },

  initPrintCalculator() {
    if (!document.getElementById('calc-product-select')) return;
    this.renderCalculatorOptions();
    this.calculatePrintCost();
  },

  renderCalculatorOptions() {
    const prodSelector = document.getElementById('calc-product-select');
    if (prodSelector && prodSelector.options.length === 0) {
      prodSelector.innerHTML = PRINT_PRODUCTS.map(p => `
        <option value="${p.id}" ${p.id === this.selectedCalcProduct.id ? 'selected' : ''}>
          ${p.title} (${p.categoryName})
        </option>
      `).join('');

      prodSelector.addEventListener('change', (e) => {
        this.selectedCalcProduct = PRINT_PRODUCTS.find(p => p.id === e.target.value) || PRINT_PRODUCTS[0];
        this.selectedMaterialIndex = 0;
        this.selectedFinishingIndex = 0;
        this.renderCalculatorOptions();
        this.calculatePrintCost();
      });
    } else if (prodSelector) {
      prodSelector.value = this.selectedCalcProduct.id;
    }

    const matContainer = document.getElementById('calc-materials-list');
    if (matContainer) {
      matContainer.innerHTML = this.selectedCalcProduct.materials.map((m, idx) => `
        <button type="button" class="calc-option-btn ${idx === this.selectedMaterialIndex ? 'active' : ''}"
                aria-pressed="${idx === this.selectedMaterialIndex}"
                onclick="SmartprintApp.setMaterial(${idx})">
          <span class="opt-title">${m.name}</span>
          <span class="opt-sub">Indeks bahan ${m.multiplier}x</span>
        </button>
      `).join('');
    }

    const finContainer = document.getElementById('calc-finishings-list');
    if (finContainer) {
      finContainer.innerHTML = this.selectedCalcProduct.finishings.map((f, idx) => `
        <button type="button" class="calc-option-btn ${idx === this.selectedFinishingIndex ? 'active' : ''}"
                aria-pressed="${idx === this.selectedFinishingIndex}"
                onclick="SmartprintApp.setFinishing(${idx})">
          <span class="opt-title">${f.name}</span>
          <span class="opt-sub">${f.addCost > 0 ? '+Rp ' + (f.addCost / 1000).toLocaleString('id-ID') + '/' + this.selectedCalcProduct.unit : 'Termasuk'}</span>
        </button>
      `).join('');
    }
  },

  setMaterial(idx) {
    this.selectedMaterialIndex = idx;
    this.renderCalculatorOptions();
    this.calculatePrintCost();
  },

  setFinishing(idx) {
    this.selectedFinishingIndex = idx;
    this.renderCalculatorOptions();
    this.calculatePrintCost();
  },

  setQuantity(qty) {
    this.calcQuantity = qty;
    document.querySelectorAll('.qty-btn').forEach(btn => {
      const isSelected = parseInt(btn.dataset.qty, 10) === qty;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });
    this.calculatePrintCost();
  },

  calculatePrintCost() {
    const prod = this.selectedCalcProduct;
    const qty = this.calcQuantity;
    const material = prod.materials[this.selectedMaterialIndex] || prod.materials[0];
    const finishing = prod.finishings[this.selectedFinishingIndex] || prod.finishings[0];

    let discountMultiplier = 1.0;
    if (qty >= 5000) discountMultiplier = 0.75;
    else if (qty >= 2500) discountMultiplier = 0.82;
    else if (qty >= 1000) discountMultiplier = 0.90;
    else if (qty <= 250) discountMultiplier = 1.25;

    const basePerPiece = prod.basePrice1000 / 1000;
    const pieceCost = basePerPiece * material.multiplier * discountMultiplier;
    const subtotal = pieceCost * qty;
    const finishingTotal = (finishing.addCost / 1000) * qty;
    const grandTotal = Math.round(subtotal + finishingTotal);

    const totalWeightGrams = Math.round((prod.weightPer1000 / 1000) * qty);
    const totalWeightKg = (totalWeightGrams / 1000).toFixed(1);

    const unitPriceEl = document.getElementById('summary-unit-price');
    const subtotalEl = document.getElementById('summary-subtotal');
    const finishingPriceEl = document.getElementById('summary-finishing-cost');
    const grandTotalEl = document.getElementById('summary-grand-total');
    const estWeightEl = document.getElementById('summary-est-weight');

    if (unitPriceEl) unitPriceEl.textContent = `Rp ${Math.round(pieceCost + (finishing.addCost / 1000)).toLocaleString('id-ID')} / ${prod.unit}`;
    if (subtotalEl) subtotalEl.textContent = `Rp ${Math.round(subtotal).toLocaleString('id-ID')}`;
    if (finishingPriceEl) finishingPriceEl.textContent = `Rp ${Math.round(finishingTotal).toLocaleString('id-ID')}`;
    if (grandTotalEl) grandTotalEl.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    if (estWeightEl) estWeightEl.textContent = `${totalWeightKg} Kg (${totalWeightGrams.toLocaleString('id-ID')} g)`;

    this.lastCalculated = {
      product: prod.title,
      qty: qty,
      unit: prod.unit,
      material: material.name,
      finishing: finishing.name,
      totalPrice: `Rp ${grandTotal.toLocaleString('id-ID')}`,
      weightGrams: totalWeightGrams
    };
  },

  selectForCalculator(productId) {
    const prod = PRINT_PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    this.selectedCalcProduct = prod;
    this.selectedMaterialIndex = 0;
    this.selectedFinishingIndex = 0;
    this.renderCalculatorOptions();
    this.calculatePrintCost();

    const calcSection = document.getElementById('print-calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  },

  transferWeightToOngkir() {
    if (!this.lastCalculated) return;
    const weightInput = document.getElementById('weight-input');
    if (weightInput) {
      weightInput.value = this.lastCalculated.weightGrams;
      if (window.OngkirEngine) {
        window.OngkirEngine.selectedWeight = this.lastCalculated.weightGrams;
        window.OngkirEngine.syncWeightDisplay(this.lastCalculated.weightGrams);
        window.OngkirEngine.calculateOngkir();
      }
    }

    const ongkirSection = document.getElementById('cek-ongkir');
    if (ongkirSection) {
      ongkirSection.scrollIntoView({ behavior: 'smooth' });
    }
  },

  checkoutViaWhatsApp() {
    if (!this.lastCalculated) return;
    const calc = this.lastCalculated;
    const text = `Halo Admin SmartprintID Balikpapan,%0A%0ASaya ingin memesan cetakan sesuai simulasi web:%0A- Produk: *${calc.product}*%0A- Jumlah: *${calc.qty} ${calc.unit}*%0A- Bahan: *${calc.material}*%0A- Finishing: *${calc.finishing}*%0A- Estimasi Berat: *${(calc.weightGrams / 1000).toFixed(1)} Kg*%0A- Estimasi Biaya Cetak: *${calc.totalPrice}*%0A%0AMohon informasi pemeriksaan file desain dan jadwal produksi. Terima kasih.`;
    window.open(`https://wa.me/628115444638?text=${text}`, '_blank');
  },

  consultProduct(productTitle) {
    const text = `Halo SmartprintID Balikpapan, saya ingin menanyakan spesifikasi dan daftar harga untuk produk *${decodeURIComponent(productTitle)}*. Terima kasih.`;
    window.open(`https://wa.me/628115444638?text=${text}`, '_blank');
  },

  async fetchHeadlessBlog() {
    const blogContainer = document.getElementById('headless-blog-grid');
    if (!blogContainer) return;

    blogContainer.innerHTML = `
      <div class="ui-state-box" role="status">
        <h4>Memuat Artikel Teknis</h4>
        <p>Mengambil artikel terbaru dari repositori SmartprintID...</p>
      </div>
    `;

    try {
      const res = await fetch('api/wp-proxy.php?endpoint=posts&per_page=3');
      if (!res.ok) throw new Error('Status HTTP ' + res.status);
      const posts = await res.json();

      if (Array.isArray(posts) && posts.length > 0) {
        blogContainer.innerHTML = posts.map(post => {
          const title = post.title?.rendered || 'Panduan Cetak SmartprintID';
          const excerpt = (post.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim();
          const dateStr = post.date
            ? new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })
            : 'Arsip Cetak';

          return `
            <article class="blog-card">
              <div class="blog-body">
                <div>
                  <span class="blog-date">${dateStr}</span>
                  <h3 class="blog-title">${title}</h3>
                  <p class="blog-excerpt">${excerpt.slice(0, 135)}${excerpt.length > 135 ? '...' : ''}</p>
                </div>
                <div style="padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
                  <a href="blog.html" class="btn btn-secondary btn-sm">Baca Panduan</a>
                  <a href="${post.link || 'https://smartprint.co.id'}" target="_blank" rel="noopener" style="font-size: 0.78rem; color: var(--text-muted); text-decoration: underline;">Sumber Asli</a>
                </div>
              </div>
            </article>
          `;
        }).join('');
      } else {
        blogContainer.innerHTML = `
          <div class="ui-state-box" role="status">
            <h4>Belum Ada Artikel yang Dipublikasikan</h4>
            <p>Kunjungi halaman panduan cetak untuk melihat daftar lengkap artikel spesifikasi kertas dan kemasan.</p>
            <a href="blog.html" class="btn btn-secondary btn-sm">Buka Halaman Artikel</a>
          </div>
        `;
      }
    } catch (e) {
      blogContainer.innerHTML = `
        <div class="ui-state-box" role="alert">
          <h4>Gagal Memuat Sinkronisasi Artikel</h4>
          <p>Koneksi ke server artikel sedang mengalami gangguan. Anda tetap dapat membaca arsip panduan cetak di halaman Artikel.</p>
          <div style="display: flex; gap: 8px; justify-content: center;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="SmartprintApp.fetchHeadlessBlog()">Muat Ulang</button>
            <a href="blog.html" class="btn btn-primary btn-sm">Buka Arsip Artikel</a>
          </div>
        </div>
      `;
    }
  },

  bindEvents() {
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentCategory = pill.dataset.category;
        this.renderCatalog();
      });
    });

    document.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qty = parseInt(btn.dataset.qty, 10);
        this.setQuantity(qty);
      });
    });
  }
};

const SettingsModal = {
  open() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
      const input = document.getElementById('setting-api-key');
      if (input) input.value = localStorage.getItem('smartprint_ongkir_api_key') || '';
      modal.classList.add('active');
      if (input) input.focus();
    }
  },
  close() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.remove('active');
  },
  overlayClick(e) {
    if (e.target && e.target.id === 'settings-modal') {
      this.close();
    }
  },
  save() {
    const input = document.getElementById('setting-api-key');
    const key = input ? input.value.trim() : '';
    if (key) {
      localStorage.setItem('smartprint_ongkir_api_key', key);
    } else {
      localStorage.removeItem('smartprint_ongkir_api_key');
    }
    this.close();
    if (window.OngkirEngine) window.OngkirEngine.calculateOngkir();
  }
};

window.ThemeManager = ThemeManager;
window.SmartprintApp = SmartprintApp;
window.SettingsModal = SettingsModal;
window.PRINT_PRODUCTS = PRINT_PRODUCTS;

document.addEventListener('DOMContentLoaded', () => {
  SmartprintApp.init();
  if (window.OngkirEngine) {
    window.OngkirEngine.init();
  }
});
