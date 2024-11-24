import React from 'react';

import Banner from './Banner';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Catagory from './pages/Catagory';

const Home = () => {
  const CategoryData=useLoaderData()
    return (
        <div className='w-[100%] min-h-[100vh] border-0'>
           <div>
           <Banner></Banner>
           </div>
           <div className='w-[100%] my-6'>
           <h1 className={`text-center text-4xl`}>Explore Cutting-Edge Gadgets</h1>
           </div>
           <div className='flex '>
              <div className='w-[15%] h-[300px] ms-2'>
                <Catagory catagorys={CategoryData}></Catagory>
              </div>
              <div className='w-[80%] mx-auto '>
                <Outlet></Outlet>
              </div>
              
            </div>
          
        </div>
    );
};

export default Home;