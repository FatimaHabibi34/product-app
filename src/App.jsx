import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import SettingsPanel from "./components/SettingsPanel";
import ProductList from "./components/ ProductList";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState("");

  return (


    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">

      <Navbar search={search} setSearch={setSearch} />
      <ProductList search={search} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <SettingsPanel />

    </div>
  );

}