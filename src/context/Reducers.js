export const productReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    default:
      return state;
  }
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [...state, {...action.payload,qty:1}];
    case "REMOVEFROMCART":
        let items = state.filter((item)=>item.id !== action.payload.id)
        return items
        case "ITEMQTY":
          console.log(action.payload)
       let filtered = state.filter((item)=>item.id===action.payload.id)
       console.log('filterred:' ,filtered)
       filtered[0].qty = action.payload.qty
       filtered[0].price = (filtered[0].price) * action.payload.qty
       return state
        default:
            return state;
  }
};
export const totalReducer =(state,action)=>{
  switch (action.type){
    case "CARTTOTAL":
      let total = (action.payload).reduce((acc, item) => {
        return acc + item.price;
      }, 0);
     return total
      default:
      return state
  }
}
