<p align="center">
  <img src="./docs/assets/logo.png" alt="Logo" width="100">
</p>

<h2 align="center">/dev/tokiory</h2>

<p align="center">
  Personal blog and portfolio website built with SvelteKit and MDX
</p>

<p align="center">
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/deployed%20on-Vercel-000000.svg" alt="Deployed on Vercel"></a>
  <a href="https://svelte.dev"><img src="https://img.shields.io/badge/built%20with-SvelteKit-FF3E00.svg" alt="Built with SvelteKit"></a>
</p>

---

## 🚀 Features

- **⚙️ Modern Tech Stack**: Built with SvelteKit, TypeScript, and UnoCSS
- **📝 MDX Support**: Write articles in Markdown with embedded Svelte components
- **🎨 Syntax Highlighting**: Code blocks with Shiki highlighter and custom transformers
- **🔍 SEO Optimized**: Automatic sitemap generation and meta tags
- **📱 Responsive Design**: Mobile-first design with UnoCSS
- **⚡ Fast Performance**: Optimized builds and Vercel deployment
- **🛡️ Type Safety**: Full TypeScript support throughout the codebase

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [UnoCSS](https://unocss.dev/) with custom presets
- **Content**: [MDsveX](https://mdsvex.pngwn.io/) for MDX support
- **Syntax Highlighting**: [Shiki](https://shiki.style/)
- **Icons**: [Iconify](https://iconify.design/)
- **Fonts**: Variable fonts from Fontsource
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: [Bun](https://bun.sh/)

## 📁 Project Structure

```
_dev_tokiory/
├── content/
│   └── articles/           # Blog articles in MDX format
│       ├── drafts/         # Draft articles
│       └── *.mdx           # Published articles
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable Svelte components
│   │   └── modules/        # Feature modules
│   ├── routes/
│   │   ├── (standard)/     # Main site routes
│   │   ├── (cv)/           # CV/Resume routes
│   │   └── api/            # API endpoints
│   └── styles/             # Global styles
├── static/                 # Static assets
└── docs/                   # Documentation and assets
```

## 🚦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tokiory/dev-tokiory.git
cd dev-tokiory
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run check` - Run type checking and linting

## 📝 Writing Articles

Articles are written in MDX format and stored in the `content/articles/` directory. Each article should include frontmatter with metadata:

```mdx
---
title: Your Article Title
description: Brief description of the article
date: 2024-01-15
tags:
  - tag1
  - tag2
---

Your article content here with support for:
- Markdown syntax
- Embedded Svelte components
- Code blocks with syntax highlighting
```

### Code Highlighting

The project uses Shiki for syntax highlighting with custom transformers:
- Focus notation: `// [!code focus]`
- Diff notation: `// [!code ++]` and `// [!code --]`
- Highlight notation: `// [!code highlight]`

## 🎨 Styling

The project uses UnoCSS with:
- Custom presets for icons and styling
- CSS variables for theming
- Responsive design utilities
- Variable fonts (Manrope, Martian Mono, Podkova, Iosevka)

## 🔧 Configuration

Key configuration files:
- `svelte.config.js` - SvelteKit and MDsveX configuration
- `uno.config.ts` - UnoCSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

## 📦 Deployment

The site is automatically deployed to Vercel on push to the main branch. The deployment configuration is handled by the Vercel adapter in `svelte.config.js`.

### Manual Deployment

To deploy manually:

1. Build the project:
```bash
bun run build
```

2. Deploy to Vercel:
```bash
vercel --prod
```

## 🤝 Contributing

While this is a personal blog, suggestions and bug reports are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Website**: [https://tokiory.vercel.app](https://tokiory.vercel.app)
- **GitHub**: [https://github.com/tokiory](https://github.com/tokiory)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/tokiory">tokiory</a>
</p>
