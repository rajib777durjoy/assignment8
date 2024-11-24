import React from 'react';
import { useLocation } from 'react-router-dom';

const Context = ({title,description}) => {
    
    return (
        <div className='w-[60%]  mx-auto '>
            <h1 className='text-4xl text-center py-2 font-medium text-white'>{title}</h1>
            <p className={`text-center my-2 text-white`}>{description}</p>
        </div>
    );
};

export default Context;