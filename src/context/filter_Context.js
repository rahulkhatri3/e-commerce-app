import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext =createContext();

const intialState = {
    filter_products: [],
    all_products:[],
    grid_view: true,
    sorting_value:"lowest",
    filters:{text:"", category:"all",}
}


export const FilterContextProvider =({children})=>{
    const {products} = useProductContext();

    const [state,dispatch] = useReducer(reducer,intialState);

    const setGridView =()=>{
return dispatch({type: "SET_GRID_VIEW"});
    };

    const setListView =()=>{

        return dispatch ({type:"SET_LIST_VIEW"});
    }

    const sorting = (event)=>{
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload:userValue})


    }
const updateFilterValue =(event)=>{
    let name = event.target.name;
    let value = event.target.value;

    return dispatch ({type: "UPDATE_FILTERS_VALUE",payload:{name,value}});


}

const clearFilters =()=>{
return dispatch({type:"CLEAR_FILTER" })

}



    useEffect (()=>{
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
      },[products,state.sorting_value,state.filters])


    useEffect (()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload:products})
    },[products]);


    return(
        <FilterContext.Provider value={{...state, setGridView,setListView,sorting,updateFilterValue,clearFilters}}>
            {children}


        </FilterContext.Provider>
    )
}

export const useFilterContext= ()=>{
return useContext(FilterContext)

} 