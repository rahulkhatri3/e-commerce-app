import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext =createContext();

const intialState = {
    filter_products: [],
    all_products:[],
    grid_view: true,


}


export const FilterContextProvider =({children})=>{
    const {products} = useProductContext();

    const [state,dispatch] = useReducer(reducer,intialState);

    const setGridView =()=>{
return dispatch({type: "SET_GRID_VIEW"});
    };


    useEffect (()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload:products})
    },[products]);


    return(
        <FilterContext.Provider value={{...state, setGridView}}>
            {children}


        </FilterContext.Provider>
    )
}

export const useFilterContext= ()=>{
return useContext(FilterContext)

} 