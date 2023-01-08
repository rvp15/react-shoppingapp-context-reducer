import { act } from "react-dom/test-utils";

export const productReducer = (state, action) => {
  switch (action.type) {
    case "ALLPRODUCT":
     return action.payload;
     
    default:
      return state;
  }
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [
        ...state,
        { ...action.payload, qty: 1, totalPrice: action.payload.price },
      ];
    case "REMOVEFROMCART":
      let items = state.filter((item) => item.id !== action.payload.id);
      return items;
    case "ITEMQTY":
      console.log(action.payload);
      let filtered = state.filter((item) => item.id === action.payload.id);
      console.log("filterred:", filtered);
      filtered[0].qty = action.payload.qty;
      filtered[0].totalPrice = filtered[0].price * action.payload.qty;
      return [...state];
    default:
      return state;
  }
};
export const totalReducer = (state, action) => {
  switch (action.type) {
    case "CARTTOTAL":
      let total = action.payload.reduce((acc, item) => {
        return acc + item.totalPrice;
      }, 0);
      return total;
    default:
      return state;
  }
};

export const formReducer =(state,action)=>{
  switch(action.type){
    case  "UPDATEFILTER" :
      return action.payload
  }
}