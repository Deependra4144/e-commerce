import { useState } from 'react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Checkout({setOrder}) {
  const navigate = useNavigate()
  const [billingToggle, setBillingToggle] = useState(false)
  const [shippingToggle, setShippingToggle] = useState(false)
  const [paymentToggle, setPaymentToggle] = useState(false)
  const [paymentMethode, setpaymentMethode] = useState('cod')
  const [shippingInfo, setShippingInfo] = useState({
    address:'',
    city:'',
    pinCode:''
  })
  const cart = useSelector(state=>state.cart)
  console.log(cart.products)

  const handleOrder = () =>{
    const newOrder = {
      products:cart.products,
      orderNumber:'122334455',
      shippingInformation:shippingInfo,
      totalPrice:cart.totalPrice
    }
     setOrder(newOrder)
     navigate('/order-confirmation')
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            
            <h3 className="text-2xl font-semibold mb-4">CheckOut</h3>
            <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-8">
                <div className="md:w-2/3">
                  <div className='border p-2 mb-6 rounded-md'>
                    <div onClick={()=>setBillingToggle(!billingToggle)} className='flex items-center justify-between cursor-pointer'>
                      <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                      {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                    <div className={`space-y-4 ${billingToggle ? "" : 'hidden'}`}>
                      <div>
                        <label htmlFor="" className='block text-gray-700'>Name</label>
                        <input type="text" name='name' placeholder='Enter your name' className='w-full px-3 py-2 border'/>
                      </div>
                      <div>
                        <label htmlFor="" className='block text-gray-700'>Email</label>
                        <input type="email" name='email' placeholder='Enter your email address' className='w-full px-3 py-2 border'/>
                      </div>
                      <div>
                        <label htmlFor="" className='block text-gray-700'>Phone</label>
                        <input type="number" name='number' placeholder='Enter your phone number' className='w-full px-3 py-2 border'/>
                      </div>
                    </div>
                  </div>  



                  <div className='border p-2 mb-6 rounded-md'>
                    <div onClick={()=>{setShippingToggle(!shippingToggle)}} className='flex items-center justify-between cursor-pointer'>
                      <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                      {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                    <div className={`space-y-4 ${shippingToggle ? "" : 'hidden'}`}>
                      <div>
                        <label htmlFor="" className='block text-gray-700'>Address</label>
                        <input value={shippingInfo.address} onChange={(e)=>setShippingInfo({...shippingInfo,address:e.target.value})} type="text" name='address' placeholder='Enter Address' className='w-full px-3 py-2 border'/>
                      </div>
                      <div>
                        <label htmlFor="" className='block text-gray-700'>City</label>
                        <input value={shippingInfo.city} onChange={(e)=>setShippingInfo({...shippingInfo,city:e.target.value})} type="email" name='city' placeholder='Enter your city name' className='w-full px-3 py-2 border'/>
                      </div>
                      <div>
                        <label htmlFor="" className='block text-gray-700'>Pin Code</label>
                        <input value={shippingInfo.pinCode} onChange={(e)=>setShippingInfo({...shippingInfo,pinCode:e.target.value})} type="number" name='pinCode' placeholder='Enter your Pin Code' className='w-full px-3 py-2 border'/>
                      </div>
                    </div>
                  </div>  

                  <div className='border p-2 mb-6 rounded-md'>
                    <div onClick={()=>{setPaymentToggle(!paymentToggle)}} className='flex items-center justify-between cursor-pointer'>
                      <h3 className='text-lg font-semibold mb-2'>Payment Methode</h3>
                      {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}
                    </div>
                    <div className={`space-y-2 ${paymentToggle ? "" : 'hidden'}`}>
                      <div className='flex gap-2'>
                        <input type="radio" name='payment' checked = {paymentMethode === 'card'}   onChange={()=>{setpaymentMethode('card')}} className='px-3'/>
                        <label htmlFor="payment" className='text-gray-700'>Debit Card</label>
                      </div>
                      {paymentMethode === 'card' && 
                        <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                          <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                          <div className='mb-4'>
                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                            <input type="text" placeholder='required' className='border p-2 w-full rounded'/>
                          </div>
                          <div className='mb-4'>
                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                            <input type="text" placeholder='Card Holder Name'className='border p-2 w-full rounded'/>
                          </div>
                          <div className='flex gap-x-2 flex-wrap'>
                            <div>
                              <label htmlFor="" className='text-gray-700 font-semibold mb-2'>Expiry Date</label>
                              <input type="date" className='border p-2 w-full rounded'/>
                            </div>
                            <div>
                              <label htmlFor="" className='text-gray-700 font-semibold mb-2'>CCV</label>
                              <input type="number" placeholder='CCV' className='border p-2 w-full rounded'/>
                            </div>
                          </div>
                        </div>
                      }
                      <div className='flex gap-2'>
                        <input type="radio" name='payment' checked = {paymentMethode === 'cod'} onChange={()=>{setpaymentMethode('cod')}}/>
                        <label htmlFor="payment" className='text-gray-700'>Cash On Delivery</label>
                      </div>
                      <p className='text-sm md:text-xl font-semibold'>{paymentMethode}</p>
                    </div>
                  </div>    
                </div>
                <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-md border">
                      <h3 className='md:text-xl font-semibold '>Order Summary</h3>
                      <div>
                          {cart.products.map(product=>(
                            <div key={product.id} className='flex justify-between'>
                              <div className='flex items-center'>
                                <img src={product.imageURL} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                <div className='ml-4'>
                                  <h4 className='text-md font-semibold'>{product.name}</h4>
                                  <p className='text-gray-600'>${product.price} * {product.quantity} </p>
                                </div>
                              </div>
                              <div className='text-gray-800'>${product.price * product.quantity}</div>
                            </div>
                          ))}
                      </div>
                      <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                          <span>Total Price : </span>
                          <span className='font-semibold'>{cart.totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                      <button onClick={handleOrder} className='w-full bg-red-600 mt-6 text-white py-1 md:text-lg font-semibold rounded-sm'>Place Order</button>
                </div>
            </div>
    </div>
                
            
  )
}

export default Checkout
