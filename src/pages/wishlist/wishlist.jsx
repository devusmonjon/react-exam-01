import {useStateValue} from "@/context/index.jsx";
import {Products} from "@/components/index.js";
import {memo, useEffect, useState} from "react";

const Wishlist = () => {
    const [state] = useStateValue();
    const [data, setData] = useState(state.wishlist);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        if (activeCategory === 0) {
            setData(state.wishlist);
        } else {
            setData(state.wishlist.filter(product => product.category === categories[activeCategory]));
        }
    }, [activeCategory]);
    useEffect(() => {
        setCategories(["all", ...state.wishlist.map(item => (item.category))])
    }, [state.wishlist]);
    console.log(data.length > 0)
    return data.length > 0 ? <Products title={"Wishlist"} data={data} activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} categoriesWidth={"auto"} /> : <div className={`container`}>
        <Products title={"Wishlist is empty"} categories={["all"]} activeCategory={0} categoriesWidth={"mix-content"} setActiveCategory={() => null} />
    </div>
}

export default memo(Wishlist);