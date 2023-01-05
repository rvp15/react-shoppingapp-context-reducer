import React from 'react'
import { createContext ,useReducer } from 'react'
import { productReducer,cartReducer} from './Reducers'
export const NewContext = createContext()


const NewContextProvider = ({children}) => {
  let [products,dispatchProducts] = useReducer(productReducer,[])
  let [cartItems,dispatchCart] = useReducer(cartReducer,[])
//Reducer:
// const [state,dispatchFunction] = useReducer(reducername, intialvalues)
  return (
    <NewContext.Provider value={{products,dispatchProducts,dispatchCart,cartItems}}>
      {children}
    </NewContext.Provider>
  )
}

export default NewContextProvider

