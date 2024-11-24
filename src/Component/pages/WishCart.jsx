import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { wishList } from '../utilty/addtocard';
import DetailsCard from './DetailsCard';
import { toast } from 'react-toastify';


const WishCart = () => {
    const loadData=useLoaderData()
    const [addData,setData]=useState([])
    useEffect(()=>{
       const listfun=wishList()
       const numConvert=listfun.map(id=>parseInt(id))
       const wishProduct=loadData.filter(id=>numConvert.includes(id.product_id))
       setData(wishProduct)
    },[])
    const removeTowishlist=(id)=>{
         // remove to wishcart list //
       const removeToWishCart= wishList();
       const removesProduct=removeToWishCart.filter(item=>item != id)
       setData(removesProduct)
       localStorage.setItem("wishProduct",JSON.stringify(removesProduct))
       toast.success('Remove Successful',)
    }
    
    return (
        <div>
            
           <div className='w-[90%] mx-auto'>
           <div className='text-2xl font-medium'>Wish List</div>
            {
             addData.map((item,idx)=><DetailsCard   current={item} removeTowishlist={removeTowishlist}></DetailsCard>) 
             }
            </div>
        </div>
    );
};

export default WishCart;