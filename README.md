# Muhamad Nur Hidayat — Personal Portfolio Website

A clean, responsive, and professional personal portfolio website for **MUHAMAD NUR HIDAYAT BIN ABDUL RAZAK**, a fresh Business Technology Management graduate from Universiti Teknologi MARA (UiTM) seeking **Junior Data Analyst** opportunities.

Built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Features & Highlights

- **Aesthetic Direction:** Inspired by Hidayat's portrait with deep navy text/footer (`#0A192F`), bright blue accents (`#0284C7`), and soft white/slate backgrounds.
- **Two-Column Responsive Hero:** Introduction and call-to-actions on the left; authentic portrait deliberately framed on the right (with balanced head space and natural proportions). Neatly stacks on mobile devices.
- **Centralized Data File:** All portfolio content, skills, work history, projects, and contact info reside in `src/data/portfolioData.js` for effortless beginner maintenance.
- **Understated Academic & Internship Highlights:** Transparently presents 3.63 CGPA, 100+ zakat aid applications, and core SQL & Excel capabilities without exaggerating employment tenure.
- **Authentic Assets Included:** Direct integration with the supplied portrait (`/images/hidayat-profile.png`) and downloadable résumé PDF (`/resume/Muhamad_Nur_Hidayat_Resume.pdf`).
- **Privacy First:** Preserves applicant confidentiality (no confidential MAIK files) and withholds personal phone numbers from public web crawlers (accessible via the downloadable résumé).
- **Accessibility & Performance:** Semantic HTML5 landmarks, visible focus rings, responsive mobile menu with keyboard navigation, zero horizontal overflow, and reduced-motion support.

---

## 📂 Project Structure

```text
hidayat-portfolio/
├── dist/                      # Production build output
├── public/
│   ├── images/
│   │   ├── hidayat-profile.png # Supplied portrait
│   │   └── hidayat-profile.jpg
│   └── resume/
│       └── Muhamad_Nur_Hidayat_Resume.pdf # Supplied résumé
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header, logo & mobile menu
│   │   ├── Hero.jsx           # Two-column hero & understated stat cards
│   │   ├── About.jsx          # Exact requested bio & core strength pillars
│   │   ├── Skills.jsx         # Grouped skill cards (no arbitrary percentages)
│   │   ├── Experience.jsx     # Clean timeline for MAIK internship & Arra Western
│   │   ├── Projects.jsx       # Digital Workforce leadership & Pitch competition
│   │   ├── Education.jsx      # UiTM degree, Dean's Lists & STPM
│   │   ├── Contact.jsx        # Mailto link, copy email button & resume CTA
│   │   └── Footer.jsx         # Deep navy footer with dynamic year & back-to-top
│   ├── data/
│   │   └── portfolioData.js   # ⭐ Central content repository
│   ├── App.jsx                # Main layout composition
│   ├── index.css              # Tailwind base styles & accessibility rules
│   └── main.jsx               # React entry point
├── index.html                 # HTML template with Inter typography
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18+) and npm installed.

### 1. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. Any changes made to `src/data/portfolioData.js` will hot-reload instantly.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Maintenance Guide

### How to Edit Content
Open `src/data/portfolioData.js`. All sections are clearly labeled and commented:
- Change bio paragraphs under `about.paragraphs`.
- Add or modify skills under `skills.categories`.
- Add future SQL / Excel analytics projects under `projects.items`.
- Update email or location under `personal` or `contact`.
- Add LinkedIn or GitHub URLs under `personal.socialLinks` (they will automatically appear on the page once valid URLs are entered).

### How to Replace Assets
- **Portrait Photo:** Replace `public/images/hidayat-profile.png`.
- **Résumé Document:** Replace `public/resume/Muhamad_Nur_Hidayat_Resume.pdf`.
*(When running `npm run build`, these are automatically bundled into `dist/`)*.
