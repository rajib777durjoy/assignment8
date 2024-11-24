import React from 'react';
import { useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
const DetailsCard =({current,removeTowishlist}) => {
    const {pathname}=useLocation()
    
    return (
        <div className='flex gap-4 w-[100%] justify-between my-2 border-2 bg-slate-50'>
            <div className='w-[30%] border-2 '>
              <img src={current.product_image} alt="" className='w-[100%] h-[100%] rounded-lg' />
              </div>
                <div className=''>
                    <p className='text-3xl capitalize font-semibold my-2'>category:{current.category}</p>
                    <p className='text-3xl capitalize font-semibold my-2'>product_title:{current.product_title}</p>
                    <p className='text-3xl capitalize font-semibold my-2'>Price:{current.price}</p>
                    <p className='text-3xl capitalize font-semibold my-2'>Rating:{current.rating}</p>
                    <button className='btn'>Add to cart</button>
                </div>
                <div onClick={()=>removeTowishlist(current.product_id)}  className='mx-3 my-2'>
                    {pathname==='/dashboard/wishlist'?<RxCross1 className='text-2xl'/>:''}
                </div>
        </div>
    );
};

export default DetailsCard;