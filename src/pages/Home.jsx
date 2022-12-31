import React from 'react'
import { useContext } from 'react'
import Filters from '../components/Filters'
import { SingleProduct } from '../components/SingleProduct'
import { NewContext } from '../context/NewContext'

const Home = () => {
// const {state} = useContext(NewContext)

const {state: {products}} = useContext(NewContext)
    console.log(products)
  return (
    <div className='home'>
      <Filters/>
       <div className="product-Container">
        {products.map((product)=>{
        return  <SingleProduct prod={product} key={product.id}/>
        })}
        </div>   
    </div>
  )
}

export default Home