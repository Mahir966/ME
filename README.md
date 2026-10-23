# Mahir Ahmed — Personal Cybercore Portfolio

A production-grade, zero-dependency, editorial **Cybercore personal portfolio website** designed and engineered for **Mahir Ahmed** — developer, security researcher, and student leader at Shaheed Police Smrity College, Dhaka, Bangladesh.

The website delivers a high-performance, accessible, and responsive experience across mobile phones, tablets, laptops, and ultra-wide desktops. Built strictly with standard web technologies (**HTML5, Modular CSS3, Vanilla JavaScript ES6+, SVG, and Canvas API**), the project requires **zero build steps, zero external frameworks, and zero backend dependencies**. It runs instantly via any static file server, double-clicking `index.html`, or deployed directly to **GitHub Pages**.

---

## 1. System Architecture & Separation of Concerns

The codebase is engineered with strict separation between **authoritative data**, **presentation styles**, and **interactive application logic**. Any updates to biographical text, skills, projects, timeline milestones, or social channels are made in a single dedicated configuration file without touching rendering logic or HTML markup.

```text
protfolio dev/
├── index.html                 # Semantic HTML5 markup, landmark regions, accessibility & SVG sprite
├── portfolio-data.js          # Authoritative data configuration (11 independent segments)
├── script.js                  # Application engine, DOM bindings, radar math, terminal, Portfolio OS
├── style.css                  # Design tokens, fixed Cybercore theme, component styles, responsive layout
├── favicon.svg                # Cybercore geometric favicon
├── README.md                  # Comprehensive architectural and maintenance documentation
└── assets/
    ├── images/
    │   └── avatar.svg         # Geometric MA monogram & technical identification badge
    ├── projects/
    │   └── placeholder.svg    # Cybercore architectural blueprint SVG for projects without photos
    └── cv.pdf                 # Curriculum Vitae file slot (guarded by cvAvailable flag)
```

---

## 2. Core Non-Negotiable Specifications Implemented

1. **One Fixed Cybercore Visual Theme:**
   - The entire visual system operates strictly on a refined **Cybercore** aesthetic: near-black charcoal backgrounds (`#04070f`, `#081221`), crisp cyan accents (`#22d3ee`), fine border structures (`#1d3b52`), technical data panels, and mono-spaced telemetry accents.
   - All 17 secondary theme blocks (claymorphism, scrapbook, pixel, etc.) were cleanly excised from `style.css` and `script.js`.
   - The Display Settings modal allows user customization of **Appearance Mode** (Dark / Light), **Accent Color** (cyan, indigo, emerald, amber, rose, custom color picker), **Reduced Motion**, **Custom Cursor**, and **Language** (English / Bengali).

2. **Complete Removal of Ambient Sound & Audio Code:**
   - The Web Audio API system, `AudioContext`, oscillator nodes, noise generators, volume gains, and filter stages have been **100% removed** from the codebase.
   - The `#fab-ambient` floating action button and all ambient/mute toggles were eliminated from HTML, CSS, and JS.
   - Zero audio background processes or unexpected media permissions are requested.

3. **Zero Slogans or Promotional Taglines:**
   - Removed all marketing slogans, generic landing-page phrases, and promotional subtitles (e.g., "I build at the edge of...", "Futuristic personal operating system...").
   - Brand, hero titles, and headings use clean, factual statements of identity, role, and verified scholarship.

4. **Minimal Production Footer:**
   - Per explicit requirements, the footer is strictly minimal: containing only Mahir's technical monogram/profile photograph and an official copyright notice (`© 2026 Mahir Ahmed. All rights reserved.`).
   - Removed all secondary navigation links, "Surprise me" buttons, OS launcher buttons, and tech credits from the footer area.

5. **Data-Driven Architecture (`portfolio-data.js`):**
   - All content is driven by `portfolio-data.js`, divided into 11 well-documented segments.
   - Extensibility is supported via commented code templates for future projects, certifications, and timeline entries.

