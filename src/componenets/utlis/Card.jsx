import { Link } from "react-router-dom";
export default function Card({data}) {
  const { product_id, product_title, product_image, price } = data;
  return (
    <div className="card bg-base-100 shadow-sm">
        <figure className="p-3 rounded-lg h-[181px]">
            <img src={product_image} alt={product_title} className="rounded-lg h-full w-full object-cover"/>
        </figure>
        <div className="card-body p-2 px-4 ">
            <h2 className="card-title">{product_title}</h2>
            <p className="place-self-start">Price : {price}tk</p>
            <div className="card-actions">
            <Link to={`productdetails/${product_id}`} className="btn btn-primary rounded-3xl">View Details</Link>
            </div>
        </div>
    </div>
  )
}
