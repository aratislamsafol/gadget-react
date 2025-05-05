import { useContext } from "react";
import ProductContext from "../utlis/ProductContext";
import { useLoaderData } from "react-router-dom";

export default function TabContainer({tab}) {
    const { cartId, setCart } = useContext(ProductContext);
    const datum = useLoaderData();
    const cartItem = datum.filter(data => cartId.includes(data.product_id))
        // console.log(cartItem)
    return (
        <div>
            {cartItem.map(data=>
                tab === 'tab1' ? 
                <div key={data.product_id} className="card bg-base-100 w-full shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
                : 
                <div key={data.product_id}>Tab2 Active</div>
            )}
        </div>
    )
}
