import React from 'react'
import { createContext ,useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';

export const NewContext = createContext()

const NewContextProvider = ({children}) => {

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
console.log(products)
//Reducer:
// const [state,dispatch] = useReducer(reducername, intialvalues)
const [state, dispatch] = useReducer(cartReducer,{
  products: products,
  cart: []
})
  return (
    <NewContext.Provider value={{state,dispatch}}>
      {children}
    </NewContext.Provider>
  )
}

export default NewContextProvider

