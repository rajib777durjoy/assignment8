import React from 'react';

const Delivary = () => {
    return (
        <div className='w-[90%] h-[500px] flex items-center justify-around mx-auto border-2 bg-purple-600'>
            <div>
            <h1 className='text-2xl text-white'>Quick Track Your Product</h1>
            <form action="">
                <li className='w-[400px] h-[40px] list-none my-2  rounded-lg'><input className='w-[100%] px-2 capitalize rounded-lg h-[100%] my-2' type="text" name='text' placeholder='Product Name' /></li> 
                <li className='w-[400px] h-[40px] list-none my-2  rounded-lg'><input className='w-[100%] px-2 capitalize rounded-lg h-[100%] my-2' type='email' name='email' placeholder='email'/></li>
                <li className='w-[400px] h-[40px] list-none my-2  rounded-lg'><input className='w-[100%] px-2 capitalize rounded-lg h-[100%] my-2' type="password" name='password' placeholder='your pin' /></li>
                <button type='submit' className='btn mt-2'>Submit</button>
            </form>
            </div> 
            <div>
                <img src="../delivery.jpg" alt="" />
            </div>
        </div>
    );
};

export default Delivary;