# Louai | Creative Engineer Portfolio

A premium, developer-focused portfolio designed with terminal and cyberpunk aesthetics. Engineered for high performance, smooth interactivity, and high-fidelity animations.

Built with **React**, **TypeScript**, **Vite**, and **Framer Motion**.

---

## Features

- **Interactive Terminal Loader**: A retro-style command terminal loader that boots up on initial load, setting a developer-centric tone.
- **Command Palette (`Ctrl/Cmd + K`)**: Keyboard-driven navigation modal that allows users to instantly search and jump to different sections of the page.
- **System Monitor Widget**: A real-time, pseudo-resource monitor displaying simulated latency, current time, and operating environment with micro-animations.
- **Magnetic UI Buttons**: Smooth physical-like mouse attraction effects on primary navigation buttons.
- **Tilt Cards (Rust & TS)**: 3D parallax hover effect card components showcasing selected source code gists with syntax highlighting.
- **Git Contribution Heatmap**: A custom-designed SVG GitHub activity graph visualization showing active coding contributions.
- **Canvas Particle Network**: Lightweight node-based particle web animation that drifts in the background.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Directory Structure

```text
Portfolio/
├── src/
│   ├── assets/          # SVG and Static Media
│   ├── components/      # Modular UI Elements
│   │   ├── CodeSnippets     # 3D Tilt Code Cards
│   │   ├── CommandPalette   # Nav Search Overlay (Cmd + K)
│   │   ├── Contact          # Terminal Contact Form
│   │   ├── Header           # Main Nav bar
│   │   ├── Heatmap          # SVG Activity Grid
│   │   ├── Hero             # Role typing intro
│   │   ├── Magnetic         # Physics-based hover attraction
│   │   ├── Particles        # Background Canvas nodes
│   │   ├── SectionReveal    # Scroll-triggered transitions
│   │   ├── SystemMonitor    # Live system statistics
│   │   └── TerminalLoader   # CLI boot simulation
│   ├── App.css          # Main layout and animation rules
│   ├── App.tsx          # Main assembly page
│   ├── index.css        # Base typography, grid and design variables
│   └── main.tsx         # Root mounting point
├── public/              # Global Static Assets
├── vercel.json          # Routing configs for Vercel SPA
└── vite.config.ts       # Vite bundler parameters
```

---

## Quick Start

### Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed.

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/LouOt3328/Portfolio.git](https://github.com/Theworld-exe/Portfollio)
   cd Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

To compile and bundle the application for production deployment:

```bash
npm run build
```

The output files will be generated in the `dist` directory, optimized and minified.

---

## Design Theme & Tokens

The layout uses a dark, high-contrast, developer-friendly styling system configured in `src/index.css`:

- **Backgrounds**: Deep obsidian (`#050505`) with absolute grid layout and subtle glassmorphic overlays.
- **Accents**: Neon lime (`#bef264`) and electric purple (`#a855f7`).
- **Fonts**: Monospace typography for standard layout text to emulate modern coding IDE environments.
