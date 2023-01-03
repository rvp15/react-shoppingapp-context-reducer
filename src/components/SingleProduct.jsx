import React from 'react'
// import { useContext } from 'react'
// import { NewContext } from '../context/NewContext'


export const SingleProduct = ({product}) => {
  // const {products,dispatchProducts} = useContext(NewContext)
  return (
    <div className='product-list'>
      <img className='product-image' src={product.image} alt={product.title} />
<div>{product.title}</div>
    </div>
  )
}
