import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(product));
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="product-card group">


      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          className="product-img group-hover:scale-105 transition"
        />
      </Link>


      <div className="product-body">

        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-price">
          ${product.price}
        </p>


        <button
          onClick={handleAdd}
          className="btn-primary w-full mt-3 blue"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}