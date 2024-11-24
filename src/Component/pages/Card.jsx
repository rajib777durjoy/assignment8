import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Card =({product}) => {
    const {product_id,product_title,product_image,category,price,rating}=product || {}
     const navigate=useNavigate()
     const handelfun=(id)=>{
        navigate(`/details/${id}`)
        toast.success('Save to dashboard',)
     }
    return (
        <div className='border-2 rounded-lg'>
            <div className='w-[90%] h-[200px] mx-auto'>
                <img src={product_image} alt="" className='w-[100%] h-[100%]' />
            </div>
            <div className='mx-4 my-2'>
            <h1 className='text-2xl font-extrabold'>{product_title}</h1>
             <p className='text-xl'>Price:{price}</p>
             <button onClick={()=>handelfun(product_id)} className='btn'>Details</button>
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default Card;