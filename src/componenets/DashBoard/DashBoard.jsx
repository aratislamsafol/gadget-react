import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Button from "../utlis/Button";
import TabContainer from "../TabContainer/TabContainer";

export default function DashBoard() {
    const location = useLocation();
    const [tab, setTab] = useState('tab1');

    useEffect(() => {
        if (location.pathname.includes('/cart')) {
            setTab('tab1');
        } else if (location.pathname.includes('/wishlist')) {
            setTab('tab2');
        }
    }, [location.pathname]);

    return (
        <div>   
            <section className='p-4 md:p-8 bg-[#9538E2]'>
                <div className="text-center max-w-[796px] mx-auto">
                    <h2 className='font-bold text-3xl text-white'>Dashboard</h2>
                    <p className='text-white text-base my-3 md:my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <Button 
                      className={`border border-white font-semibold px-3 ${tab === 'tab1' ? 'bg-white text-[#9538E2]' : 'text-white'}`} 
                      onClick={()=>setTab('tab1')}
                    >
                      Cart
                    </Button>
                    <Button 
                      className={`border border-white font-semibold px-3 ${tab === 'tab2' ? 'bg-white text-[#9538E2]' : 'text-white'}`} 
                      onClick={()=>setTab('tab2')}
                    >
                      WishList
                    </Button>
                </div>
            </section>

            <TabContainer tab={tab}/>
        </div>
    )
}
