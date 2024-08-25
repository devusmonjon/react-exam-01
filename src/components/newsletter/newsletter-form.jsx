import {memo} from "react";

const NewsletterForm = () => {
  return <form onSubmit={e => e.preventDefault()} className={`bg-light max-w-[400px] rounded-[30px] h-[54px] w-full flex items-center justify-between`}>
    <input type="email" placeholder="Your emaill address" className={`h-[54px] w-full outline-none rounded-l-[30px] pl-[22px] pr-[10px] lowercase`} />
    <button type="submit" className={`p-[15px_30px] bg-primary rounded-[50px] text-[16px] font-normal leading-[24px] text-light`}>Subscribe</button>
  </form>;
};

export default memo(NewsletterForm);
