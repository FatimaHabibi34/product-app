import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts" // ✅ FIXED
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: product, isLoading, isError } = useProducts(id);

  if (isLoading) return <p className="text-center mt-10">Loading product...</p>;
  if (isError) return <p className="text-center mt-10">Failed to load product</p>;

  const handleAdd = () => {
    dispatch(addItem(product));
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 text-black dark:text-white">


      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg shadow"
        />
      </div>


      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {product.description}
        </p>

        <h3 className="text-xl font-semibold mb-2">
          ${product.price}
        </h3>

        <p className="mb-1">Category: {product.category}</p>
        <p className="mb-4">⭐ Rating: {product.rating}</p>

        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}