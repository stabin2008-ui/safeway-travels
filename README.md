# SafeWay Travels — 25 Years of Comfort & Trust

SafeWay Travels is a premium, 3D-inspired chauffeured cab booking website built from scratch for **Bengaluru, Karnataka, India**.

Designed with a modern navy blue, crisp white, and vibrant orange aesthetic, realistic vehicle photography, and zero-friction WhatsApp booking.

---

## 🚖 Business Details

- **Brand:** SafeWay Travels
- **Tagline:** 25 Years of Comfort & Trust
- **Location Served:** Bengaluru, Karnataka, India
- **Phone:** `9980838845` ([tel:9980838845](tel:9980838845))
- **WhatsApp:** `+91 99808 38845` ([https://wa.me/919980838845](https://wa.me/919980838845))
- **Email:** `ways63098@gmail.com` ([mailto:ways63098@gmail.com](mailto:ways63098@gmail.com))
- **Pricing Policy:** *Price details available on request* (no hidden charges, no sudden surges).
- **Payment Method:** Direct payment to chauffeur upon trip completion (no online payment or forced account creation required).

---

## 🌟 Key Features

1. **Subtle 3D-Inspired Visuals:**
   - Layered cards with elevation and realistic ambient drop shadows.
   - Polished micro-interactions and smooth transitions respecting `prefers-reduced-motion`.
   - Curated palette: Deep Navy (`#0B192C`), Slate white, and vibrant Orange accents.

2. **Core Travel Services:**
   - **Local City Rides:** Hourly packages and point-to-point transfers across Bengaluru tech corridors.
   - **Airport Transfers:** Punctual, scheduled pickups and drops to Kempegowda International Airport (BLR).
   - **Outstation Trips:** One-way and multiday outstation journeys across Karnataka, Tamil Nadu, and Kerala (Mysore, Coorg, Ooty, Wayanad, Chikmagalur, Tirupati, etc.).
   - **Round-Trip Packages:** Dedicated chauffeur and vehicle for complete family vacations and pilgrimage circuits.

3. **Vehicle Fleet & Dual-View Gallery:**
   - Each vehicle card features realistic model-accurate photography with an **Exterior vs. Interior view toggle**:
     - **Sedan:** Toyota Etios
     - **SUV / MUV:** Toyota Innova Crysta, Maruti Suzuki Ertiga, Toyota Rumion, and Toyota Innova Hycross
     - **Compact City Cab:** Toyota Etios and Maruti Suzuki Ertiga
     - **Custom Group Vehicle:** Force Tempo Traveller (*Availability: On Request*)
   - Direct *"Select Vehicle"* action auto-populates the vehicle in the booking form.

4. **Interactive WhatsApp Booking Form (Validated & Working):**
   - Customer Name, 10-digit Phone, Optional Email.
   - Service Type & Vehicle selection.
   - Pickup & Drop location.
   - Travel Date & Time with past-date prevention validation.
   - Generates a pre-filled, cleanly formatted WhatsApp booking request to `+91 99808 38845`.
   - Informative confirmation state stating that bookings are subject to confirmation by SafeWay Travels upon dispatch check.
   - Direct "Call Now" (`tel:9980838845`) fallback.

5. **Safety, Reliability & About Us:**
   - Genuine 25-year history of trusted driving service in Bengaluru.
   - Sanitized vehicles, verified drivers, round-the-clock telephone support.
   - Zero fabricated awards or unverified certifications.

6. **Mobile-First Fixed Bottom Action Bar:**
   - Fixed quick-action bar with **Call Now**, **WhatsApp**, and **Book Cab**.
   - Balanced spacing preventing overlap with footer or form controls.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Outfit & Plus Jakarta Sans via Google Fonts

---

## 📁 Project Architecture

```
safeway-travels/
├── public/
│   ├── favicon.svg              # Custom SafeWay Travels SVG favicon
│   └── images/
│       ├── hero.jpg             # High-res executive fleet showcase
│       └── vehicles/            # High-res exterior & interior vehicle photos
│           ├── etios-ext.jpg
│           ├── etios-int.jpg
│           ├── innova-crysta-ext.jpg
│           ├── innova-crysta-int.jpg
│           ├── ertiga-ext.jpg
│           ├── ertiga-int.jpg
│           ├── rumion-ext.jpg
│           ├── rumion-int.jpg
│           ├── innova-hycross-ext.jpg
│           ├── innova-hycross-int.jpg
│           ├── tempo-ext.jpg
│           └── tempo-int.jpg
├── src/
│   ├── config/
│   │   ├── company.ts           # Central business details & contact info
│   │   ├── services.ts          # Central services catalog
│   │   └── vehicles.ts          # Central fleet configuration & specs
│   ├── components/
│   │   ├── Header.tsx           # Navigation with logo, phone CTA, & book button
│   │   ├── Hero.tsx             # 3D hero with trust badges & CTAs
│   │   ├── ServicesSection.tsx  # 4 core service cards with auto-booking
│   │   ├── VehicleGallery.tsx   # Fleet gallery with exterior/interior switch
│   │   ├── BookingForm.tsx      # WhatsApp booking form with validation
│   │   ├── AboutSection.tsx     # 25-year legacy narrative & company values
│   │   ├── SafetySection.tsx    # Safety, sanitation & transparent billing
│   │   ├── ContactSection.tsx   # Direct phone, WhatsApp, email, & map cards
│   │   ├── Footer.tsx           # Complete footer & legal notice
│   │   └── MobileBottomBar.tsx  # Fixed mobile action bar
│   ├── App.tsx                  # Root state & layout coordination
│   ├── index.css                # Tailwind CSS v4 & 3D styling rules
│   └── main.tsx                 # React entry point
├── vercel.json                  # Vercel deployment configuration
├── index.html                   # SEO metadata, Open Graph, and fonts
├── package.json
└── tsconfig.json
```

---

## 🚀 Running Locally

```bash
# 1. Clone repository
git clone https://github.com/stabin2008-ui/safeway-travels.git
cd safeway-travels

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Building for Production

```bash
npm run build
```

The optimized static production bundle is generated in the `dist/` directory.

---

## ☁️ Deployment Instructions for Vercel

You can deploy SafeWay Travels to Vercel in 3 simple steps:

### Option A: Via Vercel Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select the repository: **`stabin2008-ui/safeway-travels`**.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your site will be live on a fast global CDN with HTTPS within 1 minute.

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 📄 License & Ownership

&copy; SafeWay Travels, Bengaluru, Karnataka. All rights reserved.
