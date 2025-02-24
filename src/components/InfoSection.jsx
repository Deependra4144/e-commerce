import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa"
import { FaMoneyBill1Wave } from "react-icons/fa6"

function InfoSection() {
    const InfoItems = [
        {
            icon: <FaShippingFast className="text-3xl text-red-600"/>,
            title:'Free Shipping',
            description:'Get your orders delivered with no extra cost'
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600"/>,
            title:'Support 24/7',
            description:'We are here to assist you anytime'
        },
        {
            icon: <FaMoneyBill1Wave className="text-3xl text-red-600"/>,
            title:'100% Money Back',
            description:'Full refund if you are not satisfied'
        },
        {
            icon: <FaLock className="text-3xl text-red-600"/>,
            title:'Payment Secure',
            description:'Your payment information is safe with us'
        },
        {
            icon: <FaTag className="text-3xl text-red-600"/>,
            title:'Discount',
            description:'Enjoy the best prices on your product'
        }
    ]
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {InfoItems.map((item, i) =>{
            return (
                <div className="flex flex-col items-center space-y-2 border shadow-md rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-center" key={i}>
                    <p>{item.icon}</p>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default InfoSection
