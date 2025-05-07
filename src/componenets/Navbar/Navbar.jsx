import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { PiShoppingCart } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductContext from '../utlis/ProductContext';


export default function Navbar({ location }) {
    const { cartId, wishlistItems } = useContext(ProductContext);
    const isHome = location.pathname === "/";


    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
                `${isActive ? (isHome ? "isHomeActive" : "active") : ""} ${isHome ? "text-white" : "text-gray-700"} font-medium text-base`}>Home</NavLink></li>
        <li><NavLink to="products" className={`${({ isActive }) => isActive && "active"}  ${isHome? "text-white": 'text-gray-700'} font-medium text-base text-gray-700`}>Statistics</NavLink></li>
        <li><NavLink to="dashboard" className={`${({ isActive }) => isActive && "active"} ${isHome? "text-white": 'text-gray-700'} font-medium text-base`}>Dashboard</NavLink></li>
    </>

    return (
        <div className={`navbar ${isHome ? 'bg-[#9538E2] text-white': 'bg-base-100 text-black'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className={({ isActive }) =>
                    `font-bold text-xl ${isActive ? "text-black" : "text-black"} ${isHome && 'text-white'}`
                }>Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">

                <Link to="dashboard/cart" className='relative p-2 rounded-full border border-gray-300'>
                    <PiShoppingCart className='w-5 h-5' />
                    {cartId.length > 0 &&
                        <div className='absolute -right-2 -top-2 w-6 h-6'>
                            <p className='flex items-center justify-center rounded-full bg-purple-400 text-white text-xs w-full h-full'>{cartId.length}</p>
                        </div>
                    }
                </Link>

                <Link to="dashboard/wishlist" className='relative p-2 rounded-full border border-gray-300'>
                    <IoMdHeartEmpty className='w-5 h-5' />
                    {wishlistItems.length > 0 &&
                        <div className='absolute -right-2 -top-2 w-6 h-6'>
                            <p className='flex items-center justify-center rounded-full bg-purple-400 text-white text-xs w-full h-full'>{wishlistItems.length}</p>
                        </div>
                    }

                </Link>
            </div>
        </div>
    )
}
