import { Link } from "react-router-dom"
import Card from "../utlis/Card";

export default function Products({datum}) {
  return (
    <div>
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:mt-4">Explore Cutting-Edge Gadgets</h3>
        <div className="md:grid md:grid-cols-12 my-10 text-center md:gap-6">
            {/* sideBar */}
            <div className="col-span-8 md:col-span-2">
              <div className="flex md:flex-col flex-wrap justify-center gap-3 md:gap-3 mt-4 md:mt-0 md:shadow-md p-3 rounded-lg ">
                <div className="hover:text-white hover:bg-[#9538E2] rounded-2xl px-2 md:rounded-4xl bg-gray-100">
                  <Link to="" className="block w-full p-2">All Product</Link>
                </div>
                <div className="hover:text-white hover:bg-[#9538E2] rounded-2xl px-2 md:rounded-4xl bg-gray-100">
                  <Link to="" className="block w-full p-2">Laptops</Link>
                </div>
                <div>
                  <p>Phones</p>
                </div>
                <div>
                  <p>Accessories</p>
                </div>
                <div>
                  <p>Smart Watches</p>
                </div>
                <div>
                  <p>MacBook</p>
                </div>
                <div>
                  <p>Iphone</p>
                </div>
              </div>
              
            </div>
            {/* main Content */}
            <div className="col-span-8 md:col-span-10 shadow-md p-3">
                <div className="grid grid-cols-1 md:grid cols-2 lg:grid-cols-3 gap-5">
                  {
                    datum.map(data => <Card key={data.product_id} data={data}/>)
                  }
                </div>
            </div>
        </div>
    </div>
  )
}
