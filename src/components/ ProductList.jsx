import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

export default function ProductList({ search }) {
    const { data, isLoading, isError } = useProducts(search);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;

    return (
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}