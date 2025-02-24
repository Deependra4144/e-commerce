import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import { Toaster } from "react-hot-toast"
import Cart from "./pages/Cart"
import DetailPage from "./pages/DetailPage"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import OrderConfirmation from "./pages/Order-confirmation"
import FilterData from "./pages/FilterData"

function App() {
  const [order, setOrder] = useState({})

  return (
    <>
    <BrowserRouter>
    <Toaster/>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/filter-data" element={<FilterData/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/detailPage" element={<DetailPage/>}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation order={order}/>}></Route>
      </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
