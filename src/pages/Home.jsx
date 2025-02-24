import { Categories, topProducts } from "../assets/mockData"
import heroImage from "../assets/Images/hero-2.jpeg"
import InfoSection from "../components/InfoSection"
import CategorySection from "../components/CategorySection"
import {setProducts} from '../redux/productSlice'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import ProductCard from "../components/ProductCard"
import Shop from "./Shop"
function Home() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product)

  useEffect(()=>{
    dispatch(setProducts(topProducts))
  },[])
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 h-auto md:h-96  flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">Shop By Categories</div>
              <ul className="space-y-4 bg-gray-100 p-3 h-full">
                {Categories.map((e,i)=>{
                  return(
                    <li key={i} className="flex items-center text-sm font-medium">
                      <div className="w-2 h-2 border border-red-600 rounded-full mr-2"></div>
                      {e}
                    </li>
                  )
                })}
              </ul>
          </div>
            <div className="w-auto md:w-9/12 mt-8 md:mt-0 md:h-96 relative">
                <img src={heroImage} className="h-full w-full"/>
                <div className="absolute top-16 left-8">
                  <p className="text-gray-600 mb-4">Code with Deependra Swami</p>
                  <h2 className="text-xl md:text-3xl font-bold text-white">Welcome to e-Shop</h2>
                  <p className="text-sm md:text-xl mt-2.5 font-bold text-gray-800">Millions + Products</p>
                  <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
                </div>
            </div>
        </div>
        <InfoSection/>
        <CategorySection/>
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0,5).map((product,i)=>{
              return(
                <ProductCard key={i} product={product}/>
              )
            })}
          </div>
        </div>
        <div>
          <Shop/>
        </div>
    </div>
  )
}

export default Home
