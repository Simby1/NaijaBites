# 🥘 NaijaBites

A modern Nigerian recipe discovery app built with React, Vite, and Tailwind CSS v4. Search and explore authentic Nigerian dishes powered by a curated local dataset merged with the TheMealDB API.

---

## 🚀 Live Demo

> _Add your deployed URL here (e.g. Vercel, Netlify)_

---

## 📸 Screenshots

> _Add screenshots of your Home page, Recipe Grid, and Recipe Detail page here_

---

## ✨ Features

- 🔍 **Live Search** — search recipes by name, filtered to Nigerian/West African cuisine
- 🗂️ **Dual Data Source** — merges a local Nigerian recipe dataset with TheMealDB API results
- 📄 **Recipe Detail Pages** — full ingredients list and step-by-step instructions
- 📱 **Mobile-First Design** — fully responsive across all screen sizes
- ⚡ **Fast Fallbacks** — broken images are replaced automatically, API failures fall back to local data

---

## 🛠️ Tech Stack

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| React 18         | UI framework                |
| Vite             | Build tool and dev server   |
| Tailwind CSS v4  | Utility-first styling       |
| React Router DOM | Client-side routing         |
| Lucide React     | Icon library                |
| TheMealDB API    | External recipe data source |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed top navigation bar
│   ├── Hero.jsx          # Full-screen search hero section
│   ├── RecipeCard.jsx    # Individual recipe card component
│   ├── RecipeDetail.jsx  # Full recipe detail page
│   └── Footer.jsx        # Site footer with links and socials
├── App.jsx               # Root component with routing and data logic
├── main.jsx              # React entry point with BrowserRouter
├── localRecipes.json     # Curated Nigerian recipe dataset
└── index.css             # Tailwind v4 config with custom brand colors
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/naijabites.git

# Navigate into the project
cd naijabites

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 🎨 Custom Theme

NaijaBites uses Tailwind CSS v4's `@theme` directive for brand colors, defined in `src/index.css`:

```css
@theme {
  --color-brand-green: #2d6a4f;
  --color-brand-orange: #e07a2f;
}
```

These generate utility classes like `bg-brand-green`, `text-brand-orange` automatically — no `tailwind.config.js` needed.

---

## 🔌 Data Architecture

### How `fetchRecipes` works

```
User searches "Jollof"
        │
        ├── 1. Filter localRecipes.json by search query
        │         (always available, offline-safe)
        │
        ├── 2. Fetch TheMealDB API with same query
        │         Filter results to Nigerian / Ghanaian / Kenyan only
        │
        └── 3. Merge: [...localResults, ...apiResults]
                  If empty → fall back to full local dataset
                  If API fails → fall back to full local dataset
```

### Why this approach?

TheMealDB has very few Nigerian-tagged meals. The local dataset ensures the app always has rich, relevant content regardless of API availability — making it resilient for demo and submission purposes.

---

## 🧭 Routing

| Route         | Component       | Description                   |
| ------------- | --------------- | ----------------------------- |
| `/`           | `Home`          | Hero + recipe grid            |
| `/recipe/:id` | `RecipeDetail`  | Full detail page for a recipe |
| `/pantry`     | _(coming soon)_ | Ingredient-based search       |
| `/about`      | _(coming soon)_ | About page                    |

---

## 🌍 API Reference

**TheMealDB** — free, no API key required

```
GET https://www.themealdb.com/api/json/v1/1/search.php?s={query}
```

Returns a `meals` array. NaijaBites filters this by `strArea === 'Nigerian'` (or Ghanaian/Kenyan) before displaying results.

---

## 🙏 Acknowledgements

- [TheMealDB](https://www.themealdb.com/) for the free recipe API
- [Unsplash](https://unsplash.com/) for food photography used in local recipe data
- [Lucide](https://lucide.dev/) for the icon set
- ALX Africa Front-End Program

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
