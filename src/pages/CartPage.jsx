import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../features/cart/cartSelectors";

import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    toast.info("Item removed ❌");
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast.warn("Cart cleared 🗑️");
  };

  const handleIncrease = (id) => {
    dispatch(increaseQty(id));
    toast.success("Added one more 🛒");
  };

  const handleDecrease = (id, qty) => {
    if (qty === 1) return;
    dispatch(decreaseQty(id));
    toast.info("Reduced quantity");
  };

  if (items.length === 0) {
    return (
      <div className="text-center mt-20 px-4">
        <h2 className="text-xl mb-4 dark:text-white">Your cart is empty 🛒</h2>
        <Link to="/" className="text-blue-500 underline hover:text-blue-700">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"></div>
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-4 border p-4 rounded-lg shadow bg-white dark:bg-gray-800 dark:text-white"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1 w-full">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">${item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => handleDecrease(item.id, item.quantity)}
                  disabled={item.quantity === 1}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
                >
                  -
                </button>

                <span className="min-w-[20px] text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => handleIncrease(item.id)}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-sm mt-2 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 sticky bottom-0 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-bold dark:text-white">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <div className="flex gap-4">
          <button
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>

          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
