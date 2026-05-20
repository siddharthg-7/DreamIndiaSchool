# Dream India School (DiS) - Tiruvuru Campus

A premium, state-of-the-art academic landing page built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Optimized for high-converting parent enrollment, seamless announcements filtering, and pristine visual typography.

---

## 🚀 Outstanding Key Features

### 1. Reusable Magnetic CTA Physics (`Magnetic.jsx`)
* Custom Framer Motion spring physics hook wrapper that calculates distance vectors.
* Attracts the CTA buttons toward the user's mouse cursor by 30% of displacement for a smooth, high-fidelity interactive feel.
* Applied to primary actions: "Apply Now", "Book a Visit", "Student Login", and "Start Enrollment".

### 2. Spotlight Hover Glow Cards (`WhyChooseUs.jsx`)
* Interactive grid elements equipped with high-performance cursor tracking.
* Deploys a radial golden overlay (`rgba(194, 142, 52, 0.12)`) tracking path movement using Framer Motion coordinates without triggering React render loops.

### 3. Asymmetrical Bento Grid Showcase (`Infrastructure.jsx`)
* Replaces the standard grid layout with a premium 3-column, 3-row asymmetrical Bento block.
* Wide elements feature elegant side-by-side photo/text layout rules with custom category tags and scale zooms.

### 4. Dynamic Category Notice Board (`NoticeBoard.jsx`)
* Replaced the static notifications list with a dynamic category filtering dashboard (`All Updates`, `Academics`, `Examinations`, `Sports & Events`).
* Features a buttery smooth spring sliding background indicator on tabs driven by Framer Motion's `layoutId`, and transition fade states for circular updates using `AnimatePresence`.

### 5. Auto-Playing Parent Testimonials Loop (`Testimonials.jsx`)
* A gorgeous sliding card loop displaying verified local parent feedback, 5-star rating vectors, and custom letter avatars.
* Cycles automatically with a 6-second delay, supported by manual navigation chevrons and interactive dot trackers.

### 6. Google Maps Live Campus Embed (`Contact.jsx`)
* Incorporates a fully interactive Google Map iframe pointing directly to the verified coords of **Dream India School, Tiruvuru** (`https://maps.app.goo.gl/yGyzgVZCSiXmz4Kw5`).
* Protected by custom rounded corners (`rounded-2xl`) and balanced shadow profiles.

---

## 🛠️ Technology Stack

* **Framework**: React 18+ (Vite Bundler)
* **Styling**: Tailwind CSS v4 (Modern CSS-first theme configuration)
* **Animations**: Framer Motion (Layout transitions, slider cycles, spring physics)
* **Iconography**: Lucide React (Clean, structured outline indicators)

---

## 📂 Project Structure

```bash
dreamindiaschool/
├── public/                 # Static public assets
│   └── images/             # High-resolution campus facilities pictures
├── src/
│   ├── assets/             # Brand images and logos (dis-logo.png)
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # Academic wings & values
│   │   ├── Contact.jsx     # Contact form and Google Map iframe
│   │   ├── FeaturedPrograms.jsx # Academic vectors and learning highlights
│   │   ├── Footer.jsx      # Multi-column footer navigation
│   │   ├── Hero.jsx        # Image carousel slideshow
│   │   ├── Infrastructure.jsx # Asymmetrical Bento Grid facility cards
│   │   ├── Magnetic.jsx    # Cursor-attracting physics wrapper
│   │   ├── Navbar.jsx      # Sticky navbar with mobile drawers & dropdowns
│   │   ├── NoticeBoard.jsx # Dynamic announcements filtered bulletin
│   │   ├── StatsStrip.jsx  # Credential numbers and campus metrics strip
│   │   ├── Testimonials.jsx # Auto-playing parent review loop
│   │   └── WhyChooseUs.jsx # Core pillars grid with spotlight cursor glow
│   ├── App.jsx             # Main layout rendering assembler
│   ├── index.css           # Global theme styling tokens & custom fonts
│   └── main.jsx            # Entry point mount module
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite custom build config
```

---

## 💻 Getting Started

### 1. Clone the repository and install dependencies
```bash
git clone https://github.com/siddharthg-7/DreamIndiaSchool.git
cd DreamIndiaSchool
npm install
```

### 2. Spin up local development server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser to experience the premium design in real-time.

### 3. Build for Production release
```bash
npm run build
```
Creates an optimized, compressed production bundle ready for single-page static deployment.

---

## 📜 Official Institutional Info
* **Affiliation Number**: CBSE 130822
* **Campus Address**: Nuvvula Thota, Near Abhaya Lakshmi Temple, Tiruvuru, NTR Dist., A.P. - 521235
* **Contact Lines**: +91 88864 21212 / +91 88865 21212