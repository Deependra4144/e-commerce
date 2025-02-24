import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"
import {addToCart} from '../redux/cartSlice'
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function ProductCard({product}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const moveToDetailPage = (product)=>{
      navigate('/detailPage',{state:product})
  }
  const handleAddToCart = (e,product)=>{
    e.stopPropagation()
    toast.success('product added to cart',{
      position:'top-center'
    })
    // console.log(product)
    dispatch(addToCart(product))
    
  }

  return (
    <div onClick={()=>{moveToDetailPage(product)}} className="p-4 cursor-pointer rounded-lg my-8 shadow-lg bg-white relative border transform transition-transform duration-300 hover:scale-105">
      <img src={product.imageURL} className="w-full h-48 object-contain mb-4" alt="" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price + ' $'}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"/>
        <FaStar className="text-yellow-500"/>
        <FaStar className="text-yellow-500"/>
        <FaStar className="text-yellow-500"/>
      </div>
      <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-24 hover:bg-red-700 transition-all"
      onClick={(e)=>{handleAddToCart(e,product)}}>
        <span className="group-hover:hidden hover:cursor-pointer">+</span>
        <span className="hidden group-hover:block hover:cursor-pointer">Add to cart</span>
      </div>
    </div>
  )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ProductCard
