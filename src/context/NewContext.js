import React from 'react'
import { createContext ,useReducer } from 'react'
import { productReducer} from './Reducers'
export const NewContext = createContext()


const NewContextProvider = ({children}) => {
  let [products,dispatchProducts] = useReducer(productReducer,[])
//Reducer:
// const [state,dispatchFunction] = useReducer(reducername, intialvalues)
  return (
    <NewContext.Provider value={{products,dispatchProducts}}>
      {children}
    </NewContext.Provider>
  )
}

export default NewContextProvider

