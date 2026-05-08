import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../features/cart/cartSelectors";



export default function Navbar({ search, setSearch }) {
  const totalItems = useSelector(selectTotalItems);

  return (

    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">


        <Link to="/" className="text-xl font-bold">
          🛍 Store
        </Link>


        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded w-64"
        />

        <Link
          to="/cart"
          className="relative bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          🛒
          <span className="ml-1">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}