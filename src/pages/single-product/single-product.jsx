import {useParams} from "react-router-dom";
import {useStateValue} from "@/context";
import {memo, useEffect, useState} from "react";
import {Breadcrumb, SingleProductComponent} from "@/components";
import {useFetch} from "@/hooks/useFetch.jsx";

const SingleProduct = () => {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);

    const [state, dispatch] = useStateValue()

    const {data} = useFetch(`/products/${id}`, {}, [id]);

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: "smooth" });
        if (state.isSearchOpen) {
            dispatch({ type: "SEARCH_UPDATE", payload: false })
        }
    }, [id])
    return (<div className={`container`}>
            <Breadcrumb list={[
                {
                    id: 1,
                    path: "/products",
                    active: true,
                    title: "Products"
                },
                {
                    id: 2,
                    path: `/products/${id}`,
                    active: false,
                    title: data?.title
                },
            ]} />
            <SingleProductComponent product={data} quantity={quantity} setQuantity={setQuantity} isAddedToCart={state.cart.some(item => item.id === data?.id)} isAddedToWishlist={state.wishlist.some(item => item.id === data?.id)} dispatch={dispatch} />
        </div>
    )
}

export default memo(SingleProduct);