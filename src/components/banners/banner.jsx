// eslint-disable-next-line
const Banner = ({ title, image }) => {
  return <div className={`rounded-[10px] h-[300.38px] relative w-full p-[60px_40px] overflow-hidden`}>
    <img src={image} alt="title" className="-z-10 absolute object-cover object-right-bottom w-full h-full bottom-0 right-0" />
    <h1 className={`w-[50%] text-dark text-[22px] font-bold leading-[28.8px]`}>{title}</h1>
    <button className={`rounded-[4px] outline-none focus:ring-1 ring-offset-2 ring-offset-white ring-primary p-[8px_13px] bg-primary text-white mt-[25px]`}>Shop Now</button>
  </div>;
};

export default Banner;
