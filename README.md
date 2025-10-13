### 🌐 README Versions

- 🇺🇸 [English Version](./README.md)
- 🇮🇷 [نسخه فارسی](./README.FA.md)

---

### Show Demo
https://homow.github.io/dashboard-panel/

# 🧭 Dashboard Panel

A modern, responsive **Admin Dashboard Panel** built with the latest front-end technologies.  
Fully supports **dark/light themes**, and is designed to be modular, scalable, and developer-friendly.

---

## ⚙️ Tech Stack

| Tool              | Version | Purpose                            |
|-------------------|---------|------------------------------------|
| ⚛️ React          | 19      | UI framework                       |
| ⚡ Vite            | 7       | Build tool & dev server            |
| 🧩 SWC            | 4       | Fast compiler for React            |
| 🎨 Tailwind CSS   | 4       | Utility-first styling              |
| 📈 Recharts       | 3       | Data visualization                 |
| 🧹 ESLint         | 9       | Linting and code standards         |
| 🧱 Radix UI       | 2       | Accessible low-level UI primitives |
| 💎 shadcn/ui      | Latest  | Styled, reusable React components  |
| 📊 TanStack Table | 8       | Headless table for React           |

---

## 🌗 Features

- Dark & Light mode switch
- Modular folder structure
- Responsive layout
- Interactive data charts (Recharts v3)
- Code linting with ESLint v9
- Fast builds powered by Vite + SWC
- Optimized for real dashboard projects

---

## 🗂️ Directory Structure

```
dashboard-panel/
│
├── src/                  # Source code root
│   ├── assets/           # Images, fonts, and static resources
│   ├── components/       # Reusable UI components
│   ├── layout/           # Global layout wrappers (Sidebar, Header, MainLayout)
│   ├── lib/              # Utility functions, helpers, and custom hooks
│   ├── pages/            # Route-level pages
│   ├── routes/           # Centralized route definitions and guards
│   ├── styles/           # Global styles, Tailwind config
│   ├── App.jsx           # Root component with router and layout injection
│   ├── main.jsx          # Entry point for React + Vite
│   └── config.js         # Global configuration (sub-directory, theme, API endpoints, constants)
│
├── eslinf.config.js      # Config esling
├── jsconfig.json         # Path aliasing and IntelliSense support
└── vite.config.js        # Vite build and plugin configuration
```

---

## 🎨 Design Reference (Original Figma Template)

This project was initially inspired by the **Materio Dashboard UI Kit**,  
and further developed and customized by me.

👉 **Original Figma Design (View-Only Link)**  
[https://www.figma.com/file/TiJ4WPxInJbb7G4MIPmt8E/materio-figma-dashboard-ui-kit-live?node-id=7612-64092](https://www.figma.com/file/TiJ4WPxInJbb7G4MIPmt8E/materio-figma-dashboard-ui-kit-live?node-id=7612-64092)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# build preview
npm run preview
```

---

💡 Notes

The project is under active development.

Recharts components and layout system are being expanded progressively.