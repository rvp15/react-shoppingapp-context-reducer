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
      console.log(action.payload);
      return [...state, action.payload];
    case "REMOVEFROMCART":
        let items = state.filter((item)=>item.id !== action.payload.id)
        return items
        default:
            return state;
  }
};
export const totalReducer =(state,action)=>{
  switch (action.type){
    case "CARTTOTAL":
      console.log(action.payload)
      let total = (action.payload).reduce((acc, item) => {
        return acc + item.price;
      }, 0);
     return total
      default:
      return state
  }
}
