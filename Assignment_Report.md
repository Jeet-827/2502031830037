# Web Technology Assignment Report
**Enrollment Number / Repository Name:** `2502031830037`
**GitHub Repository Link:** [https://github.com/Jeet-827/2502031830037](https://github.com/Jeet-827/2502031830037)

---

## Task-1: Repository Creation and Setup

**Objective:** Create a Git repository named after the enrollment number, create `figma` and `code` folders, prepare a document detailing the steps, upload tasks to respective folders, and share the repository link.

### Steps Executed:

1.  **Created Local Repository:**
    *   Opened the terminal and created a new directory named `2502031830037` (matching the enrollment number).
    *   Initialized an empty Git repository inside the directory using the command: `git init`.

2.  **Created Required Folders:**
    *   Created two new directories within the repository:
        *   `code/`: To store all HTML, CSS, JavaScript, and asset files.
        *   `figma/`: To store exported UI design screens from Figma.

3.  **Created Remote GitHub Repository:**
    *   Logged into GitHub and created a new public repository named `2502031830037`.

4.  **Linked Local and Remote Repositories:**
    *   Added the GitHub repository as a remote origin using: 
        `git remote add origin https://github.com/Jeet-827/2502031830037.git`
    *   Set the main branch: `git branch -M main`

5.  **Committed and Pushed Initial Files:**
    *   Added the filled `code` and `figma` folders to the staging area: `git add .`
    *   Committed the changes: `git commit -m "Add code and Figma design files"`
    *   Pushed the files to the remote repository: `git push -u origin main`

6.  **Generated this Document:** Prepared this comprehensive Word/Markdown file detailing all the executed steps.

---

## Task-2: Figma Prototype Design

**Objective:** Prepare a prototype design of a website in Figma containing at least 8-10 screens, and upload the screen designs to the `figma` folder.

### Steps Executed:

1.  **Conceptualization:** Decided to build a modern, dark-themed "AI Coding Tutor" platform featuring interactive learning modules, practice challenges, and an AI chat interface.

2.  **Design Process in Figma:**
    *   Designed a unified design system with a dark futuristic neon aesthetic (Deep Navy `#0f111a`, Cyan `#00d4ff`, Magenta `#ff6b9d`).
    *   Created the following high-fidelity screens:
        *   **Home/Landing Page:** Hero section with glowing robot, course previews, and progress charts.
        *   **Learn Page:** Course catalog with filtering by difficulty and progress tracking.
        *   **Practice Page:** Coding challenge list, difficulty filters, and a streak/stats sidebar.
        *   **AI Chat Interface:** Split layout with popular topics sidebar and a conversational UI.
        *   **User Profile:** Dashboard showing skills, earned certificates, and task goals.
        *   **Login Page:** Authentication form with a split visual layout.
        *   **Sign Up Page:** Registration form interface.
        *   **Thank You/Success Page:** Post-registration confirmation screen.

3.  **Export and Upload:**
    *   Exported the screens from Figma as `.png` files (e.g., `d1.png`, `login.png`, `p3.png`, etc.).
    *   Saved all exported images into the local `figma/` folder.

---

## Task-3: Website Development (HTML, CSS, JS)

**Objective:** Develop the website using HTML, CSS, and JS (replacing jQuery/Bootstrap as requested for a custom, optimized approach) based on the Figma concepts.

### Steps Executed:

1.  **HTML Structure Preparation:**
    *   Created modular HTML files for each designed screen to ensure a multi-page architecture: `index.html`, `learn.html`, `practice.html`, `chat.html`, `profile.html`, `login.html`, and `thankyou.html`.
    *   Implemented semantic HTML5 tags (`<nav>`, `<main>`, `<section>`, `<aside>`) for better accessibility and structure.

2.  **Custom CSS Styling (`style.css`):**
    *   Built a comprehensive custom stylesheet without relying on heavy frameworks like Bootstrap to maintain complete control over the design.
    *   Implemented CSS Variables (`:root`) for consistent theming (colors, border-radius, transitions).
    *   Used CSS Flexbox and Grid extensively for responsive layouts across all screen sizes.
    *   Added advanced CSS animations (floating elements, glowing effects, custom scrollbars) to match the futuristic Figma prototype.

3.  **JavaScript Interactivity (`script.js` & Inline JS):**
    *   Wrote pure Vanilla JavaScript to handle all dynamic interactions (fully replacing jQuery for better modern performance).
    *   **Features Implemented:**
        *   Responsive mobile hamburger navigation.
        *   Dynamic content filtering on the Practice and Learn pages.
        *   Interactive Tab switching on the Profile page.
        *   A fully functional, simulated AI Chat interface that responds to user input and quick prompts.
        *   Chart.js integration for visual progress tracking (Donut and Line charts).
        *   Form toggling (Login/Signup) and password visibility controls.
        *   A robust Documentation Viewer interface on the Learn page with searchable sidebar navigation.

---

## Task-4: Upload Code

**Objective:** Upload the developed code to the `code` folder.

### Steps Executed:

1.  Saved all developed HTML files, `style.css`, and `script.js` inside the local `code/` directory.
2.  Ensured all file paths (images, scripts, stylesheets) were correctly linked relatively within the project structure.
3.  As part of the final push (detailed in Task 1, Step 5), the entire `code/` folder was successfully finalized, committed, and pushed to the GitHub repository.
