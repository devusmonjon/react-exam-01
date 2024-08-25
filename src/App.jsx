import {Route, Routes} from "react-router";
import Layout from "@/layout/layout";
import {Home} from "@/pages";
import SingleProduct from "@/pages/single-product/single-product";
import Wishlist from "@/pages/wishlist/wishlist";
import {memo} from "react";
import ProductsPage from "@/pages/products/products.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products/:id" element={<SingleProduct />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="*" element={<div className={`container text-center font-bold my-10 text-[50px]`}>404 not found</div>} />
                </Route>
            </Routes>
        </>
    );
};

export default memo(App);
