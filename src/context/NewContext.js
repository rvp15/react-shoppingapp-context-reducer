import React from 'react'
import { createContext ,useReducer } from 'react'
import { productReducer,cartReducer,totalReducer} from './Reducers'
export const NewContext = createContext()


const NewContextProvider = ({children}) => {
  let [products,dispatchProducts] = useReducer(productReducer,[])
  let [cartItems,dispatchCart] = useReducer(cartReducer,[])
  let[cartTotal,dispatchTotal] = useReducer(totalReducer,0)

  return (
    <NewContext.Provider value={{products,dispatchProducts,dispatchCart,cartItems,cartTotal,dispatchTotal}}>
      {children}
    </NewContext.Provider>
  )
}

export default NewContextProvider

