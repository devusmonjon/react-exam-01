import {useParams} from "react-router-dom";

const SingleProduct = () => {
    const {id} = useParams();
    return (<div className={`container`}>
            <h1 className={`container text-center font-bold mt-10 mb-2 text-[50px]`}>Page in maintance</h1>
            <h1 className={`text-center`}>Product: {id}</h1>
            <img src="https://i.pinimg.com/736x/a0/d4/d9/a0d4d9ea590fe1c18ce7e35abe5b7385.jpg" alt="" className={`w-full h-[60vh] object-contain object-center`} />
        </div>
    )
}

export default SingleProduct;