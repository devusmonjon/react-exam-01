import {Link, NavLink} from "react-router-dom";
import {CartIcon, HeartIcon, Logo, ProfileIcon} from "@/assets/icons";
import {IoIosSearch} from "react-icons/io";
import {useStateValue} from "@/context";
import {useEffect, useState} from "react";

const Navbar = () => {
    // eslint-disable-next-line
    const [searchFocus, setSearchFocus] = useState(false);
    const [navbarshrink, setNavbarshrink] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [state] = useStateValue();


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.pageYOffset);
        })
    }, []);
    useEffect(() => {
        if (scroll > 50) {
            setNavbarshrink(true);
        } else {
            setNavbarshrink(false);
        }
    }, [scroll])

    return <header
        className={`py-5 sticky top-0 flex items-center justify-center z-10 ${navbarshrink ? "shadow-lg backdrop-blur-[20px]" : ""} duration-300`}>
        <div className="container flex items-center justify-between h-[50px] gap-10 xl:gap-40 ">
            <Link to="/">
                <Logo small={true}/>
            </Link>
            <div
                className={`items-center justify-between bg-light rounded-[4px] max-w-[822px] w-full relative overflow-hidden border-2 border-[#BCE3C9] hidden md:flex`}>
                <select className={`p-[10px_14px] cursor-pointer text-dark outline-none lg:block hidden`}>
                    <option>All categories</option>
                </select>
                <span className={`w-[1px] h-[20px] bg-[#CACACA] mx-[15px] lg:inline-block hidden`}></span>
                <form
                    className={`w-full flex pr-[14px] items-center`}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input type="text" placeholder="Search for items..." className={`w-full outline-none p-[10px_14px]`}
                           onFocus={() => setSearchFocus(true)}
                           onBlur={() => setSearchFocus(false)}
                    />
                    <button type="submit">
                        <IoIosSearch size={20} color={`gray`}/>
                    </button>
                </form>
            </div>
            <ul className={`flex gap-5 md:gap-3 items-center`}>
                <li>
                    <NavLink to="/wishlist"
                             className={`flex items-baseline text-[#7E7E7E] text-[16px] font-normal leading-[16px] gap-[5px]`}>
                        <div className="relative">
                            <HeartIcon/>
                            <span
                                className={`absolute left-[16px] bottom-[12px] w-[20px] h-[20px] flex items-center justify-center bg-primary rounded-full text-white text-[16px] ${state.wishlist.length > 0 ? "" : "hidden"}`}>{state.wishlist.length}</span>
                        </div>
                        <span className="hidden lg:inline-block">Wishlist</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart"
                             className={`flex items-baseline text-[#7E7E7E] text-[16px] font-normal leading-[16px] gap-[5px]`}>
                        <div className="relative">
                            <span className={`text-[#253D4E]`}>
                                <CartIcon/>
                            </span>
                            <span
                                className={`absolute left-[16px] bottom-[12px] w-[20px] h-[20px] flex items-center justify-center bg-primary rounded-full text-white text-[16px] ${state.cart.length > 0 ? "" : "hidden"}`}>{state.cart.length}</span>
                        </div>
                        <span className="hidden lg:inline-block">Cart</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/account"
                             className={`flex items-baseline text-[#7E7E7E] text-[16px] font-normal leading-[16px] gap-[5px]`}>
                        <div className="relative">
                            <ProfileIcon/>
                            <span
                                className={`absolute left-[16px] bottom-[12px] w-[20px] h-[20px] flex items-center justify-center bg-primary rounded-full text-white text-[16px] ${state.cart.length > 0 ? "" : "hidden"}`}>{state.cart.length}</span>
                        </div>
                        <span className="hidden lg:inline-block">Account</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>;
};

export default Navbar;
