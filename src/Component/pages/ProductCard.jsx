import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import Card from './Card';


const ProductCard = () => {
  const {pathname}=useLocation()
    const {category}=useParams()
    const ProductData=useLoaderData()
    const[productItem,setproductItem]=useState([])
    
    useEffect(()=>{
      const filterdeData=[...ProductData].filter(data=>data.category===category)
      if(category === 'All Products'){
        setproductItem(ProductData)
      }
      else if(category){
          setproductItem(filterdeData)
      }
       else if(!category){
        setproductItem(ProductData)
      }
      
     
    },[pathname])
    
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
          {
           productItem.map(product=><Card key={product.product_id} product={product} ></Card>)
          } 
        </div>
        </div>
    );
};

export default ProductCard;