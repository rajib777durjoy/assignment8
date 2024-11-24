import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

const Productlist = ({product,removeItem}) => {
    const {pathname}=useLocation()
    return (
        <div className='flex gap-4 w-[100%] justify-between my-2 border-2 bg-slate-50'>
              <div className='w-[30%] border-2 '>
              <img src={product.product_image} alt="" className='w-[100%] h-[100%] rounded-lg' />
              </div>
                <div className=''>
                    <p className='text-3xl capitalize font-semibold my-2'>category:{product.category}</p>
                    <p className='text-3xl capitalize font-semibold my-2'>product_title:{product.product_title}</p>
                    <p className='text-3xl capitalize font-semibold my-2'>Price:{product.price}</p>
                    <p className='text-3xl capitalize font-semibold my-2'>Rating:{product.rating}</p>
                </div>
                <div onClick={()=>removeItem(product.product_id)} className='mx-3 my-2'>
                    {pathname==='/dashboard/card'?<RxCross1 className='text-2xl'/>:''}
                </div>
        </div>
    );
};

export default Productlist;