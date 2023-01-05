import React from 'react'
import {AiOutlineStar,AiFillStar}  from  'react-icons/ai'

 export const Rating = ({rating,setRating,style}) => {
  return (
   <>
    {
    [...Array(5)].map((_,i)=>(
        <span key={i} onClick={()=>setRating(i)} style={style}>{rating >= i ?
            (<AiFillStar fontSize='15px'/>) : 
              (<AiOutlineStar fontSize='15px' />)}</span>
        ))
}
</>
)}