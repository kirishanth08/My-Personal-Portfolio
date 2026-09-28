# ⚡ Kirishanth - Software Developer Portfolio

A modern, high-performance, single-page portfolio website crafted with **pure HTML5, modern CSS3 (Glassmorphism & animations), and lightweight Vanilla JavaScript**.

Designed specifically to be **beginner-friendly, ultra-fast, zero-build-step**, and effortless to customize.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html               # Main semantic single-page markup
├── serve.js                 # Lightweight local preview server with video streaming
├── README.md                # Documentation & customization guide
└── assets/
    ├── css/
    │   ├── style.css        # Design tokens, glassmorphism, video overlay, styles
    │   └── animations.css   # Scroll-driven animations, 3D tilt & keyframes
    ├── js/
    │   ├── data.js          # 💡 Centralized place to update your details & projects!
    │   ├── background.js    # Interactive particle constellation & glowing canvas
    │   └── main.js          # Scroll video, light/dark theme toggle, filters, modal
    ├── images/
    │   ├── nexuscloud.jpg   # Project 1 Preview mockup
    │   ├── synthai.jpg      # Project 2 Preview mockup
    │   ├── hyperpay.jpg     # Project 3 Preview mockup
    │   └── pulseos.jpg      # Project 4 Preview mockup
    └── videos/
        └── background.mp4   # 🎬 5s Background video with smooth scroll scrubbing
```

---

## 🚀 How to Run Locally

You **do not need to install complex build tools or run npm build commands**!

### Option 1: Direct Open (Simplest)
Just double-click `index.html` to open it directly in Google Chrome, Edge, Safari, or Brave.

### Option 2: Live Server (Recommended)
If you use VS Code / Antigravity IDE:
1. Right-click `index.html` and choose **"Open with Live Server"**.
2. Or in the terminal, run:
   ```bash
   npx serve .
   ```
   or with Python:
   ```bash
   python -m http.server 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## 🛠️ How to Customize Your Information

### 1. Updating Your Personal Details & Projects
Open `assets/js/data.js` in your editor. You will find clearly commented sections:
- **`profile`**: Change your name, bio, typing roles, and social media handles (GitHub, LinkedIn, Email).
- **`stats`**: Update your years of experience, projects count, or custom metrics.
- **`skills`**: Add, remove, or adjust proficiency bars for Frontend, Backend, or DevOps.
- **`projects`**: Add your own project title, summary, tags, live links, and GitHub repos.
- **`experience`**: Update your career milestones, job titles, and achievements.

### 2. Changing Project Screenshots
1. Save your project screenshots into `assets/images/`.
2. Update the `image:` property in `assets/js/data.js` or the `<img src="...">` paths inside `index.html`.

---

## 🌐 Free 1-Click Deployment

### Deploy to GitHub Pages
1. Create a new GitHub repository named `portfolio` (or `username.github.io`).
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings > Pages > Branch: main / root** and click Save. Your site is live!

### Deploy to Vercel or Netlify
1. Drag and drop the `Portfolio` folder directly onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
2. Since there are no build steps, deployment completes in under 5 seconds!

---

© 2026 Kirishanth. Built with modern web standards.
