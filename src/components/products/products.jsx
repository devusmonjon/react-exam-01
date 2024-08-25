import {Product, SectionTitle, Skeleton} from "@/components/index.js";
import {memo} from "react";

// eslint-disable-next-line
const Products = ({ data, title, loading, categories = [], activeCategory = -1, setActiveCategory, categoriesWidth = "600px" }) => {

  const activeChanger = (index) => {
    setActiveCategory(index);
  }
  return <section>
    <div className="container">
      <SectionTitle title={title} list={categories} defaultActive={activeCategory} activeChanger={activeChanger} between={true} width={categoriesWidth} />
      <div className="flex justify-center flex-wrap sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px]">
        {/* eslint-disable-next-line */}
        {!loading ? data?.map((product) => (
            <Product key={product.id} product={product} />
        )) : [1,1,1,1,1,1,1,1,1,1].map((_, i) => (
            <Skeleton key={i} />
        ))}
      </div>
    </div>
  </section>;
};

export default memo(Products);
