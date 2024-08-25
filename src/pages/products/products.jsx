import {memo, useState} from "react";
import {Products} from "@/components/index.js";
import {useFetch} from "@/hooks/useFetch.jsx";

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    let { data: categories } = useFetch("/products/category-list");
    const { data, loading } = useFetch(`/products${activeCategory >= 1 ? `/category/${categories[activeCategory - 1]}` : ""}`, { limit: 12 }, [activeCategory]);
    categories = categories ? ["All", ...categories] : categories;
    return <Products title='Products' data={data?.products} loading={loading} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
}

export default memo(ProductsPage);