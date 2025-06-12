import { createContext, useContext } from "react";


// createContext
// Provider
// consumer=>useContext Hook

const AppContext = createContext();
const AppProvider =({children})=>{
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