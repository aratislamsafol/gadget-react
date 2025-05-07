import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductContext from "../utlis/ProductContext";
import { useEffect, useState } from "react";
import { getStoreList } from "../utlis/localStorage";
import { toast, ToastContainer } from 'react-toastify';

export default function Root() {
  const datum = useLoaderData();
  const [cartId, setCart] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const location = useLocation();
  

  useEffect(()=>{
    const getData = getStoreList();
    const checkData = datum.filter(data => getData.includes(data.product_id));
    setWishlistItems(checkData);
},[datum]);

const handleToCart = (id) => {
  if (!cartId.some(item => item === id)) {
    toast('Item Added to Card');
    setCart([...cartId, id]);
  }
};

  return (
    <div className="mx-auto max-w-7xl regular_font px-2 sm:px-3 lg:px-0">
      <ToastContainer />
      <ProductContext.Provider value={{handleToCart, cartId, setCart, wishlistItems, setWishlistItems}}>
        <Navbar location={location} />
        <Outlet />
      </ProductContext.Provider>
      <Footer />
    </div>
  )
}
