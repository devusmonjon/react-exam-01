import {memo} from "react";
import {CartIcon} from "@/assets/icons/index.js";

const Skeleton = () => {
    return <div className={`rounded-[15px] border-[1px] p-[10px] border-[#ECECEC] h-[484px] overflow-hidden`}>
        <div
            className={` h-[246px] w-full bg-[#ddd] rounded-[5px]`}></div>
        <span className={`inline-block mt-[5px] text-[#ADADAD]  text-[16px] font-normal leading-[24px] w-[48px] bg-[#ddd] rounded-[5px] h-[21px]`}></span>

        <h1 className={`w-full bg-[#ddd] rounded-[5px] h-[40px] my-[20px]`}></h1>
        <div className={`bg-[#ddd] rounded-[5px] h-[20px] my-[5px]`}></div>
        <p className={`bg-[#ddd] rounded-[5px] w-[30%] h-[15px] my-[15px]`}></p>
        <div className={`mt-[12px] flex items-center justify-between`}>
            <div className={`flex items-center gap-[10px]`}>
                <span
                    className={`leading-[24px] inline-block h-[24px] bg-[#ddd] rounded-[5px]`}></span>
                <span
                    className={`leading-[24px] line-through inline-block h-[24px] bg-[#ddd] rounded-[5px]`}></span>
            </div>
            <button
                className={`duration-300 hover:text-light hover:bg-primary w-[85px] h-[36px] flex items-center justify-center rounded-[4px] text-primary bg-light-primary font-bold leading-[24px] gap-[10px]`}>
                <CartIcon color={"currentColor"} width={16} height={16}/>
                Add
            </button>
        </div>
    </div>
}

export default memo(Skeleton);