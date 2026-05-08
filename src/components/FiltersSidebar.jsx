export default function FiltersSidebar({ filters, setFilters }) {

    const update = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const reset = () => {
        setFilters({
            category: "",
            minPrice: 0,
            maxPrice: 2000,
            rating: 0,
        });
    };

    return (
        <div className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">

            <h2 className="text-lg font-bold mb-4">Filters</h2>


            <div className="mb-4">
                <label className="text-sm font-semibold">Category</label>

                <select
                    value={filters.category}
                    onChange={(e) => update("category", e.target.value)}
                    className="w-48 mt-1 p-2 border rounded dark:bg-gray-700"
                >
                    <option value="">All</option>
                    <option value="smartphones">smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                </select>
            </div>


            <div className="mb-4">
                <label className="text-sm font-semibold">Max Price</label>

                <input
                    type="range"
                    min="0"
                    max="2000"
                    value={filters.maxPrice}
                    onChange={(e) => update("maxPrice", Number(e.target.value))}
                    className="w-48"
                />

                <p className="text-sm">${filters.maxPrice}</p>
            </div>


            <div className="mb-4">
                <label className="text-sm font-semibold">Min Rating</label>

                <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={filters.rating}
                    onChange={(e) => update("rating", Number(e.target.value))}
                    className="w-48"
                />

                <p className="text-sm">⭐ {filters.rating}+</p>
            </div>

            <button
                onClick={reset}
                className="w-48 mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
                Reset Filters
            </button>

        </div>
    );
}