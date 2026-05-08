import axios from "axios";

export const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};

export const fetchProductById = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};