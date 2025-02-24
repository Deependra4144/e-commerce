import toast from "react-hot-toast";
import { FaCar, FaQuestion } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";


function DetailPage() {
    let location = useLocation();
    const data = location.state;
    const dispatch = useDispatch()
    const handleAddToCart = (e)=>{
        e.stopPropagation()
        toast.success('product added to cart',{
          position:'top-center'
        })
        // console.log(product)
        dispatch(addToCart(data))
        
      }
    return (
        <div className="container mx-auto px-5 md:px-20 lg:px-40 py-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        className="w-full max-w-sm object-cover rounded-lg shadow-md" 
                        src={data.imageURL} 
                        alt={data.name} 
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
                        <p className="text-lg font-semibold text-gray-600">${data.price}</p>
                    </div>
                    <button onClick={(e)=>handleAddToCart(e)} className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-transform transform hover:scale-105 shadow-md">
                        Add to Cart
                    </button>
                    <div className="space-y-2">
                        <p className="flex items-center gap-2 text-gray-700">
                            <FaCar className="text-red-500"/> Delivery & Return
                        </p>
                        <p className="flex items-center gap-2 text-gray-700">
                            <FaQuestion className="text-blue-500"/> Ask a Question
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Description:</h3>
                <p className="text-gray-600">{data.description || "No description available."}</p>
            </div>
        </div>
    );
}

export default DetailPage;
