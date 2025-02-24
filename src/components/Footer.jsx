import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-4 py-8 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">e-Shop</h3>
            <p className="mt-4">You one-step fot all your needs. Shop with use and experience the best online shoping experinces.</p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="list-none space-y-2">
              <li>
                <Link className="hover:underline" to='/'>Home</Link>
              </li>
              <li>
                <Link className="hover:underline" to='/shop'>Shop</Link>
              </li>
              <li>
                <Link className="hover:underline" to='/contact'>Contact</Link>
              </li>
              <li>
                <Link className="hover:underline" to='/about'>About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Follow us</h4>
            <div className="flex space-x-4 mt-4">
              <a className="hover:text-gray-400" href="#"><FaFacebook fontSize={22}/></a>
              <a className="hover:text-gray-400" href="#"><FaInstagram fontSize={22}/></a>
              <a className="hover:text-gray-400" href="#"><FaLinkedin fontSize={22}/></a>
            </div>
            <form action="" className="flex items-center justify-center mt-8">
              <input type="text" placeholder="Your email" className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l-md"/>
              <button className="px-4 py-2 border-2 border-l-0 border-gray-600 bg-red-600 text-white rounded-r-md">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 e-Shop All rights reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a className="hover:underline" href="">Privacy Policy</a>
              <a className="hover:underline" href="">Terms & Condations</a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
