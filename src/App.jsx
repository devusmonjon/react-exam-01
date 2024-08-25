import {Route, Routes} from "react-router";
import Layout from "@/layout/layout";
import {Home} from "@/pages";
import SingleProduct from "@/pages/single-product/single-product";
import Wishlist from "@/pages/wishlist/wishlist";
import {memo} from "react";
import ProductsPage from "@/pages/products/products.jsx";
import NotFound from "@/pages/404.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products/:id" element={<SingleProduct />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default memo(App);
