import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/ProductReducer";


// createContext
// Provider
// consumer=>useContext Hook

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const intialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct:{},

}


const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, intialState)



    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);

            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
    
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getSingleProduct = async (url) => {
                dispatch({ type: "SET_SINGLE_LOADING" });
        
        try {
            const res = await axios.get(url);

            const singleProduct = await res.data;
               dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            
               dispatch({ type: "SINGLE_ERROR" })
        }
    }
        

    useEffect(() => {
        
        getProducts(API)
    }, []);
    return (
        <AppContext.Provider value={{ ...state,getSingleProduct }}>
            {children}
        </AppContext.Provider>

    )
}


// custom hooks

const useProductContext =()=>{
    return useContext (AppContext);
};

export {AppProvider, AppContext,useProductContext} ;