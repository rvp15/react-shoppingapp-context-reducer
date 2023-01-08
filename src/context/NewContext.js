import React from 'react'
import { createContext ,useReducer } from 'react'
import { productReducer,cartReducer,totalReducer,formReducer} from './Reducers'
export const NewContext = createContext()


const NewContextProvider = ({children}) => {
  let [products,dispatchProducts] = useReducer(productReducer,[])
  let [cartItems,dispatchCart] = useReducer(cartReducer,[])
  let[cartTotal,dispatchTotal] = useReducer(totalReducer,0)
  let [form,dispatchForm] = useReducer(formReducer,{})
console.log('cartItems',cartItems)
  return (
    <NewContext.Provider value={{products,dispatchProducts,dispatchCart,cartItems,cartTotal,dispatchTotal,formReducer,dispatchForm,form}}>
      {children}
    </NewContext.Provider>
  )
}

export default NewContextProvider

