# 🚀 Nextra Template

Welcome to the **Nextra Template**! This project is built using **Nextra**, a powerful and flexible documentation framework based on **Next.js**.

## 📌 Features
- 🌎 Easy-to-use **file-based routing**
- 📚 Supports **Markdown & MDX** for content writing
- 🎨 Customizable themes and layouts
- ⚡ Fast performance with **Next.js 15 & Turbopack**
- 🔍 Built-in search functionality

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/nextra-template.git
cd nextra-template
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```
The app will be available at **http://localhost:3000**.

---

## 📂 Project Structure
```
📁 nextra-template
├── 📁 pages
│   ├── 📄 index.mdx         # Homepage
│   ├── 📄 about.mdx         # About page
│   ├── 📁 docs              # Documentation section
│   │   ├── 📄 introduction.mdx
│   │   ├── 📄 installation.mdx
│   │   ├── 📄 usage.mdx
│   ├── 📄 _meta.json        # Metadata for navigation
├── 📁 public                # Static assets
├── 📁 theme                 # Custom Nextra theme
├── 📄 next.config.ts        # Next.js configuration
├── 📄 tsconfig.json         # TypeScript configuration
└── 📄 package.json          # Project dependencies
```

---

## 🛠 Customization

### 🔧 Updating Metadata
Modify `_meta.json` inside the **pages/docs/** folder to update the sidebar navigation:
```json
{
  "*": "Documentation",
  "introduction": "Introduction",
  "installation": "Installation",
  "usage": "Usage Guide"
}
```

### 🎨 Theming
To customize the theme, edit the `theme.config.tsx` file:
```tsx
export default {
  logo: "new logo",
  primaryHue: 220,
  sidebar: true,
};
```

---

## 🚀 Deployment
To deploy the site on **Vercel**, run:
```bash
npm run build
npm run start
```
Or deploy directly from **Vercel Dashboard**.

---

## 📖 Learn More
- [Nextra Documentation](https://nextra.site/)
- [Next.js Docs](https://nextjs.org/docs)
- [MDX Guide](https://mdxjs.com/)

---

💡 **Enjoy building with Nextra!** 🚀

