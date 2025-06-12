import { createContext, useContext, useEffect } from "react";
import axios from "axios";



// createContext
// Provider
// consumer=>useContext Hook

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const AppProvider =({children})=>{
    const getProducts = async (url)=>{
     const res = await axios.get(url);
        const prod̥ucts = await res.data;
        console.log("🚀 ~ getProducts ~ prod̥ucts:", prod̥ucts)
    
       
    }



    useEffect(()=>{
        getProducts(API)
    },[]);
    return (
<AppContext.Provider value={{myName: "Rahul Khatri"}}>
    {children}
</AppContext.Provider>

    )
}

// custom hooks

const useProductContext =()=>{
    return useContext (AppContext);
};

export {AppProvider, AppContext,useProductContext} ;