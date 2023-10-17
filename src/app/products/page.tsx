

import Products from '@/components/Products';
import { ProductTypes } from '@/features/types';
import React, { useEffect, useState } from 'react'

const pageProducts =  async () => {
    
    // const [product, setProduct] = useState()
    // useEffect(()=>{

    //     const bringProducts = async () =>{

          
    //     }
    //     bringProducts();
        
    // },[])
    const getProducts = await fetch(
        `http://localhost:3000/api/products`,
        {
            method: "get",
        },
    )
 //const allProducts: ProductTypes[]= await getProducts.json()
        const products= await getProducts.json()
        console.log(products.data);
 //setProduct(products.data)
  
    //console.log(product);
    
    return (
    <div className='grid grid-cols-3 w-full bg-slate-200 p-20'> 
        <Products product={products.data}/>
    </div>
  )
}

export default pageProducts