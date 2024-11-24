import React from 'react';

const Footer = () => {
  return (
    <footer className=" h-[350px] mt-4">
      <div className='w-[50%] mx-auto'>
        <h1 className='text-4xl text-center font-semibold'>Gadget Heaven</h1>
        <p className='text-center text-gray-500 font-medium my-4'>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr className='w-[90%] mx-auto'/>
     <div className='w-[90%] mx-auto h-[300px] flex justify-around items-center'>
        <nav>
          <h2 className='text-2xl font-bold'>Services</h2>
          <p className='my-1 text-gray-500'>Product Support</p>
          <p className='my-1 text-gray-500'>Order Tracking</p>
          <p className='my-1 text-gray-500'>Shipping & Delivery</p>
          <p className='my-1 text-gray-500'>Returns</p>
        </nav>
        <nav>
           <h2 className='text-2xl font-bold'>Company </h2>
            <p className='my-1 text-gray-500'>About Us</p>
            <p className='my-1 text-gray-500'>Careers</p>
            <p className='my-1 text-gray-500'>Contact</p>           
        </nav>
        <nav>
          <h2 className='text-2xl font-bold'>Legal</h2>
            <p className='my-1 text-gray-500'>Terms of Service</p>
            <p className='my-1 text-gray-500'>Privacy Policy</p>
            <p className='my-1 text-gray-500'>Cookie Policy</p>
        </nav>
     </div>
  </footer>
  );
};

export default Footer;