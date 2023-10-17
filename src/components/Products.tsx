"use client"

import { ProductTypes } from '@/features/types'
import React from 'react'

const Products = ({product}: ProductTypes[]) => {
  return (
    <div>
        <h1>test</h1>
        {
        
            product?.map((product: ProductTypes) => {
                return <article key={product.id}>
                    <div>
                    <h2>{product.category}</h2>
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </article>
            })
        }
    </div>
  )
}

export default Products