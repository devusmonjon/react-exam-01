import {IoIosCloseCircleOutline, IoIosSearch} from "react-icons/io";
import {useStateValue} from "@/context/index.jsx";
import {memo, useEffect, useRef, useState} from "react";
import {useFetch} from "@/hooks/useFetch.jsx";
import {Products} from "@/components/index.js";

// eslint-disable-next-line
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [state, dispatch] = useStateValue();

    const {data: categories} = useFetch("/products/category-list");
    const {data: searchRes} = useFetch(`/products/search?q=${searchQuery}`, {}, [searchQuery]);

    const input = useRef(null);
    useEffect(() => {
        if (state.isSearchOpen) {
            input.current?.focus();
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    dispatch({type: "SEARCH_UPDATE", payload: false})
                }
            })
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setSearchQuery("");
        }
    }, [state.isSearchOpen]);

    return <div id="#popup-search-bar"
                className={`w-full h-screen bg-light fixed top-0 left-0 duration-300 ${state.isSearchOpen ? "z-[999999999] opacity-100" : "z-[-1] opacity-[0]"}`}>
        <button onClick={() => dispatch({type: "SEARCH_UPDATE", payload: false})}
                className={`fixed top-[32.5px] right-[20px] z-[9999999999]`}>
            <IoIosCloseCircleOutline size={25} className={`text-primary duration-300 hover:scale-110 focus:scale-110 outline-none`}/>
        </button>
        <div className="h-[90px] w-full flex justify-center items-center">
            <div
                className={`items-center justify-between bg-light rounded-[4px] mx-[60px] max-w-[822px] ${state.isSearchOpen ? "max-w-full" : ""} duration-300 w-full relative overflow-hidden border-2 border-[#BCE3C9] hidden md:flex`}>
                <select className={`p-[10px_14px] cursor-pointer text-dark outline-none lg:block hidden`}>
                    <option data-category={""}>All categories</option>
                    {categories?.map(category => (
                        <option data-category={""} key={category}>{category.split("-").join(" ")}</option>
                    ))}
                </select>
                <span className={`w-[1px] h-[20px] bg-[#CACACA] mx-[15px] lg:inline-block hidden`}></span>
                <form
                    className={`w-full flex pr-[14px] items-center`}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input type="text" placeholder="Search for items..." className={`w-full outline-none p-[10px_14px]`}
                           onFocus={() => dispatch({type: "SEARCH_UPDATE", payload: true})}
                        // onBlur={() => dispatch({type: "SEARCH_UPDATE", payload: false})}
                        value={searchQuery}
                           onChange={(e) => {
                               setSearchQuery(e.target.value);
                           }}
                           ref={input}
                    />
                    <button type="submit">
                        <IoIosSearch size={20} color={`gray`}/>
                    </button>
                </form>
            </div>

        </div>
        <div className="w-full mt-5 overflow-y-auto h-[80%]">
            {searchQuery.length >= 3 ? (
                <Products title={<>Search results for: <span className="text-red-500">{searchQuery}</span></>} data={searchRes} />
            ) : (<h1 className={`mx-[60px] text-[20px] font-bold`}>Please enter minimum 3 letters</h1>)}
        </div>
    </div>
}

export default memo(SearchBar);