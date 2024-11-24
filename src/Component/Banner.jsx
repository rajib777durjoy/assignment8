import React from 'react';
import Context from './Context';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
   <div className='h-[600px]'>
    <div className='bg-purple-600 w-[100%] h-[450px] mx-auto '>
      <div className='w-[80%] mx-auto'>
         <Context title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Context>
      </div>
      <div className='w-[120px] mx-auto py-2'>
      <button className='border-2 w-[100%] font-bold h-[50px] rounded-full bg-gray-200'><NavLink >Show Now</NavLink></button>
      </div>
      <div className='w-[65%] border-2 rounded-t-xl border-b-0 mx-auto h-[220px] mt-1 bg-purple-400'>
      </div>
       <div className='w-[62%] mx-auto h-[350px] relative -top-48 left-0 right-0 '>
        <img src="../banner.jpg" alt="" className='w-[100%] h-[100%] rounded-xl object-fill'/>
       </div>
    </div>
    </div>
  );
};

export default Banner;