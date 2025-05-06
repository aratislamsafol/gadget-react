import { IoIosCloseCircleOutline } from "react-icons/io";
export default function HorizontalCard({ imgSrc, wrapperClass, imgClass, title, cardDescription, price, onClick }) {
  return (
    <div className={`p-2 md:p-2 lg:p-3`}>
        <div className={`${wrapperClass}`}>
            <figure>
                <img src={imgSrc} className={imgClass} alt="" />
            </figure>
            {/* card Body */}
            <div className="w-full flex justify-between">
                <div>
                    <h2 className="font-semibold text-lg md:text-xl">{title}</h2>
                    <p className="text-base text-gray-600">{cardDescription}</p>
                    <h5 className="font-semibold text-lg">Price : $ {price}</h5>
                </div>

                <div onClick={onClick}><IoIosCloseCircleOutline className="text-3xl text-red-400 cursor-pointer"/></div>
            </div>
        </div>
    </div>
  )
}
