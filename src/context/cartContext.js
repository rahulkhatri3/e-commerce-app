import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContex = createContext();
const getLocalCartData= ()=>{

    let locatCartData = localStorage.getItem("RahulStore");
    // if (locatCartData ==[]){
    //     return[];
    // }else{
    //         return JSON.parse(locatCartData)
    //     }

    const parseData = JSON.parse(locatCartData)
    if (!Array.isArray(parseData)) return []
    return parseData;
    }


const intialState ={
    // cart:[],
    cart:getLocalCartData(),
    total_item: 0,
    total_price:0,
    shipping_fee:5000,

}
const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, intialState);

    const AddCart= (id,amount,product)=>{
dispatch({type:"ADD_TO_CART",payload:{id,amount,product}});

    }

    const removeItem = (id)=>{

        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }

    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREMENT", payload:id});

    }

    
    const setIncrease=(id)=>{
        dispatch({type:"SET_IECREMENT", payload:id});

    }
useEffect (()=>{
    dispatch ({type:"CART_TOTAL_ITEM"})
    dispatch ({type:"CART_TOTAL_PRICE"})

localStorage.setItem("RahulStore",JSON.stringify(state.cart))

},[state.cart])

    return <CartContex.Provider value={{...state,AddCart,removeItem,clearCart,setDecrease,setIncrease}}>{children} </CartContex.Provider>

}

const useCartContext = ()=>{

    return useContext(CartContex);
}
export {CartProvider,useCartContext};