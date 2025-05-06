import { useContext } from "react";
import ProductContext from "../utlis/ProductContext";
import { useLoaderData } from "react-router-dom";
import HorizontalCard from "../utlis/HorizontalCard";

export default function TabContainer({tab}) {
    const { cartId, setCart } = useContext(ProductContext);
    const datum = useLoaderData();
    const cartItem = datum.filter(data => cartId.includes(data.product_id))
    
    const removeProduct = (id) => {
        const newCart = [...cartId].filter(data => data !== id)
        setCart(newCart);
    }

    console.log(cartId)

    return (
        <div>
            { tab === 'tab1' && cartId.length> 0 ? 
                cartItem.map(data=> 
                <div key={data.product_id} className="card bg-base-100 w-full shadow-sm">
                    {/* card */}
                    <HorizontalCard imgSrc={data.product_image} imgClass="w-30 aspect-video object-cover rounded-lg" title={data.product_title} cardDescription={data.description} price={data.price} wrapperClass="shadow-lg rounded-xl flex items-center w-full md:w-3/4 mx-auto gap-2 sm-gap-3 md:gap-4 p-2" onClick={()=>removeProduct(data.product_id)} />
                </div>
            ) : <div>Noting To Shows</div> }
            {tab === 'tab2' && <div>Tab2 Active</div>}
        </div>
    )
}
