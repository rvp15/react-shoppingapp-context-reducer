import React from 'react'

export const SingleProduct = ({prod}) => {
   
  return (
    <div>
     <img src={prod.image} alt='image'/>
        {prod.name}
       <div> {prod.price}</div>
    </div>
  )
}
