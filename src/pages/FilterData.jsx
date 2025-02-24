import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import NoProduct from '../assets/Images/product_not_found.jpeg'
function FilterData() {
    const filterProducts = useSelector(state => state.product.filteredData)
    console.log(filterProducts)
  return (
    <div className="container mx-auto">
        {filterProducts.length > 0 ? 
            <>
            <h2 className="text-center text-2xl font-bold">Shop</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {filterProducts.map((product,i)=>{
                      return(
                        <ProductCard key={i} product={product}/>
                        )
                  })}
               </div>
            </>
            : 
            <div className="flex justify-center bg-gray-100 align-middle items-center">
                  <img src={NoProduct} className="" alt="" />
            </div>
            }
                
    </div>
  )
}

export default FilterData
