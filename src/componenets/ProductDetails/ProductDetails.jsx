import React from 'react'
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from '../utlis/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";

export default function ProductDetails() {
  const {id} = useParams();
  const allData = useLoaderData();
  const targetData = allData.find(data => data.product_id === id)
   const {product_id, product_title, product_image, price, description, Specification, availability, rating } = targetData;
  return (
    <section>
      <div className='p-4 md:p-8 bg-[#9538E2]'>
        {/* heading Section */}
          <div className="text-center max-w-[796px] mx-auto">
            <h2 className='font-bold text-3xl text-white'>Product Details</h2>
            <p className='text-white text-base my-3 md:my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
      </div>

      <div className="relative">
        {/* image Section */}
        <div className='flex justify-center'>
          {/* card */}
          <div className="card card-side bg-base-100 shadow-sm p-3 rounded-lg">
            <figure className='w-3/10'>
              <img src={product_image} alt={product_id} className='w-full h-full rounded-lg object-cover'/>
            </figure>

            <div className="card-body w-7/10">
              <h2 className="card-title text-3xl">{product_title}</h2>
              <p className='font-semibold text-xl'>Price: $ {price}</p>
              {/* badge */}
              {availability? <div className="badge badge-soft badge-success">In Stock</div> : <div className="badge badge-soft badge-error">UnAvailable</div>}
              
              <p className='text-gray-600 text-base md:text-lg'>{description}</p>
              <p className='text-black text-base md:text-lg font-bold'>Specification:</p>
              <ol className='list-decimal list-inside text-gray-600'>
                {
                  Specification.map(sp => <li key={product_id}>{sp}</li>)
                }
              </ol>
              <span className='flex gap-2 font-bold text-lg'>Rating ⭐</span>
              <Rating initialRating={rating} emptySymbol={<FaRegStar className="text-gray-400 w-5 h-5" />} fullSymbol={<FaStar className="text-yellow-400 w-5 h-5" />}/>

              <div className="flex gap-2">
              <Button className=" hover:bg-purple-800"><span className='flex gap-2'>Add To Card <PiShoppingCart className='w-5 h-5'/></span></Button>

              <Button className="rounded-full hover:bg-purple-800 flex items-center justify-center "><IoMdHeartEmpty className='w-4 h-4'/></Button>
              </div>
            </div>
          </div>

        </div>
        {/* image side color */}
        <div className='absolute inset-0 -z-10 grid h-full w-full grid-rows-3'>
          <div className="row-span-1 rounded-b-xl bg-[#9538E2]"></div>
          <div className="row-span-2 bg-gray-100"></div>
        </div>
        {/* extra */}
        <div className="row-span-2 bg-gray-100 pb-20"></div>
      </div>
     
    </section>
  )
}
