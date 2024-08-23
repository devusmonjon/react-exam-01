import Category from "@/components/categories/category.jsx";
import {categories} from "@/static/static.js";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {SectionTitle} from "@/components/index.js";
import {memo, useState} from "react";

const categoryTypes = ["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"]

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(2);
    const activeChanger = (index) => {
        setActiveCategory(index);
    }
    return <section>
        <div className="container">
            <SectionTitle title="Featured Categories" between={false} list={categoryTypes} defaultActive={activeCategory} activeChanger={activeChanger} />
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                    300: {
                        slidesPerView: 1, spaceBetween: 0,
                    }, 360: {
                        slidesPerView: 2, spaceBetween: 10,
                    }, 640: {
                        slidesPerView: 4, spaceBetween: 10,
                    }, 768: {
                        slidesPerView: 4, spaceBetween: 10,
                    }, 1024: {
                        slidesPerView: 7, spaceBetween: 10,
                    }, 1536: {
                        slidesPerView: 10, spaceBetween: 10,
                    }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="container flex overflow-x-auto gap-[24px] scroll-hide select-none 2xl">
                {categories.map(category => (<SwiperSlide key={category.id}>
                        <Category title={category.title} productsCount={category.productsCount} photo={category.photo}
                                  bgColor={category.bgColor}/>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    </section>;
};

export default memo(Categories);
