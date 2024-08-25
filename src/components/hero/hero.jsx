import heroImage from "@/assets/images/hero.png";
import { NewsletterForm } from "@/components/index.js";
import {memo} from "react";

const Hero = () => {
  return <div className="container mt-[20px] relative h-[35vh] md:h-[50vh] p-[20px_25px] sm:p-[40px_45px] md:p-[80px_85px] leading-[62px]">
    <div>
      <img src={heroImage} className="absolute top-0 left-0 object-cover object-right -z-10 w-full h-full rounded-[30px]" alt="heroImage" />
      <h1 className={`text-dark font-bold text-[25px] sm:text-[35px] md:text-[52px] leading-10 md:leading-none`}>Fresh Vegetables
        <br />
        Big discount</h1>
      <p className={`text-[#7E7E7E] font-normal text-[20px] leading-10 sm:text-[25px] sm:leading-[20px] pt-[20px] sm:pt-[30px] pb-[30px] sm:pb-[50px]`}>Save up to 50% off on your first order</p>
      <NewsletterForm />
    </div>
  </div>;
};

export default memo(Hero);
