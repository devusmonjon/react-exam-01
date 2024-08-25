import {Outlet} from "react-router";
import {Footer, Navbar, SearchBar} from "../components";
import {memo} from "react";

const Layout = () => {
    return (
        <>
            <SearchBar/>
            <Navbar/>
            <main>

                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default memo(Layout);
