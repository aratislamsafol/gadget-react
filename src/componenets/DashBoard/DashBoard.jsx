import { useState } from "react"
import Button from "../utlis/Button";
import TabContainer from "../TabContainer/TabContainer";

export default function DashBoard() {
    const [tab, setTab] = useState('tab1');
    
    return (
        <div>   
            <section className='p-4 md:p-8 bg-[#9538E2]'>
                {/* heading Section */}
                <div className="text-center max-w-[796px] mx-auto">
                    <h2 className='font-bold text-3xl text-white'>Dashboard</h2>
                    <p className='text-white text-base my-3 md:my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <Button className="border border-white bg-white font-semibold px-3" style={{color:'#9538E2'}} onClick={()=>setTab('tab1')}>Cart</Button>
                    <Button className="border border-white font-semibold" onClick={()=>setTab('tab2')}>WishList</Button>
                </div>
            </section>

            <TabContainer tab={tab}/>

        </div>

    )
}
