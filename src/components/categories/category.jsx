// eslint-disable-next-line
import {memo} from "react";

const Category = ({ title, productsCount, photo, bgColor }) => {
  return <div className="min-w-[137px] min-h-[180.19px] border-1 border-[#F4F6FA] rounded-[10px]" style={{
    backgroundColor: bgColor
  }}>
    <div className="flex justify-center w-full pt-[21px]">
      <img src={photo} alt={title} className="object-cover object-center" />
    </div>
    <h1 className="mt-[10px] mb-[3.19px] text-dark font-bold text-[16px] leading-[19.2px] text-center" title={title}>{title}</h1>
    <p className="text-[#7E7E7E] text-[14px] font-normal leading-[24px] text-center">{productsCount} items</p>
  </div>;
};

export default memo(Category);
