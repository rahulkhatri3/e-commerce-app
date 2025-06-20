import React from 'react'

const cartReducer = (state,action) => {

if (action.type==="ADD_TO_CART"){

    let {id,amount,product} = action.payload;
    console.log("🚀 ~ cartReducer ~ prod̥uct:", product)

}


  return state;

  
}

export default cartReducer