# 🛒 React Product Store App

A modern frontend product store application built with **React, Redux Toolkit, React Query, React Router, and Tailwind CSS v4**.  
It includes product listing, search, cart system, product details, and dark mode support.

---

## 🚀 Features

### 🛍 Products

- Product listing from API (DummyJSON)
- Product details page
- Search products from navbar
- Category filtering support
- Pagination / infinite scroll ready

---

### 🛒 Cart System

- Add to cart
- Remove from cart
- Increase / decrease quantity
- Total price calculation
- Redux Toolkit state management

---

### 🎨 UI / UX

- Tailwind CSS v4 styling
- Dark / Light mode toggle
- Animated theme switch
- Responsive design (mobile-first)
- Modern product cards UI

---

### ⚡ Performance

- React Query for API caching
- Optimized rendering
- Query-based search updates

---

## 🧠 Tech Stack

- React 19
- Vite
- Redux Toolkit
- React Query (TanStack Query)
- React Router DOM
- Tailwind CSS v4

---

## 📁 Project Structure

src/
│
├── app/
│ └── store.js
│
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ ├── SettingsPanel.jsx
│
├── context/
│ └── SettingsProvider.jsx
│
├── features/
│ └── cart/
│ ├── cartSlice.js
│ └── cartSelectors.js
│
├── hooks/
│ └── useProducts.js
│
├── pages/
│ ├── ProductsPage.jsx
│ ├── ProductDetails.jsx
│ ├── CartPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css

# Run project

```bash
npm install
npm run dev
```
