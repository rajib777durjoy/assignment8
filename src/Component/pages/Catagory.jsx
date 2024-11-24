import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagory = ({catagorys}) => {
    return (
        <div>
            {
             catagorys.map(category=><li className='list-none text-center my-4 text-2xl border w-[65%] '><NavLink to={`/category/${category.category}`} className={({isActive})=>` ${isActive?'bg-slate-400':"hover:bg-slate-400"}`}>{category.category}</NavLink></li>)
            }
        </div>
    );
};

export default Catagory;