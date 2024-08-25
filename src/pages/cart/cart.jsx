import {memo} from "react";

const Cart = () => {
    return <div className={`container`}>
        <img src="https://i.pinimg.com/736x/a0/d4/d9/a0d4d9ea590fe1c18ce7e35abe5b7385.jpg" alt="Maintenance" className={`w-full h-[70vh] object-contain object-center`} />
        <h1 className={`font-bold text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[2vw] text-center`}>This page is under maintenance</h1>
    </div>;
}

export default memo(Cart);