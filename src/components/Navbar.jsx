import { useState } from "react"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { setSearchTerm } from "../redux/productSlice"
import Modal from './Modal'
import Login from "./Login"
import Register from "./Register"
function Navbar() {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search,setSearch] = useState()
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  const products = useSelector(state=>state.cart.products)
  const navigate = useNavigate()
  const moveToCart = () =>{
    navigate('/cart')
  }

  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
              <input className="rounded-md w-full border py-2 px-4" type="text" placeholder="Search product here" onChange={(e)=>setSearch(e.target.value)}/>
              <FaSearch className="absolute top-3 right-3 text-red-500"/>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" onClick={moveToCart}/>
              <span className="grid place-content-center text-white absolute bottom-3 left-3 bg-red-500 text-sm h-5 w-5 rounded-full">{products.length > 0 ? products.length : 0}</span>
          </Link>
          <button className="hidden md:block" onClick={()=>setisModalOpen(true)}>Login | Register</button>
          <button className="block md:hidden">
            <FaUser/>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4">

        <NavLink to="/" 
          className={({isActive})=> isActive ? 'text-xl font-semibold underline text-red-500':'black'}>
            Home
        </NavLink>
        <NavLink to="/shop"
          className={({isActive})=> isActive ? 'text-xl font-semibold underline text-red-500':'black'}>
            Shop
        </NavLink>
        <NavLink to="/contact" 
          className={({isActive})=> isActive ? 'text-xl font-semibold underline text-red-500':'black'}>
            Contact
        </NavLink>
        <NavLink to="/about" 
          className={({isActive})=> isActive ? 'text-xl font-semibold underline text-red-500':'black'}>
            About
        </NavLink>

      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setisModalOpen}>
        {isLogin ? <Login setIsLogin={setIsLogin} setIsModalOpen={setisModalOpen}/>:<Register setIsLogin={setIsLogin} setIsModalOpen={setisModalOpen}/>}
      </Modal>
    </nav>
  )
}

export default Navbar
