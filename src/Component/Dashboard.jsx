
import { NavLink, Outlet} from 'react-router-dom';
import Card from './pages/Card';
import Context from './Context';
import { BsCart4 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { toast } from 'react-toastify';
const Dashboard = () =>{
  const addToCart=()=>{
    toast.success('clicked Add To Cart ',)
  }
  
    return (
        <div className='w-[100%] min-h-[100vh] border-2 '>
            <div className='w-[100%] h-[200px] mx-auto bg-purple-700'>
                <Context title={'Dashboard'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Context>
                <div className='w-[30%] mx-auto flex justify-between'>
                    <button onClick={()=>addToCart()} className='w-[180px] text-2xl border  text-white font-medium h-[50px] rounded-full'><NavLink to='card'className={'flex h-[100%] items-center gap-1 justify-center'}>Add to cart<BsCart4 className='text-xl'/></NavLink></button>
                    <button onClick={()=>toast.success('Clicked WishList')} className='w-[180px] text-2xl border text-white font-medium h-[50px] rounded-full'><NavLink to='wishlist' className={'flex h-[100%] items-center gap-1 justify-center'}>Wish list<GiSelfLove/></NavLink></button>
                </div>
            </div>
               <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;