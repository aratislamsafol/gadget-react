import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { PiShoppingCart } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";


export default function Navbar() {
    const links = <>
        <li><NavLink to="/" className="font-medium text-base text-gray-700">Home</NavLink></li>
        <li><a className="font-medium text-base text-gray-700">Statistics</a></li>
        <li><a className="font-medium text-base text-gray-700">Dashboard</a></li>
    </>


  return (
    <div className="navbar bg-base-100 ">
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
            <NavLink to="/" className="font-bold text-xl">Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="navbar-end gap-4"> 
            <Link to="" className='p-2 rounded-full border border-gray-300'><PiShoppingCart className='w-5 h-5'/></Link>
            <Link to="" className='p-2 rounded-full border border-gray-300'><IoMdHeartEmpty className='w-5 h-5'/></Link>
        </div>
    </div>
  )
}
