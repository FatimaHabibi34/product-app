import { useState } from "react";
import ProductList from "../components/ ProductList"
import FiltersSidebar from "../components/FiltersSidebar";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 2000,
    rating: 0,
  });

  return (
    <div className="flex flex-col md:flex-row gap-6">


      <FiltersSidebar filters={filters} setFilters={setFilters} />


      <div className="flex-1">
        <ProductList filters={filters} />

      </div>

    </div>
  );
}