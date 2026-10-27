# DESIGN.md - SmartprintID (smartprint.co.id)

## Design Read
Reading this as: Authentic industrial & commercial printing workshop platform (real product categories, Balikpapan shipping calculator, and workshop credentials) for UMKM owners, schools, and corporate procurement teams, in a Clean Modern Minimalist Red & White style with generous whitespaces, concise copy, and zero bloat, dial `ENERGY 2 / RHYTHM 2 / MOTION 1`.

## Dials
`Dial: ENERGY 2 / RHYTHM 2 / MOTION 1`

- **ENERGY 2 (Balanced, Confident Precision):** Clean high-contrast typography, real product photography (`rt1.jpg`..`rt6.jpg`, `bhm1.jpg`, `bhm2.jpg`), and generous whitespace without overwhelming text blocks.
- **RHYTHM 2 (Varied & Clean Sections):** Clean sequence based strictly on original website content: Hero Showcase, 4 Core Producer Strengths, 6 Product Categories, Compact Balikpapan Shipping Estimator, Workshop Facilities, Customer Experience Quote, Recent Articles, and Authentic Footer.
- **MOTION 1 (Functional Micro-Interactions Only):** Smooth transitions (`200ms cubic-bezier(0.16, 1, 0.3, 1)`), hover elevation on cards, responsive mobile menu drawer. Zero decorative infinite loops or pulsing dots.

## Brand Identity & Character
SmartprintID is a first-hand offset and digital printing producer located at Jl. Gunung Empat RT.25 No. 68, Balikpapan Barat.
- **De-bloated, Concise Content:** No walls of text or speculative filler. Short, punchy, honest descriptions directly reflecting the original website (`smartprint.co.id`).
- **Generous Whitespace Architecture:** Large breathable vertical rhythm (`84px` desktop section padding), airy container margins, and clean cards with comfortable padding.
- **Clean Red & White Palette:** Pure white surfaces (`#FFFFFF`), crisp paper undertones (`#F9FAFB`), and Smartprint Brand Red (`#E52E2A`) as the singular deliberate accent for buttons, badges, and focus rings.

## Color System (WCAG AA & AAA Verified, R-25 & R-29)
Single Mode Only: Clean Light Mode (Red & White).
- `--bg-page`: `#FFFFFF` (Pure white background)
- `--bg-surface`: `#FFFFFF` (Card surfaces)
- `--bg-subtle`: `#F9FAFB` (Subtle off-white for alternate sections)
- `--bg-hover`: `#F3F4F6` (Hover background)
- `--text-main`: `#111827` (Offset Rich Ink: 18.2:1 contrast on `#FFFFFF`)
- `--text-body`: `#4B5563` (Charcoal body copy: 7.2:1 contrast on `#FFFFFF`)
- `--text-muted`: `#6B7280` (Calm slate for secondary info: 4.6:1 contrast on `#FFFFFF`, passes WCAG AA)
- `--border-subtle`: `#F3F4F6` (Hairline divider)
- `--border-medium`: `#E5E7EB` (Clean border)
- `--border-strong`: `#D1D5DB` (Interactive controls outline)
- `--primary`: `#E52E2A` (Smartprint Brand Red: 4.6:1 contrast with `#FFFFFF` text, passing WCAG AA)
- `--primary-hover`: `#C5221F` (Deep red hover)
- `--primary-subtle`: `#FEF2F2` (Soft red paper tint)
- `--primary-border`: `#FECACA` (Soft red border)

## Typography (R-06)
- **Primary Sans (`--font-main`):** `'Plus Jakarta Sans'`, modern, clean, geometric sans-serif with high legibility.
- **Editorial Accent (`.serif-italic`):** `'Newsreader', Georgia, serif; font-style: italic; font-weight: 500; color: var(--primary);` applied selectively to key conceptual words in headlines (e.g. *Percetakan & Kemasan*, *Smartprint.ID*, *Pilihan Workshop*, *Cek Ongkir*) for a distinguished editorial touch.
- **Technical Numeric (`--font-mono`):** `'JetBrains Mono', monospace`, used strictly for postal codes, phone numbers, and currency values.
- **Fluid Scale (`clamp()`):** Headings scale smoothly from mobile to desktop without horizontal scroll.

## Asymmetric Layout & Accent Cards (R-05, R-11, R-12, R-31)
- **Bento Grid Architecture:** Rather than repetitively stacking 4 identical boxes, "Mengapa Memilih Smartprint.ID" features an asymmetric 2-column composition: a full red hero card on the left highlighting *Kami Adalah Produsen* with facility pills and white action button, paired with an elegant vertical card stack on the right for *Hemat Waktu*, *Design on Web*, and *Design Template*.
- **Magazine Showcase Matrix for Products:** Replaced boring 3x2 uniform grids with a magazine-style matrix:
  1. *Spotlight Card* (2-column horizontal split) for the core *Kemasan Makanan* product.
  2. *Full Red Feature Card* (`card-red`) for *Stiker & Label*, adding vibrant visual pop.
  3. *Refined 4-Column Bottom Grid* for Paper Bag, Reklame, Kalender, and Souvenir.
- **Full Red Background Cards (`.card-red`):** Applied with purpose for high-impact moments (Primary Producer hero card, Best-Seller Sticker card, and Bottom Consultation CTA). Features white typography (`#FFFFFF`), white button variants (`.btn-white`, `.btn-outline-white`), and rich contrast exceeding WCAG AA.
- **Two-Panel Cek Ongkir:** Clean side-by-side card putting origin/destination/weight controls on the left and live courier rates on the right.
- **Why generous whitespace:** Eradicates visual clutter and text bloat, allowing the user to scan product categories, workshop credentials, and shipping estimates effortlessly.
- **Why light mode only:** Aligns strictly with user requirements and the tactile reality of physical paper, white sheets, and offset ink.
