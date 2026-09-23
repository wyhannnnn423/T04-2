# Appliance Energy Consumption Portal (T01 a)

**Unit**: COS30045 Data Visualisation  
**Institution**: Swinburne University of Technology 
**Author**: [YanHanWONG] ([104392138])  
**Academic Year**: 2026
**Live Site**: [https://t01-a-seven.vercel.app/](https://t01-a-seven.vercel.app/)
**Demonstration Scope**: Sign Off Demonstration 1 (T01, T02, T03)

---

## 1. Project Overview
This repository contains a demonstration website developed for **Task T01 (a)**. The project serves as an introductory web baseline and hosting environment to showcase interactive data visualisations built using HTML, CSS, JavaScript, and D3.js across the semester.

The placeholder content focuses on appliance energy ratings, screen technologies, and consumption patterns across the Australian market.

---

## 2. Implemented Requirements

* **Three Dedicated Pages**:
  * `index.html`: Home page displaying national energy context, Australian appliance consumption statistics (~33% domestic power share), and the GEMS standard.
  * `televisions.html`: Detailed sector page examining screen technology distributions (LCD, LED, OLED), size trends (55"-65"), and power benchmarks.
  * `about.html`: Contextual information about the COS30045 unit, technical implementation, and future D3.js visualisations.
* **Client-Side JavaScript Navigation**:
  * `script.js` intercepts page requests to handle navigation across the 3 HTML files programmatically.
  * Detects active URLs dynamically and highlights the current page on the navigation bar.
  * Clicking the top-left power icon returns the user to the Home page (`index.html`).
* **Styling & User Feedback (`style.css`)**:
  * Color scheme matched to the official Energy Rating power icon using CSS variables (`#2e7d32`, `#1b5e20`, `#81c784`).
  * Clear hover feedback (color transitions and borders) on interactive navigation links.
  * Fully responsive layout structured with CSS Flexbox and Grid.
* **Footer**:
  * Features the year 2026, author credentials, and explicit Generative AI acknowledgement.

---

## 3. Repository Structure

```text

├── images/
│   └── PowerIcon.png     # Power logo asset
├── index.html            # Home page
├── televisions.html      # Televisions analysis page
├── about.html            # About Us / Unit project page
├── style.css             # Unified styling matching logo palette
├── script.js             # Navigation swapping and active state detection
└── README.md             # Documentation and GenAI reflection

```


## 4. Generative AI & GitHub Copilot Reflection

### Usage Summary
GitHub Copilot and generative AI assistance were used during this task for:
- **HTML Boilerplate & Structure**: Generating the initial multi-page semantic markup and content templates related to Australian GEMS appliance standards.
- **CSS Palette Setup**: Extracting hex codes matching PowerIcon.png and setting up flexible `:root` color tokens, hover states, and sticky navigation.
- **JavaScript Routing Logic**: Drafting the DOM query logic to evaluate `window.location.pathname` and attach event listeners to navbar anchors.

### Experience & Reflection
Using GitHub Copilot significantly reduced setup time for boilerplate files and repetitive structure across `index.html`, `televisions.html`, and `about.html`. It proved particularly helpful in quickly implementing CSS variable scaffolds and modern flexbox layouts.

However, human intervention and code understanding were necessary in several key areas:
- **Navigation Logic**: Copilot initially generated default browser anchor paths. I refactored `script.js` to attach explicit click event listeners to handle swapping and reliably apply the `.active` class across relative URL paths.
- **Multi-Page Compliance**: Initial AI scaffolding suggested a Single Page Application (SPA) structure using hidden sections. This was modified back into 3 distinct, compliant HTML files to meet the exact assessment criteria.
- **Asset Paths**: Relative paths to `images/PowerIcon.png` required manual adjustments to ensure correct routing when deployed under Vercel's root directory.

All generated code was thoroughly reviewed, debugged, and tested to ensure readiness for code-level questioning during the in-person sign-off demonstration.