6. **Honest Credentials & Safe Document Handling:**
   - The placeholder 676-byte `cv.pdf` is strictly guarded by the `cvAvailable: false` flag. Visitors are presented with an honest **"CV Upon Request"** action linking to direct contact channels rather than serving a placeholder document.
   - Certifications section gracefully displays an active learning status note acknowledging CTF and independent security lab progress, accompanied by an instant-render commented template in `portfolio-data.js`.

---

## 3. Maintenance Guide: Updating Portfolio Content

All personal content is stored in [portfolio-data.js](file:///c:/Users/Mahir/Downloads/protfolio%20dev/portfolio-data.js). Below are step-by-step instructions for common updates.

### 3.1 Updating Identity & Contact Details
Open `portfolio-data.js` and locate `SEGMENT 1: IDENTITY & PUBLIC PROFILE`:
```javascript
identity: {
  fullName: 'Mahir Ahmed',
  displayName: 'Mahir Ahmed',
  headline: 'Developer & Security Researcher · LLM & Agentic AI Practitioner · Reverse Engineering',
  role: 'Developer / Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'mahirahmed966@gmail.com',
  // ...
}
```
Edit any string value, save the file, and refresh your browser.

### 3.2 Adding a Profile Photograph
1. Save your photo (e.g., `mahir.jpg`) into the `assets/images/` directory.
2. In `portfolio-data.js`, update `photoUrl`:
   ```javascript
   photoUrl: 'assets/images/mahir.jpg',
   ```
3. When `photoUrl` is empty (`''`), the website automatically renders the custom Cybercore geometric `MA` monogram badge. When a path is provided, it seamlessly switches to your photo in the identity card and footer.

### 3.3 Adding a Real CV Document
1. Save your completed CV PDF as `assets/cv.pdf`.
2. In `portfolio-data.js`, set `cvAvailable: true`:
   ```javascript
   cvAvailable: true,
   cvPath: 'assets/cv.pdf',
   cvFileName: 'Mahir_Ahmed_CV.pdf',
   ```
3. The hero CTA button, command palette, and terminal will immediately switch from "CV Upon Request" to direct download mode.

### 3.4 Adding a New Project
In `portfolio-data.js`, locate `SEGMENT 5: PROJECTS & SELECTED WORK`. Add an object to the `projects` array:
```javascript
{
  id: 'my-project-id',
  title: 'Project Name — Brief Subtitle',
  category: 'Software', // Choices: 'Software', 'Web', 'Cybersecurity', 'AI', 'Robotics'
  status: 'Production Live',
  year: 2026,
  featured: true, // true displays project in the top featured strip
  description: 'Concise summary of what the project does.',
  technologies: ['Python', 'Linux', 'SQLite'],
  github: 'https://github.com/Mahir966/my-project-id',
  demo: 'https://mahir966.github.io/my-project-id/',
  image: '', // Leave empty for custom technical blueprint poster, or provide path
  problem: 'The real-world problem solved.',
  solution: 'The technical solution engineered.',
  architecture: 'Architecture patterns, protocols, and data structures.',
  challenges: 'Key engineering hurdles overcome.',
  results: 'Verified metrics, outcomes, or competition placement.'
}
```
The project will instantly appear in the project showcase grid, category filter tabs, live search index, and detail modal.

### 3.5 Adding a Certification
In `portfolio-data.js`, locate `SEGMENT 7: CERTIFICATIONS & CREDENTIALS`. Uncomment the template:
```javascript
certifications: [
  {
    name: 'TryHackMe Pre-Security Learning Path',
    issuer: 'TryHackMe',
    date: '2026',
    credentialId: 'THM-123456',
    url: 'https://tryhackme.com/p/Mahir966',
    category: 'Cybersecurity',
    note: 'Foundations of networking, Linux systems, and web application security.'
  }
]
```
The empty-state card will automatically disappear, and your certification card will render with credential details and verification links.

### 3.6 Managing Social Media Links
In `portfolio-data.js`, locate `SEGMENT 10: SOCIAL MEDIA & CHANNELS`:
- To enable or disable a network, toggle `enabled: true` or `enabled: false`.
- To update a URL, edit the `url` property.
- Supported channels with dedicated icons include: `github`, `linkedin`, `facebook`, `instagram`, `email`, `x`, `discord`, `telegram`, `youtube`.

---

## 4. Key Interactive Capabilities

### 4.1 Command Palette (`Ctrl + K` or `Cmd + K`)
- Pressing `Ctrl + K` (or clicking the command icon in the navigation bar) opens an interactive modal.
- Supports fuzzy filtering across all site sections, verified external links, display settings, and clipboard actions.

### 4.2 Interactive Terminal (`~` or Terminal Button)
- A full-featured terminal emulator with command history and prompt navigation.
- Built-in commands:
  - `help` — List all available terminal commands.
  - `about` — Background, identity, and institutional context.
  - `skills [domain]` — Search or inspect specific technical skill categories.
  - `projects [filter]` — Query projects and open repositories.
  - `github` — Open verified GitHub profile.
  - `contact` — Print verified contact endpoints.
  - `theme` — Display active Cybercore visual configuration.
  - `mode` — Toggle light / dark mode.
  - `cv` — Request or download CV credentials.
  - `open <section>` — Jump directly to any section (e.g. `open education`).
  - `search <query>` — Full-text site search.
  - `neofetch` — System telemetry and technical profile summary.
  - `clear` — Clear terminal screen.
  - `exit` — Close the terminal overlay.

### 4.3 Portfolio OS Desktop Mode
- Clicking the monitor icon enters **Portfolio OS**, a desktop window manager.
- Features draggable windows, layering, double-click desktop icons, a taskbar clock, and window minimize/maximize controls.
- Powered dynamically by the same `portfolio-data.js` source.

### 4.4 Capability Map & Radar Visualization
- Explores 9 technical domains: Cybersecurity, Digital Forensics, Programming, Networking & Systems, Electronics & Robotics, AI & Emerging Tech, Graphic & UI Design, Leadership & Strategy, and Research & Analysis.
- Features qualitative evaluation states (`learning`, `practicing`, `advanced`).
- Toggleable SVG radar chart visualizing relative capability balance across domains.

---

## 5. Deployment Guide: GitHub Pages

The project is structured with 100% relative paths and requires no compilation step.

### Step-by-Step Deployment:
1. Initialize git in the project directory (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "feat: complete production cybercore portfolio transformation"
   ```
2. Link to your public GitHub repository:
   ```bash
   git remote add origin https://github.com/Mahir966/Mahir966.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub, navigate to **Settings** → **Pages**.
4. Under **Build and deployment** → **Branch**, select `main` and root directory `/ (root)`, then click **Save**.
5. Your portfolio will be live at:
   ```text
   https://mahir966.github.io/
   ```

---

## 6. Verification & Automated Testing

The implementation was validated using automated test scripts verifying:
- **HTML Integrity:** Correct script loading order (`portfolio-data.js` before `script.js`), minimal footer structure, presence of Education and Interests sections, verified SVG sprite symbols, zero placeholder strings.
- **JavaScript Execution:** Clean boot under strict mode, zero exceptions, safe DOM event listeners, and safe storage failover.
- **Audio Cleanliness:** Total absence of Web Audio API, oscillator nodes, or ambient hum controllers.
- **Visual Responsiveness:** Fluid layouts tested across 320px, 360px, 390px, 768px, 1024px, 1280px, and 1440px viewports.
- **Asset Integrity:** 200 OK responses verified across all scripts, stylesheets, vectors, and favicons over local HTTP.

---

## 7. Ethical Security Research Notice

All vulnerability research, penetration testing labs, reconnaissance methodologies, and reverse engineering exercises documented in this portfolio are conducted strictly within authorized environments, dedicated CTF platforms (e.g. TryHackMe), and self-hosted laboratory systems following ethical principles and responsible disclosure standards.

---

© 2026 Mahir Ahmed. All rights reserved.
