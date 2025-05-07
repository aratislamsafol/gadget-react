import { useContext, useEffect, useState } from "react"
import { useLoaderData, useLocation } from "react-router-dom";
import Button from "../utlis/Button";
import TabContainer from "../TabContainer/TabContainer";
import { removeFromStoreList } from "../utlis/localStorage";
import ProductContext from "../utlis/ProductContext";
import Modals from "../utlis/Modals";

export default function DashBoard() {
    const location = useLocation();
    const [tab, setTab] = useState('tab1');
    const { cartId, setCart, wishlistItems, setWishlistItems } = useContext(ProductContext);
    const [sortedCartItems, setSortedCartItems] = useState([]);
    const datum = useLoaderData();

    useEffect(() => {
        if (location.pathname.includes('/cart')) {
            setTab('tab1');
        } else if (location.pathname.includes('/wishlist')) {
            setTab('tab2');
        }
    }, [location.pathname]);

    useEffect(()=>{
        const cartItem = datum.filter(data => cartId.includes(data.product_id));
        setSortedCartItems(cartItem);
    },[datum, cartId])

    const handleSortByPrice = () => {
        const sotedData = [...sortedCartItems].sort((a, b)=> b.price - a.price)
        setSortedCartItems(sotedData);
    }
   
    const removeProduct = (id) => {
        const newCart = [...cartId].filter(data => data !== id)
        setCart(newCart);
    }

    const handleToremoveWishlist = (id) => {
        const newWishlist = [...wishlistItems].filter(data => data.product_id !== id)
        setWishlistItems(newWishlist);
        removeFromStoreList(id);
    }

    const removeCartAll = () => {
        setCart([]);
    }

    const totalPrice = () => {
        let total = sortedCartItems.reduce((acc, product) => acc + product.price, 0);
        console.log(total);
        return total.toFixed(2); 
    };

    return (
        <div>   
            <section className='p-4 md:p-8 bg-[#9538E2]'>
                <div className="text-center max-w-[796px] mx-auto">
                    <h2 className='font-bold text-3xl text-white'>Dashboard</h2>
                    <p className='text-white text-base my-3 md:my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <Button 
                      className={`border border-white font-semibold px-3 ${tab === 'tab1' ? 'bg-white text-[#9538E2]' : 'text-white'}`} 
                      onClick={()=>setTab('tab1')}
                    >
                      Cart
                    </Button>
                    <Button 
                      className={`border border-white font-semibold px-3 ${tab === 'tab2' ? 'bg-white text-[#9538E2]' : 'text-white'}`} 
                      onClick={()=>setTab('tab2')}
                    >
                      WishList
                    </Button>
                </div>
            </section>
            {cartId.length > 0 &&
                <div className="mx-auto p-2 md:p-2 lg:p-4 w-full md:w-3/4 flex justify-between items-center">
                    <h2 className="font-bold text-xl">Cart</h2>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-xl">Total cost: 999.99</h2>
                        <Button onClick={handleSortByPrice} className="text-white" style={{ background: 'white', border: '1px solid #9538E2', color: '#9538E2' }}>Sort By Price</Button>
                        <Button onClick={()=>document.getElementById('my_modal_1').showModal()} className="text-white">Purchase</Button>
                    </div>
                </div>
            }
            
            <TabContainer cartItem={sortedCartItems} handleToremoveWishlist={handleToremoveWishlist} removeProduct={removeProduct} tab={tab} cartId={cartId} wishlistItems={wishlistItems}/>
            <Modals removeAll={removeCartAll} total={totalPrice()}/>
        </div>
    )
}
