# 🚀 Upamanyu :-)

A stunning, futuristic portfolio website showcasing aerospace engineering projects with smooth animations and interactive elements.

## 🚀 Features

- **Custom Cursor System** - Glowing orbital cursor with hover effects
- **Particle Field** - Animated star field background
- **3D Tilt Cards** - Interactive project cards with realistic 3D transforms
- **Glass Morphism** - Modern glass-panel design throughout
- **Smooth Animations** - 60fps GPU-accelerated transitions
- **Magnetic Navigation** - Links that respond to cursor proximity
- **Responsive Design** - Mobile-first approach

## 🛠️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Built with 🚀 and React
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Upamanyu
