import newsletterImage from "@/assets/images/newsletter.png";
import {NewsletterForm} from "@/components/index.js";
import {memo} from "react";

const Newsletter = () => {
    return <div
        className="container mt-[100px] relative h-[35vh] md:h-[50vh] p-[20px_25px] sm:p-[40px_45px] rounded-[30px] overflow-hidden w-full md:p-[80px_85px] leading-[62px]">
        <div>
            <img src={newsletterImage}
                 className="absolute top-0 left-0 object-contain object-right-bottom -z-10 w-full h-full bg-light-primary"
                 alt="heroImage"/>
            <h1 className={`text-dark font-bold text-[25px] sm:text-[35px] leading-10 md:leading-none`}>Stay home & get your daily <br />
                needs from our shop</h1>
            <p className={`text-[#7E7E7E] font-normal text-[20px] leading-10 sm:leading-[20px] pt-[20px] sm:pt-[30px] pb-[30px] sm:pb-[50px]`}>
                Start You&#39;r Daily Shopping with Nest <span className={`text-primary`}>Mart</span>
            </p>
            <NewsletterForm/>
        </div>
    </div>
};

export default memo(Newsletter);
