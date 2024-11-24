import React, { useState,useEffect } from 'react';
import { addtoCardfun, gettoCardfun, wishList } from '../utilty/addtocard';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaSortNumericUpAlt } from "react-icons/fa";
import Card from './Card';
import Productlist from './Productlist';
const CardShow = () => {
    
    const fetchData=useLoaderData()
    const [storedata,setStoreData]=useState([])
    const [count,setcount]=useState(0)
    useEffect(()=>{
              const getdata=gettoCardfun()
              const products=getdata.map(p=>parseInt(p))
              const filters=[...fetchData].filter(item=>products.includes(item.product_id)) 
              setStoreData(filters)
            
        // set to total cost //
            let cound=0
           const price=filters.map(p=>p.price)
            const reples=price.filter(p=>cound+=p)
            setcount(cound)
    },[])
 
    const handelSortPrice=()=>{
         const sortByPrice=[...storedata].sort((a,b)=>b.price-a.price);
        setStoreData(sortByPrice)
    }
    const removeItem=(itemId)=>{
       const removeToLoacal=gettoCardfun()
       const removeId=removeToLoacal.filter(id=>id!=itemId)
       setStoreData(removeId)
       localStorage.setItem('product',JSON.stringify(removeId))

    }
    
    const AllClose=()=>{
       localStorage.removeItem('product') 
       document.getElementById('my_modal_1').showModal()
    }
  
    return (
       
        <div className='w-[100%] h-[100%] mx-auto bg-slate-100'>
            <div className='w-[90%] mx-auto h-[70px] flex justify-between items-center  '>
                  <div className='text-xl'>Cart</div>
                 <div className='flex gap-4'>
                   <p className='text-2xl font-bold min-w-[150px] h-[50px] leading-10'>Total cost:{count}</p>
                   <div className='flex items-center w-[160px] border-2 border-violet-500
                   rounded-full text-xl h-[50px] px-2 text-purple-600' onClick={()=>handelSortPrice()}>Sort by Price<FaSortNumericUpAlt className='text-xl '/></div>
                   <button onClick={()=>AllClose()} className='w-[150px] h-[50px] border-2
                    rounded-full text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>Purchase</button>

                 </div>
                 {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    {/* <h3 className="font-bold text-lg"></h3> */}
                    <div className='w-[30%] mx-auto'>
                    <img src="../Group.png" alt="" className='w-[80%]'/>
                    </div>
                   
                    <p className="py-4 text-center text-4xl font-extrabold">Payment Successful</p>
                    <hr />
                    <div className='w-[50%] mx-auto'>
                    <h3 className='text-center text-xl '>Thanks for purchasing.</h3>
                    <h3 className='text-center text-xl'>Total:{count}</h3>
                    </div>
                    <div className=" w-[90%] border-2 mx-auto my-2 rounded-full">
                    <form method="dialog ">
                        {/* if there is a button in form, it will close the modal */}
                        <button  className="btn rounded-full w-[100%] mx-auto text-2xl font-bold">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
            <div className='w-[90%] mx-auto'>
            {
             storedata.map((item,ind)=><Productlist key={ind} product={item} removeItem={removeItem}></Productlist>) 
             }
            </div>
            
        </div>
    );
};

export default CardShow;