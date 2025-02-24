import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"

function Shop() {
  let products = useSelector(state=>state.product)
  return (
        <div className="container mx-auto">
            <h2 className="text-center text-2xl font-bold">Shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {products.products.map((product,i)=>{
                  return(
                    <ProductCard key={i} product={product}/>
                    )
              })}
           </div>
        </div>
       )
}

export default Shop
