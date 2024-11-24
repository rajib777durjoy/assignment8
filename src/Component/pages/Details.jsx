import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Context from '../Context';
import { addtoCardfun } from '../utilty/addtocard';
import { GiSelfLove } from "react-icons/gi";
import { AddWishList } from '../utilty/addtocard';
import { toast } from 'react-toastify';
const Details = () => {
    const {ids}=useParams()
    const dataload=useLoaderData()
   
    const finddata=dataload.find(data=>data.product_id=== parseInt(ids))
    const{product_id:productId,product_title,product_image,category,price,description,specification,availability,rating,color}=finddata
     
    const handelClickfun=(id)=>{
        addtoCardfun(id)
        toast.success('item added to cart');
    }
    const handelwishCard=(value)=>{
      AddWishList(value)
      toast.success('Item added to wishlist',)
    }
    return (
        <div className='w-[100%] min-h-[500px]'>
 
           <div className='w-[100%] h-[300px] bg-purple-700 '>
             <Context title={'Product Details'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Context>
            </div>
            <div className=' border-2 rounded-lg w-[70%] mx-auto h-[450px] bg-slate-600 relative bottom-32'>
               <div className='w-[100%] h-[100%] flex justify-between '>
                 <div className='w-[30%] h-[100%]'>
                    <img src={product_image} alt="" className='w-[90%] mx-auto h-[50%] my-10' />
                 </div>
                  <div className='w-[70%]  text-white p-4'>
                      <h1>{product_title}</h1>
                      <p>Price:${price}</p>
                      <div className='w-[100px] h-[35px]  rounded-lg my-2 text-center text-xl text-white'>{`${availability}`}</div>
                      <p>{description}</p>
                      <div>specification:
                        {
                         specification.map(item=><li key={item.product_id} className='list-none'>1{item}</li>)   
                        }
                      </div>
                      <div>
                        <h1>Rating :</h1>
                        <div className='flex items-center '>
                      <div className="rating rating-md mx-2">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" />
                        <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star-2 bg-orange-500"
                             />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" />
                        </div>
                        <span className='p-1 border rounded-full bg-slate-200 text-black font-medium'>{rating}</span>
                        </div>
                      </div>
                      <div className='flex gap-2 my-1'>
                         <button onClick={()=>handelClickfun(productId)} className='btn'>Add To Card</button>
                          <button className='btn' onClick={()=>handelwishCard(productId)}><GiSelfLove className='text-2xl'/></button>
                      </div>
                    </div>
                </div>
               </div> 
              </div> 
    );
}

export default Details;