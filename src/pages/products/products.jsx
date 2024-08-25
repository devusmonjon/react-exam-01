import {memo, useState} from "react";
import {Products} from "@/components/index.js";
import {useFetch} from "@/hooks/useFetch.jsx";
import {Link} from "react-router-dom";

const ProductsPage = () => {
    const [offset, setOffset] = useState(1);
    const [activeCategory, setActiveCategory] = useState(0);
    let {data: categories} = useFetch("/products/category-list");
    const {
        data,
        loading
    } = useFetch(`/products${activeCategory >= 1 ? `/category/${categories[activeCategory - 1]}` : ""}`, {limit: 8 * offset}, [activeCategory, offset]);
    categories = categories ? ["All", ...categories] : categories;
    return <>
        <Products title='Products' data={data?.products} loading={loading} categories={categories}
                  activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        <div className="container">
            <button
                onClick={() => setOffset((prev) => prev + 1)}
                  className={`w-full h-[50px] flex items-center justify-center bg-primary rounded-[5px] duration-300 hover:bg-light-primary hover:text-primary focus:bg-light-primary focus:text-primary outline-none text-white font-bold text-[18px] my-[30px]`}>Load more</button>
        </div>
    </>
}

export default memo(ProductsPage);