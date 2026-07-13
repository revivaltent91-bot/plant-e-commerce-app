# AI Agent Guidelines for La Maison Jungle

## 📦 Project Overview

**La Maison Jungle** is a plant shop e-commerce application built with **React 19** and **Vite**. It displays a catalog of plants organized by categories with a shopping cart interface. This is a foundational learning project with room for enhancement.

**Purpose**: Demonstrate a basic e-commerce structure with product listings and cart functionality.

---

## 🏗️ Architecture & Key Patterns

### Component Structure
```
App (root layout manager)
├── Banner (header with logo)
├── ShoppingList (product catalog with category filtering)
└── Cart (shopping basket sidebar)
```

### Data Flow
- **Static data**: Plants are imported from [src/datas/plantList.js](src/datas/plantList.js) (9 plants across 3 categories)
- **No state management**: Currently presentational components with no global state, props drilling, or Context API
- **Pattern**: Array transformations (`map()`, `new Set()`) for rendering and deduplication

### Key Data Structure
```javascript
Plant: { id, name, category }
// Categories: Classique, Extérieur, Plante grasse
```

---

## 📁 Project Structure & Conventions

| Path | Purpose |
|------|---------|
| `src/components/` | React components (.jsx files) |
| `src/datas/` | Static data modules (plantList.js) |
| `src/styles/` | Co-located CSS files (one per component) |
| `src/assets/` | Images and icons (logo.png, hero.png) |
| `public/` | Static assets (favicon.svg) |
| `vite.config.js` | Vite configuration with React plugin |
| `eslint.config.js` | ESLint rules (React hooks, refresh) |

### Naming Conventions
- **Components**: PascalCase filenames (Banner.jsx, ShoppingList.jsx)
- **CSS**: BEM-like naming (`.shop-layout__basket`, `.banner-logo`)
- **Styles**: Co-located in `/styles` folder with matching component names

### Styling Approach
- **Plain CSS** with global variables in [index.css](index.css) for design tokens
- **Flexbox layouts** throughout
- **Light/dark mode support** via CSS media queries
- **No CSS preprocessor** (no Sass/SCSS)

---

## 🚀 Development Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build to /dist
npm run lint      # Run ESLint checks
npm run preview   # Preview production build locally
```

**Key Dependencies**:
- `react@19.2.7` - UI framework
- `react-dom@19.2.7` - DOM rendering
- `vite@8.1.1` - Build tool and dev server
- `@vitejs/plugin-react` - React integration with Oxc parser

---

## ✅ Code Quality & Best Practices

### Enabled Enforcements
- **ESLint**: Strict rules for React hooks (`react-hooks/rules-of-hooks`) and refresh optimization
- **React StrictMode**: Development warnings and checks enabled in [main.jsx](src/main.jsx)
- **No Prettier**: Code formatting is not enforced

### When Writing Code
- Use **functional components** with `export default function`
- Keep components **presentational** (data display focused)
- **Co-locate styles** with components in `/styles` folder
- Use **React 19 features** when appropriate (no legacy class components)
- Follow **BEM-like CSS naming** for clarity and maintainability

---

## 🎯 Common Development Patterns

### Rendering Lists
```javascript
// Always use a stable key (id + category for uniqueness)
plants.map((plant) => (
  <div key={`${plant.id}-${plant.category}`}>
    {plant.name}
  </div>
))
```

### Category Filtering
```javascript
// Use Set for deduplication of categories
const categories = [...new Set(plants.map((p) => p.category))]
```

### Component Imports
- Import CSS directly in component file
- Import data modules as needed
- Use destructuring for plantList imports

---

## 🔮 Future Enhancement Opportunities

These areas are currently **not implemented** but represent logical next steps:

| Feature | Impact | Priority |
|---------|--------|----------|
| **State Management** | Add-to-cart, quantity tracking | High |
| **Cart Functionality** | Complete cart interactions, checkout flow | High |
| **Routing** | Multi-page navigation | Medium |
| **Forms** | Checkout, user input handling | Medium |
| **Testing** | Unit & component tests with Vitest/React Testing Library | Medium |
| **API Integration** | Backend data fetching, real products | Low (learning project) |
| **Authentication** | User accounts, login | Low |

---

## ⚠️ Important Notes & Pitfalls

1. **No TypeScript**: Project uses pure JavaScript/JSX. TypeScript types are installed but not enforced.
2. **Static Data Only**: All plant data is hardcoded in `plantList.js`. Any data changes require manual updates.
3. **No Testing Infrastructure**: No test setup exists. Tests must be added from scratch if needed.
4. **React 19**: Uses latest React version. Ensure compatibility when adding dependencies.
5. **ESLint Strict**: The React Refresh rule (`react-refresh/only-export-components`) requires exporting only components from `.jsx` files.

---

## 📝 File Editing Patterns

When modifying this codebase:

- **Adding components**: Create in `/src/components`, add corresponding CSS in `/src/styles`
- **Adding data**: Extend [plantList.js](src/datas/plantList.js) following the `{ id, name, category }` structure
- **Styling**: Update co-located `.css` files, use global vars from `index.css` for colors/fonts
- **Refactoring**: Preserve existing folder structure and naming conventions

---

## 🔗 Related Resources

- [Official Vite React Documentation](https://vitejs.dev/guide/)
- [React 19 Docs](https://react.dev)
- [ESLint Configuration Reference](eslint.config.js)
