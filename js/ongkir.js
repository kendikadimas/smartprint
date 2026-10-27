const OngkirEngine = {
  selectedOrigin: 'kaltim_bpp',
  selectedDestination: 'kaltim_smd',
  selectedWeight: 1000,
  activeFilter: 'all',
  lastResults: [],
  cities: [],

  init() {
    if (!document.getElementById('dest-select')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const destParam = urlParams.get('dest');
    if (destParam) {
      this.selectedDestination = destParam;
    }

    const weightParam = parseInt(urlParams.get('weight'), 10);
    if (weightParam && weightParam >= 100) {
      this.selectedWeight = weightParam;
      const weightInput = document.getElementById('weight-input');
      if (weightInput) weightInput.value = weightParam;
      this.syncWeightDisplay(weightParam);
    }

    this.bindEvents();
    this.loadCities();
  },

  async loadCities() {
    try {
      const res = await fetch('api/ongkir.php?action=cities');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const json = await res.json();
      if (json && Array.isArray(json.data) && json.data.length > 0) {
        this.cities = json.data;
        this.renderCityDropdown();
        return;
      }
      throw new Error('Data kota kosong');
    } catch (e) {
      this.cities = this.getLocalCities();
      this.renderCityDropdown();
    }
  },

  getLocalCities() {
    return [
      { id: 'kaltim_bpp', province: 'Kalimantan Timur', city: 'Kota Balikpapan', type: 'Kota' },
      { id: 'kaltim_smd', province: 'Kalimantan Timur', city: 'Kota Samarinda', type: 'Kota' },
      { id: 'kaltim_ppu', province: 'Kalimantan Timur', city: 'Kab. Penajam Paser Utara (IKN)', type: 'Kabupaten' },
      { id: 'kaltim_kukar', province: 'Kalimantan Timur', city: 'Kab. Kutai Kartanegara (Tenggarong)', type: 'Kabupaten' },
      { id: 'kaltim_btg', province: 'Kalimantan Timur', city: 'Kota Bontang', type: 'Kota' },
      { id: 'kaltim_kutim', province: 'Kalimantan Timur', city: 'Kab. Kutai Timur (Sangatta)', type: 'Kabupaten' },
      { id: 'kaltim_berau', province: 'Kalimantan Timur', city: 'Kab. Berau (Tanjung Redeb)', type: 'Kabupaten' },
      { id: 'kaltara_trkn', province: 'Kalimantan Utara', city: 'Kota Tarakan', type: 'Kota' },
      { id: 'kalsel_bjm', province: 'Kalimantan Selatan', city: 'Kota Banjarmasin', type: 'Kota' },
      { id: 'dki_pusat', province: 'DKI Jakarta', city: 'Kota Jakarta Pusat', type: 'Kota' },
      { id: 'dki_selatan', province: 'DKI Jakarta', city: 'Kota Jakarta Selatan', type: 'Kota' },
      { id: 'jabar_bdg', province: 'Jawa Barat', city: 'Kota Bandung', type: 'Kota' },
      { id: 'jatim_sby', province: 'Jawa Timur', city: 'Kota Surabaya', type: 'Kota' },
      { id: 'jateng_smg', province: 'Jawa Tengah', city: 'Kota Semarang', type: 'Kota' },
      { id: 'diy_ygy', province: 'D.I. Yogyakarta', city: 'Kota Yogyakarta', type: 'Kota' },
      { id: 'sulsel_mks', province: 'Sulawesi Selatan', city: 'Kota Makassar', type: 'Kota' },
      { id: 'bali_dps', province: 'Bali', city: 'Kota Denpasar', type: 'Kota' }
    ];
  },

  renderCityDropdown() {
    const destSelect = document.getElementById('dest-select');
    if (!destSelect) return;

    destSelect.innerHTML = '';
    const grouped = {};
    this.cities.forEach(item => {
      if (!grouped[item.province]) grouped[item.province] = [];
      grouped[item.province].push(item);
    });

    for (const [prov, items] of Object.entries(grouped)) {
      const optGroup = document.createElement('optgroup');
      optGroup.label = prov;
      items.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = `${c.city} (${prov})`;
        if (c.id === this.selectedDestination) opt.selected = true;
        optGroup.appendChild(opt);
      });
      destSelect.appendChild(optGroup);
    }

    this.calculateOngkir();
  },

  syncWeightDisplay(grams) {
    const kg = Math.max(1, Math.ceil(grams / 1000));
    const hint = document.getElementById('weight-kg-hint');
    if (hint) hint.textContent = `Dibulatkan: ${kg} Kg (${grams.toLocaleString('id-ID')} g)`;
  },

  bindEvents() {
    const destSelect = document.getElementById('dest-select');
    if (destSelect) {
      destSelect.addEventListener('change', (e) => {
        this.selectedDestination = e.target.value;
        this.calculateOngkir();
      });
    }

    const weightInput = document.getElementById('weight-input');
    if (weightInput) {
      weightInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10) || 100;
        this.selectedWeight = Math.max(100, val);
        this.syncWeightDisplay(this.selectedWeight);
        this.calculateOngkir();
      });
    }

    document.querySelectorAll('.preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const gram = parseInt(btn.dataset.grams, 10) || 1000;
        this.selectedWeight = gram;
        if (weightInput) weightInput.value = gram;
        this.syncWeightDisplay(gram);
        this.calculateOngkir();
      });
    });

    document.querySelectorAll('.courier-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.courier-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeFilter = tab.dataset.filter;
        this.renderRates();
      });
    });
  },

  resetFilter() {
    this.activeFilter = 'all';
    document.querySelectorAll('.courier-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.filter === 'all');
    });
    this.renderRates();
  },

  async calculateOngkir() {
    const resultsContainer = document.getElementById('ongkir-results');
    if (!resultsContainer) return;

    if (!this.selectedDestination) {
      resultsContainer.innerHTML = `
        <div class="ui-state-box" role="status">
          <h4>Pilih Kota Tujuan Pengiriman</h4>
          <p>Silakan pilih kota atau kabupaten tujuan untuk melihat perbandingan tarif reguler, ekspres, dan kargo dari Balikpapan.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <div class="ui-state-box" role="status">
        <h4>Menghitung Tarif Ekspedisi</h4>
        <p>Memuat daftar layanan kurir dari Workshop Balikpapan Barat (76131) untuk berat ${(this.selectedWeight / 1000).toFixed(1)} Kg...</p>
      </div>
    `;

    try {
      const apiKey = localStorage.getItem('smartprint_ongkir_api_key') || '';
      const provider = apiKey ? 'binderbyte' : 'auto';
      const queryUrl = `api/ongkir.php?origin=${encodeURIComponent(this.selectedOrigin)}&destination=${encodeURIComponent(this.selectedDestination)}&weight=${this.selectedWeight}&api_key=${encodeURIComponent(apiKey)}&provider=${provider}`;

      const res = await fetch(queryUrl);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();

      if (data && Array.isArray(data.results) && data.results.length > 0) {
        this.lastResults = data.results;
        this.renderRates();
      } else {
        throw new Error('Data tarif tidak tersedia');
      }
    } catch (err) {
      this.lastResults = this.calculateLocalRates(this.selectedDestination, this.selectedWeight);
      if (this.lastResults.length > 0) {
        this.renderRates();
      } else {
        resultsContainer.innerHTML = `
          <div class="ui-state-box" role="alert">
            <h4>Gagal Memuat Data Tarif</h4>
            <p>Terjadi kendala saat menghitung tarif ke kota tujuan. Silakan coba muat ulang atau tanyakan tarif kargo via WhatsApp.</p>
            <button type="button" class="btn btn-secondary btn-sm" onclick="OngkirEngine.calculateOngkir()">Hitung Ulang</button>
          </div>
        `;
      }
    }
  },

  renderRates() {
    const resultsContainer = document.getElementById('ongkir-results');
    if (!resultsContainer) return;

    let filtered = this.lastResults;
    if (this.activeFilter !== 'all') {
      filtered = this.lastResults.filter(item => {
        if (this.activeFilter === 'cargo') return item.is_cargo || item.type === 'Cargo' || item.type === 'Khusus Percetakan';
        if (this.activeFilter === 'express') return item.type === 'Express' || item.type === 'Instant';
        if (this.activeFilter === 'reguler') return item.type === 'Reguler';
        return true;
      });
    }

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="ui-state-box" role="status">
          <h4>Layanan Kurir Tidak Tersedia untuk Kategori Ini</h4>
          <p>Rute tujuan ini tidak memiliki opsi pada filter yang dipilih. Tampilkan semua layanan untuk melihat kurir yang tersedia.</p>
          <button type="button" class="btn btn-secondary btn-sm" onclick="OngkirEngine.resetFilter()">Tampilkan Semua Layanan</button>
        </div>
      `;
      return;
    }

    const destName = document.getElementById('dest-select')?.selectedOptions[0]?.text || 'Tujuan Terpilih';
    const weightKg = (this.selectedWeight / 1000).toFixed(1);

    resultsContainer.innerHTML = filtered.map((rate, index) => {
      const isFeatured = index === 0;
      const badgeTypeClass = rate.is_cargo ? 'badge-amber' : (rate.type === 'Express' ? 'badge-red' : 'badge-emerald');

      return `
        <article class="rate-card ${isFeatured ? 'featured' : ''}">
          <div>
            <div class="rate-header">
              <div>
                <h3 class="rate-courier">${rate.courier}</h3>
                <div class="rate-service">${rate.service}</div>
              </div>
              <span class="badge ${badgeTypeClass}">${rate.type}</span>
            </div>

            <div class="rate-price-box">
              <div class="rate-price">${rate.cost_formatted}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
                ${rate.is_cargo ? 'Tagihan Kargo Min. ' + (rate.weight_billed_kg || 10) + ' Kg' : `Berat aktual ${weightKg} Kg (Tagihan ${rate.weight_billed_kg || Math.ceil(this.selectedWeight / 1000)} Kg)`}
              </div>
            </div>
          </div>

          <div>
            <div class="rate-meta">
              <span>Estimasi: <strong>${rate.etd}</strong></span>
              <span>Asal: Balikpapan</span>
            </div>

            <button type="button" class="btn ${isFeatured ? 'btn-primary' : 'btn-secondary'} btn-sm" style="width: 100%; margin-top: 12px;"
              onclick="OngkirEngine.orderWithCourier('${encodeURIComponent(rate.courier)}', '${encodeURIComponent(rate.service)}', '${encodeURIComponent(rate.cost_formatted)}', '${encodeURIComponent(destName)}')">
              Gunakan Ekspedisi Ini
            </button>
          </div>
        </article>
      `;
    }).join('');
  },

  orderWithCourier(courier, service, cost, dest) {
    const courierDecoded = decodeURIComponent(courier);
    const serviceDecoded = decodeURIComponent(service);
    const costDecoded = decodeURIComponent(cost);
    const destDecoded = decodeURIComponent(dest);
    const weightKg = (this.selectedWeight / 1000).toFixed(1);

    const message = `Halo Admin SmartprintID Balikpapan,%0A%0ASaya ingin konsultasi pesanan cetak beserta pengiriman:%0A- Kota Tujuan: *${destDecoded}*%0A- Estimasi Berat: *${weightKg} Kg*%0A- Ekspedisi: *${courierDecoded} (${serviceDecoded})*%0A- Estimasi Ongkir: *${costDecoded}*%0A%0AMohon informasi jadwal produksi dan total biayanya. Terima kasih.`;
    window.open(`https://wa.me/628115444638?text=${message}`, '_blank');
  },

  calculateLocalRates(destId, grams) {
    const kg = Math.max(1, Math.ceil(grams / 1000));
    const isLocalKaltim = destId.includes('kaltim');
    const regRate = isLocalKaltim ? 18000 : 38000;
    const cargoRate = isLocalKaltim ? 4500 : 9500;

    return [
      { courier: 'JNE Trucking (JTR)', service: 'JTR Kargo (Min 10 Kg)', type: 'Cargo', cost_formatted: 'Rp ' + (Math.max(10, kg) * cargoRate).toLocaleString('id-ID'), etd: isLocalKaltim ? '2-3 Hari' : '5-7 Hari', weight_billed_kg: Math.max(10, kg), is_cargo: true },
      { courier: 'Pos Indonesia', service: 'Pos Reguler', type: 'Reguler', cost_formatted: 'Rp ' + (kg * (regRate - 2000)).toLocaleString('id-ID'), etd: isLocalKaltim ? '2-3 Hari' : '2-4 Hari', weight_billed_kg: kg, is_cargo: false },
      { courier: 'JNE', service: 'REG', type: 'Reguler', cost_formatted: 'Rp ' + (kg * regRate).toLocaleString('id-ID'), etd: isLocalKaltim ? '1-2 Hari' : '2-3 Hari', weight_billed_kg: kg, is_cargo: false },
      { courier: 'J&T Express', service: 'EZ', type: 'Reguler', cost_formatted: 'Rp ' + (kg * (regRate + 1000)).toLocaleString('id-ID'), etd: isLocalKaltim ? '1-2 Hari' : '2-3 Hari', weight_billed_kg: kg, is_cargo: false }
    ];
  }
};

window.OngkirEngine = OngkirEngine;
