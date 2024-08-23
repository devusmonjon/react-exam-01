import {Banners, Categories, Footer, Hero, Newsletter, Products} from "@/components";

const Home = () => {
    return (
        <section>
            <Hero/>
            <Categories/>
            <Banners/>
            <Products/>
            <Newsletter/>
        </section>
    );
};

export default Home;
