# 🚀 Premium Data Engineer Portfolio

A high-performance, minimalist, and dynamic portfolio designed for Data Engineers and Python Specialists. Built with a focus on speed, intent, and professional storytelling.

![Portfolio Preview](assets/img/preview.png) *(Note: Add a screenshot of your portfolio here)*

## ✨ Features

- **⚡ High Performance**: Fast loading times with optimized assets and minimal dependencies.
- **📊 Data-Driven**: Fully customizable through JSON configuration files (no need to touch HTML for content updates).
- **🎨 Dracula Theme**: Sleek, modern dark mode interface inspired by the Dracula color palette.
- **🛸 Interactive UI**: Features periodic animations, magnetic buttons, and a unique "UFO Abduction" footer.
- **📱 Responsive Design**: Fully optimized for all screen sizes, from mobile to ultra-wide monitors.
- **🛠️ Integrated IDE View**: Showcases your professional experience through a code-inspired interface.

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript, CSS3
- **Animations**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Icons**: [Simple Icons](https://simpleicons.org/)
- **Typography**: Inter (Google Fonts)

## 🚀 Quick Start

Follow these steps to get your portfolio up and running in minutes:

### 1. Clone the Repository
```bash
git clone https://github.com/RicsonRamos/portifolio.git
cd portifolio
```

### 2. Local Development
Since the project uses fetch to load JSON data, you'll need to run it through a local server to avoid CORS issues.

**Option A: VS Code Live Server (Recommended)**
1. Install the "Live Server" extension in VS Code.
2. Click the **"Go Live"** button at the bottom right of the editor.

**Option B: Python (No installation needed)**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### 3. Deploy
Upload all files to **GitHub Pages**, **Vercel**, or **Netlify**.
- **GitHub Pages**: Just push to the `main` branch and enable "GitHub Pages" in the repository settings.

## ⚙️ Customization

Customize the entire site by editing the files in the `/data` directory:

- **`config.json`**: Update your name, role, social links, and SEO settings.
- **`projects.json`**: Add or remove your projects with descriptions and tech stacks.
- **`experience.json`**: Update your professional timeline and the code snippets shown in the IDE window.

## 📁 Project Structure

```bash
├── assets/          # CSS, JS, and Media assets
├── data/            # JSON Configuration files (Edit these!)
├── projetos/        # Individual project detail pages
├── index.html       # Main entry point
└── 404.html         # Custom error page
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for new features or improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ⚡ by [Ricson Ramos](https://github.com/RicsonRamos)
