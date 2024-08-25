import {memo, useState} from "react";
import ReactStars from "react-stars/dist/react-stars.js";
import {} from "number-brm"
import {CartIcon, HeartIcon} from "@/assets/icons/index.js";

const SingleProductComponent = ({product, quantity, setQuantity, isAddedToCart = true, isAddedToWishlist = false, dispatch}) => {
    const [activeProduct, setActiveProduct] = useState(0);
    const discount = product?.price - (product?.price / 100) * product?.discountPercentage;
    return <div className={`flex gap-[55px]`}>
        <div className={`w-[450px] flex flex-col gap-[30px]`}>
            <div className={`w-[450px] h-[450px]`}>
                <img src={product?.images[activeProduct]} alt={product?.title}
                     className={`object-contain object-center rounded-[16px] border-[1px] border-[#ddd] p-[50px]`}/>
            </div>
            <div className={`w-full overflow-x-auto scroll-hide flex gap-[20px]`}>
                {product?.images.map((image, index) => (
                    <button key={image}
                            className={`w-[100px] min-h-[100px] bg-[#fcfcfc] rounded-[17px] overflow-hidden`}
                            onClick={() => setActiveProduct(index)}>
                        <img src={image} alt={product?.title}
                             className={`object-contain object-center rounded-[17px] border-[1px] p-[10px] ${index === activeProduct ? "border-primary" : "border-[#ddd]"}`}/>
                    </button>
                ))}
            </div>
        </div>
        <div>
            <h2 title={product?.title}
                className={`text-dark text-[30px] font-bold leading-[48px] w-[400px]`}>{product?.title}</h2>
            <div className={`flex items-center pt-[17px] pb-[34px]`}>
                <ReactStars color1={"white"} edit={false} value={product?.reviews.length} size={20}/>
                <span className={`text-[#B6B6B6]`}>({product?.reviews.length} reviews)</span>
            </div>
            <div className={`flex flex-start gap-[14px] pb-[30px]`}>
                <span className={`text-[48px] text-primary font-bold inline-block`}>${discount.brm("int", 2)}</span>
                <div className={`h-[20px] flex flex-col justify-between`}>
                    <span
                        className={`text-[14px] text-[#FDC040] font-semibold pt-[10px] inline-block`}>{product?.discountPercentage.brm("int", 0)}% Off</span>
                    <span className={`inline-block text-[20px] text-[#B6B6B6] font-bold`}>${product?.price}</span>
                </div>
            </div>
            <p className={`w-[470px] text-[17px] text-[#7E7E7E] leading-[24px] font-normal pb-[34px]`}>{product?.description}</p>
            <div className={`flex items-center gap-[14px] pb-[30px]`}>
                <span className={`text-[#7E7E7E] text-[16px] font-medium leading-[24px]`}>Size / Weight:</span>
                <ul className={`flex items-center gap-[5px]`}>
                    <li>
                        <button
                            className={`px-[9px] py-[6px] rounded-[5px] hover:bg-primary hover:text-white focus:bg-primary focus:text-white duration-300 outline-none text-[14px]`}>
                            50
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-[9px] py-[6px] rounded-[5px] hover:bg-primary hover:text-white focus:bg-primary focus:text-white duration-300 outline-none bg-primary text-white text-[14px]`}>
                            60
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-[9px] py-[6px] rounded-[5px] hover:bg-primary hover:text-white focus:bg-primary focus:text-white duration-300 outline-none text-[14px]`}>
                            80
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-[9px] py-[6px] rounded-[5px] hover:bg-primary hover:text-white focus:bg-primary focus:text-white duration-300 outline-none text-[14px]`}>
                            100
                        </button>
                    </li>
                    <li>
                        <button
                            className={`px-[9px] py-[6px] rounded-[5px] hover:bg-primary hover:text-white focus:bg-primary focus:text-white duration-300 outline-none text-[14px]`}>
                            150
                        </button>
                    </li>
                </ul>
            </div>
            <div className={`flex items-center gap-[8.7px]`} tabIndex={-1}>
                <div
                    className={`w-[90px] h-[50px] rounded-[5px] border-2 border-primary flex items-center justify-between pl-[30px] pr-[10px]`}>
                    <span className={`font-bold`}>{quantity}</span>
                    <div className={`flex flex-col h-full justify-between py-[5px]`}>
                        <button onClick={() => setQuantity((prev) => prev + 1)} disabled={quantity >= product?.stock}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                 fill="none">
                                <g clipPath="url(#clip0_6511_7281)">
                                    <path
                                        d="M8.5 10.3833L4.98 6.8633L1.46 10.3833L0.5 9.4233L4.02 5.9033C4.30444 5.65441 4.62444 5.52997 4.98 5.52997C5.33556 5.52997 5.65556 5.65441 5.94 5.9033L9.46 9.4233L8.5 10.3833Z"
                                        fill="#3BB77E"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6511_7281">
                                        <rect width="16" height="16" fill="white"
                                              transform="matrix(1 0 0 -1 0.5 16.25)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button onClick={() => setQuantity((prev) => prev - 1)} disabled={quantity <= 1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                 fill="none">
                                <g clipPath="url(#clip0_6511_7279)">
                                    <path
                                        d="M4.98 10.5967C4.62444 10.5967 4.30444 10.4545 4.02 10.17L0.5 6.65001L1.46 5.74335L4.98 9.26335L8.5 5.74335L9.46 6.65001L5.94 10.17C5.65556 10.4545 5.33556 10.5967 4.98 10.5967Z"
                                        fill="#3BB77E"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6511_7279">
                                        <rect width="16" height="16" fill="white"
                                              transform="matrix(1 0 0 -1 0.5 16.25)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                {!isAddedToCart ? (<button
                    onClick={() => dispatch({type: "ADD_TO_CART", payload: {product, quantity: quantity}})}
                    className={`text-light h-[50px] px-[20px] flex items-center font-semibold justify-center gap-[10px] rounded-[5px] bg-primary duration-300 hover:bg-light-primary hover:text-primary`}>
                    <CartIcon width={16.5} height={16} color={"currentColor"}/>
                    Add to cart
                </button>) : (
                    <button
                        onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: product})}
                        className={`text-light h-[50px] px-[20px] flex items-center font-semibold justify-center gap-[10px] rounded-[5px] bg-primary duration-300 hover:bg-light-primary hover:text-primary`}>
                        <CartIcon width={16.5} height={16} color={"currentColor"}/>
                        Remove from cart
                    </button>
                )}
                <button
                    className={`w-[50px] h-[50px] flex items-center justify-center duration-300 hover:bg-light-primary hover:text-primary rounded-[5px] ${isAddedToWishlist ? "bg-primary text-light" : "text-[#253D4E]"}`}
                    onClick={() => dispatch({type: !isAddedToWishlist ? "ADD_TO_WISHLIST" : "REMOVE_FROM_WISHLIST", payload: product})} title={!isAddedToWishlist ? "Add to wishlist" : "Remove from wishlist"}>
                    <HeartIcon/>
                </button>
            </div>
        </div>
    </div>
}

export default memo(SingleProductComponent);