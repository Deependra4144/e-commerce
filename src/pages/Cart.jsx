import { useDispatch, useSelector } from "react-redux"
import EmptyCart from "../assets/Images/Empty-Cart/emptyCart.jpg"
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import { removeCart,incriseQuantity,dicriseQuantity } from "../redux/cartSlice"
import Modal from "../components/Modal"
import ChangeAddress from "../components/ChangeAddress"
import { useNavigate } from "react-router-dom"

function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // console.log(dispatch)
    const cartProduct = useSelector(state=>state.cart)
    const [address, setAddress] = useState('Jaipur Mansarover')
    const [isModalopen, setIsModalOpen] = useState(false)

    const removeToCart = (id)=>{
        dispatch(removeCart(id))
    }

    const incresProductQuntity = (id) =>{
       dispatch(incriseQuantity(id))
      }
      const dicriseProductQuntity = (id) =>{
        dispatch(dicriseQuantity(id))
    }
    
  return(
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {
        cartProduct.products.length > 0 ? 
        <div>
            <h3 className="text-2xl font-semibold mb-4">SHOPING CART</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>PRODUCTS</p>
                  <div className="flex space-x-8">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>
                <div>
                  {cartProduct.products.map((e)=>{
                    return(
                      <div key={e.id} className="flex items-center justify-between p-3 border-b">
                        <div className="md:flex items-center space-x-4">
                          <img src={e.imageURL} alt={e.name} className="w-16 h-16 object-contain rounded"/>
                          <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold">{e.name}</h3>
                          </div>
                        </div>
                        <div className="flex space-x-12 items-center">
                          <p>${e.price}</p>
                          <div className="flex items-center justify-center border">
                              <button disabled={e.quantity < 2 ? true : false} onClick={()=>dicriseProductQuntity(e.id)} className="text-xl font-bold px-1.5 border-r">-</button>
                              <p className="text-xl px-2">{e.quantity}</p>
                              <button className="text-xl px-1 border-l" onClick={()=>incresProductQuntity(e.id)}>+</button>
                          </div>
                          <p>${(e.quantity * e.price).toFixed(2)}</p>
                          <button onClick={()=>{removeToCart(e.id)}} className="text-red-500 hover:text-red-700">
                            <FaTrashAlt fontSize={18}/>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total Items:</span>
                  <span>{cartProduct.totalQuantity}</span>
                </div>
                <div className="mb-4 border-b pb-2">
                  <p>Shipping:</p>
                  <p className="ml-2">Shipping to:{" "}
                    <span className="text-xs font-bold">{address}</span>
                  </p>
                  <button className="text-blue-500 hover:underline mt-1 ml-2" 
                  onClick={()=>setIsModalOpen(true)}>Change Address</button>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Price</span>
                  <span>{cartProduct.totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800 rounded-md" onClick={()=>navigate("/checkout")}>Proced to checkout</button>
              </div>
            </div>
            <Modal isModalOpen={isModalopen} setIsModalOpen={setIsModalOpen}>
              <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
            </Modal>
        </div>
         : 
        <div className="flex justify-center">
          <img className="w-full md:w-1/2 md:mx-auto" src={EmptyCart}/>
        </div>
      }
    </div>
  )
}

export default Cart
