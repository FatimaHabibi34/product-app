  
 
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProducts(search) {
  return useQuery({
    queryKey: ["products", search],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products");

      let products = res.data.products;

      if (search) {
        products = products.filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      return products;
    },
  });
}