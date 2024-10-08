import {memo} from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line
const Breadcrumb = ({ list = [] }) => {
    return (
        <ul className={`my-10 flex w-min items-center gap-[14px]`}>
            <li className={`flex items-center whitespace-nowrap`}>
                <Link to={`/`} className={`flex text-primary items-center gap-[5px] text-[16px] w-min`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path
                            d="M7.79333 0.716666C7.57556 0.53 7.31111 0.436666 7 0.436666C6.68889 0.436666 6.42444 0.53 6.20667 0.716666L0 6.31667V12.3833C0 12.9122 0.178889 13.3556 0.536667 13.7133C0.894444 14.0711 1.33778 14.25 1.86667 14.25H12.1333C12.6622 14.25 13.1056 14.0711 13.4633 13.7133C13.8211 13.3556 14 12.9122 14 12.3833V6.31667L7.79333 0.716666ZM8.77333 13.0833H5.27333V10.1433C5.27333 9.67667 5.43667 9.27222 5.76333 8.93C6.09 8.58778 6.50222 8.41667 7 8.41667C7.49778 8.41667 7.91778 8.58778 8.26 8.93C8.60222 9.27222 8.77333 9.67667 8.77333 10.1433V13.0833ZM12.8333 12.3833C12.8333 12.6011 12.7633 12.7722 12.6233 12.8967C12.4833 13.0211 12.32 13.0833 12.1333 13.0833H9.94V10.1433C9.90889 9.36556 9.61333 8.68889 9.05333 8.11333C8.49333 7.53778 7.80889 7.25 7 7.25C6.19111 7.25 5.50667 7.53778 4.94667 8.11333C4.38667 8.68889 4.10667 9.38111 4.10667 10.19V13.0833H1.86667C1.68 13.0833 1.51667 13.0211 1.37667 12.8967C1.23667 12.7722 1.16667 12.6011 1.16667 12.3833V6.83L7 1.60333L12.8333 6.83V12.3833Z"
                            fill="#3BB77E"/>
                    </svg>
                    Home
                </Link>
                <span className={`pl-[10px] text-[14px]`}>&gt;</span>
            </li>
            {list.map((item, index, array) => (
                <li className={`flex items-center whitespace-nowrap`} key={item.id}>
                    {item.active ? (<Link to={item.path}
                            className={`flex text-primary items-center gap-[5px] text-[16px] w-min`}>
                        {item.title}
                    </Link>) : (<h2 className={`flex text-[#7E7E7E] items-center gap-[5px] text-[16px] w-min`}>
                    {item.title}
                </h2>)}
            {!(index === array.length - 1) ?
                <span className={`pl-[10px] text-[14px] text-[#7E7E7E]`}>&gt;</span> : null}
        </li>
    )
)}
</ul>
    )
}

export default memo(Breadcrumb)