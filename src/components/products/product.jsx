import {memo} from "react";
import ReactStars from "react-stars/dist/react-stars.js";
import {} from "number-brm";
import {CartIcon} from "@/assets/icons";
import {useNavigate} from "react-router-dom";
import {useStateValue} from "@/context";

// eslint-disable-next-line
const Product = ({product}) => {
    const navigate = useNavigate();
    const [state, dispatch] = useStateValue();

    const addToCartHandler = () => {
        if (!state.cart.some(item => item.id === product?.id)) {
            dispatch({type: "ADD_TO_CART", payload: {product, quantity: 1}})
        }
    }
    // eslint-disable-next-line
    return <div className={`rounded-[15px] border-[1px] border-[#ECECEC] p-[25px] w-full sm:w-full`}>
        {/* eslint-disable-next-line react/prop-types */}
        <img src={product.images[0]} alt={product.title} onClick={() => navigate(`/products/${product.id}`)}
             className={`object-contain h-[246px] w-full duration-300 hover:scale-105 cursor-pointer`}/>
        {/* eslint-disable-next-line react/prop-types */}
        <span className={`mt-[5px] text-[#ADADAD]  text-[16px] font-normal leading-[24px]`}>{product.category}</span>
        {/* eslint-disable-next-line react/prop-types */}
        <h1 className={`text-dark text-[18px] font-bold leading-[20px] mt-[10px] h-[40px]`} title={product.title}>{product.title}</h1>
        <div className={`flex gap-[10px] items-center my-[5px]`}>
            {/* eslint-disable-next-line react/prop-types */}
            <ReactStars size={20} color1={"white"} value={product.rating} edit={false}/>
            {/* eslint-disable-next-line react/prop-types */}
            <span className={`text-[#B6B6B6] leading-[24px] text-[16px]`}>({product.rating})</span>
        </div>
        <p className={`text-[#B6B6B6]`}>By <span className={`text-primary`}>NestFood</span></p>
        <div className={`mt-[12px] flex items-center justify-between`}>
            <div className={`flex items-center gap-[10px]`}>
                {/* eslint-disable-next-line react/prop-types */}
                <span className={`text-primary text-[18px] font-bold leading-[24px]`}>${(product.price - (product.price / 100) * product.discountPercentage).brm()}</span>
                {/* eslint-disable-next-line react/prop-types */}
                <span className={`text-[#ADADAD] text-[14px] font-bold leading-[24px] line-through`}>${((product.price / 100) * product.discountPercentage).brm()}</span>
            </div>
            <button
                className={`duration-300 hover:text-light hover:bg-primary w-[85px] h-[36px] flex items-center justify-center rounded-[4px] text-primary bg-light-primary font-bold leading-[24px] gap-[10px]`}
                onClick={addToCartHandler}>
                <CartIcon color={"currentColor"} width={16} height={16} />
                Add
            </button>
        </div>
    </div>;
};

export default memo(Product);
