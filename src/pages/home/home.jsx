import {Banners, Categories, Hero, Newsletter, Products} from "@/components";
import {useFetch} from "@/hooks/useFetch.jsx";
import {memo, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    let { data: categories } = useFetch("/products/category-list");
    const { data, loading } = useFetch(`/products${activeCategory >= 1 ? `/category/${categories[activeCategory - 1]}` : ""}`, { limit: 12 }, [activeCategory]);
    categories = categories ? ["All", ...categories] : categories;
    return (
        <section>
            <Hero/>
            <Categories/>
            <Banners/>
            <div>
                <Products data={data?.products} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} title={"Popular Products"} loading={loading}/>
                <div className="container">
                    <Link to={"/products"} className={`w-full h-[50px] flex items-center justify-center bg-primary rounded-[5px] duration-300 hover:bg-light-primary hover:text-primary focus:bg-light-primary focus:text-primary outline-none text-white font-bold text-[18px] my-[30px]`}>All products</Link>
                </div>
            </div>
            <Newsletter/>
        </section>
    );
};

export default memo(Home);
