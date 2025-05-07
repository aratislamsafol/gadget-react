import Card from "../utlis/Card";
import { useEffect, useState } from "react";

export default function Products({datum}) {
  const [category, setCategory] = useState([]);
  const [catDataShow, setCatDataShow] = useState(datum);
  const [activeCategory, setActiveCategory] = useState('All Data');

  useEffect(() => {
    const allCategories = datum.map(data=> data.category);
    const uniqueData = allCategories.reduce((acc, currentData)=> {
      if(!acc.includes(currentData)) {
        acc.push(currentData);
      }
      return acc;
    },[])
       
    uniqueData.unshift("All Data");
    setCategory(uniqueData);
  }, [datum]);

  useEffect(()=>{
    setCatDataShow(datum);
  },[datum])

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    const setData = [];
    if(cat === 'All Data') {
      datum.map(data=>setData.push(data))
    }
    datum.filter(data=> {
      if(data.category === cat) {
        setData.push(data);
      }
    });
    setCatDataShow(setData)
  }
  return (
    <div className="px-3 md:px-6 lg:px-10">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:mt-4">Explore Cutting-Edge Gadgets</h3>
        <div className="md:grid md:grid-cols-12 my-10 text-center md:gap-6">
            {/* sideBar */}
            <div className="col-span-8 md:col-span-2">
              <div className="flex md:flex-col flex-wrap justify-center gap-3 md:gap-3 mt-4 md:mt-0 md:shadow-md p-3 rounded-lg ">
                {
                  category.map(data => <div key={data}
                    className={`hover:text-white hover:bg-[#9538E2] rounded-2xl px-2 md:rounded-4xl ${
                      activeCategory === data ? "bg-[#9538E2] text-white" : "bg-gray-100"
                    }`}>
                    <button type="button" onClick={()=>handleCategory(data)} className={`${({ isActive }) => isActive && "active"} block w-full p-2 cursor-pointer`}>{data}</button>
                  </div>)
                }
              </div>
              
            </div>
            {/* main Content */}
            <div className="col-span-8 md:col-span-10 shadow-md p-3">
                <div className="grid grid-cols-1 md:grid cols-2 lg:grid-cols-3 gap-5">
                  {
                    category.length > 0 ?
                    catDataShow.map(data => <Card data ={data} />)
                    : "No Data & Category Here" 
                  }
                </div>
            </div>
        </div>
    </div>
  )
}
