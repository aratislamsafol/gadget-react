import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center py-1 sm:py-2 md:py-4 z-2">
      <div className='border-b border-gray-300 p-3 sm:p-4 md:p-5 xl:p-6 lg:p-7'>
        <h2 className='font-bold text-3xl'>Gadget Heaven</h2>
        <h4 className='text-base font-medium text-gray-600'>Leading the way in cutting-edge technology and innovation.</h4>
      </div>
      <div className='footer sm:footer-horizontal place-items-start md:place-items-center py-3 sm:py-4 md:py-5 xl:py-6 lg:py-7'>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      
    </footer>
  )
}
