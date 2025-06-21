import React from 'react'

const cartReducer = (state,action) => {

if (action.type==="ADD_TO_CART"){

    let {id,amount,product} = action.payload;

    let cartProduct;

    cartProduct ={
      id: id,
      name:product.name,
      amount,
      image:product.image[0].url,
      price:product.price,
      max:product.stock,
    
    };

    return {
      ...state,
      cart:[...state.cart,cartProduct]
    }
   

}


  return state;

  
}

export default cartReducer