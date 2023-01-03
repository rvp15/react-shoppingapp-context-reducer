

export const productReducer = (state,action) =>{
switch(action.type){
case 'UPDATE':
    console.log(action.payload)
    return action.payload

    default:
    return state
}
}

