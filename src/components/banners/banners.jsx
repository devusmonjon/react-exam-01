import {Banner} from "@/components/index.js";
import banner1 from "@/assets/images/banners/banner-1.png";
import banner2 from "@/assets/images/banners/banner-2.png";
import banner3 from "@/assets/images/banners/banner-3.png";

const Banners = () => {
  return <section className={`my-[45px]`}>
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[20px]">
        <Banner title={"Everyday Fresh & Clean with Our Products"} image={banner1} />
        <Banner title={"Make your Breakfast Healthy and Easy"} image={banner2} />
        <Banner title={"The best Organic Products Online"} image={banner3} />
      </div>
    </div>
  </section>;
};

export default Banners;
