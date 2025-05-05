import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductContext from "../utlis/ProductContext";
import { useState } from "react";

export default function Root() {
  const [cartId, setCart] = useState([]);
  const handleToCart = (id) => {
    const newCartData = [...cartId, id];
    setCart(newCartData)
  }

  const handleToWishlist = (id) => {
    console.log("WishList:", id);
  }

  return (
    <div className="mx-auto max-w-7xl regular_font px-2 sm:px-3 lg:px-0">
      <Navbar />
      <ProductContext.Provider value={{handleToCart, handleToWishlist, cartId, setCart}}>
        <Outlet />
      </ProductContext.Provider>
      <Footer />
    </div>
  )
}
