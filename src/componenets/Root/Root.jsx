import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductContext from "../utlis/ProductContext";
import { useEffect, useState } from "react";
import { getStoreList } from "../utlis/localStorage";

export default function Root() {
  const datum = useLoaderData();
  const [cartId, setCart] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(()=>{
    const getData = getStoreList();
    const checkData = datum.filter(data => getData.includes(data.product_id));
    setWishlistItems(checkData);
},[datum]);

  const handleToCart = (id) => {
  const newCartData = [...cartId, id];
    setCart(newCartData)
  }

  return (
    <div className="mx-auto max-w-7xl regular_font px-2 sm:px-3 lg:px-0">
      <ProductContext.Provider value={{handleToCart, cartId, setCart, wishlistItems, setWishlistItems}}>
        <Navbar />
        <Outlet />
      </ProductContext.Provider>
      <Footer />
    </div>
  )
}
