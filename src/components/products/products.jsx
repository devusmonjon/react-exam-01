import {Product, SectionTitle} from "@/components/index.js";
import {memo, useState} from "react";
import {useFetch} from "@/hooks/useFetch.jsx";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(-1);
  const { data: categories } = useFetch("/products/category-list");
  const { data, loading } = useFetch(`/products${activeCategory >= 0 ? `/category/${categories[activeCategory]}` : ""}`, { limit: 10 }, [activeCategory]);
  const activeChanger = (index) => {
    setActiveCategory(index);
  }
  console.log(data)
  return <section>
    <div className="container">
      <SectionTitle title="Products" list={categories} defaultActive={activeCategory} activeChanger={activeChanger} between={true} width={"600px"} />
      <div className="flex justify-center flex-wrap sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[25px]">
        {data?.products?.map((product) => (
            <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>;
};

export default memo(Products);
