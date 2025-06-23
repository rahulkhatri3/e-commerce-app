

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
if (action.type ==="REMOVE_ITEM"){
  let updatedCart = state.cart.filter((curElem)=>
    curElem.id !== action.payload
)
  return {
    ...state,
    cart:updatedCart,
  }
}

if(action.type ==="CLEAR_CART"){
  return{
...state,
cart:[],
  }

  }

  if(action.type==="SET_DECREMENT"){
    let updatedProduct = state.cart.map((curElem)=>{
      if (curElem.id === action.payload){
        let decAmount=curElem.amount-1;
        if (decAmount <=1){
          decAmount=1;
        }
        return{
          ...curElem,
          amount:decAmount,
        }  
      }else {
        return curElem;
      }
    })
    return {...state,cart:updatedProduct}

  }


    if(action.type==="SET_IECREMENT"){
    let updatedProduct = state.cart.map((curElem)=>{
      if (curElem.id === action.payload){
        let incAmount=curElem.amount+1;
               if (incAmount >=curElem.max){
          incAmount=curElem.max;
        }
        return{
          ...curElem,
          amount:incAmount,
        }  
      }else {
        return curElem;
      }
    })
    return {...state,cart:updatedProduct}

  }
if(action.type ==="CART_TOTAL_ITEM"){
  let updatedItem =state.cart.reduce((intialVal,curElem)=>{
let {amount} = curElem;
intialVal = intialVal+amount;
return intialVal ;

  },0)
  return{
    ...state,
     total_item:updatedItem,
  }


}

if(action.type ==="CART_TOTAL_PRICE"){

  let total_price = state.cart.reduce((intialVal,curElem)=>{
    let {price,amount}=curElem;
    intialVal=intialVal+amount*price;
    return intialVal;
  },0)
  return{
    ...state,
    total_price,
  }


}
  return state;

  
}

export default cartReducer