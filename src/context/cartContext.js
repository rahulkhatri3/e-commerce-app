import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContex = createContext();

const intialState ={

    cart:[],
    total_amount: "",
    shipping_fee:5000,

}
const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer (reducer,intialState);

    const AddCart= (id,amount,product)=>{
dispatch({type:"ADD_TO_CART",payload:{id,amount,product}});

    }
    return <CartContex.Provider value={{...state,AddCart}}>{children} </CartContex.Provider>

}

const useCartContext = ()=>{

    return useContext(CartContex);
}
export {CartProvider,useCartContext};