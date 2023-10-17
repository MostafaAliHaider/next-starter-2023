"use client"

import Products from '@/components/Products';
import { ProductTypes } from '@/features/types';
import React, { useEffect, useState } from 'react'

const pageProducts =  () => {
    
    const [product, setProduct] = useState()
    useEffect(()=>{

        const bringProducts = async () =>{

          
             const getProducts = await fetch(
            `api/products`,
            {
                method: "get",
            },
          )
          //const allProducts: ProductTypes[]= await getProducts.json()
          const products= await getProducts.json()
          console.log(products);
          setProduct(products.data)
        }
        bringProducts();

    },[])
  
    console.log(product);
    
    return (
    <div> 
        <Products product={product}/>
       
    </div>
  )
}

export default pageProducts