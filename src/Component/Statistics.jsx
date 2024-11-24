import React from 'react';
import Context from './Context';

const Statistics = () => {
    return (
        <div className='w-[100%] h-[400px] '>
            <div className='w-[100%] h-[200px] bg-purple-600 mx-auto  mb-4'>
               <Context title={'Statistics'} description={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Context>
            </div>
            <h2 className='text-4xl font-bold text-purple-600 w-[70%] mx-auto text-center '>No Data to Show Statistics</h2>
        </div>
    );
};

export default Statistics;