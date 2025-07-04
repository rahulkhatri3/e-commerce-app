import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_Context'
import {Button} from ".//Button"

const FilterSection = () => {
  const { filters: { text, category }, updateFilterValue, all_products,clearFilters } = useFilterContext();

  const getUniqeData = (data, property) => {
    
    let newVal = data.map((curElem) => {
  return curElem[property];
    })

   return( newVal = ["all", ...new Set(newVal)]);
   
  }
  

  const categoryOnlyData = getUniqeData(all_products, "category");

  return (
    <Wrapper>
      <div className="filter-search">
        <form action="" onSubmit={(e)=>e.preventDefault()}>
          <input type='text' name='text' placeholder='search' value={text} onChange={updateFilterValue}
          />
          
          </form>
      </div>

      <div className="filter-category">
        <h3>category</h3>
        <div>
          {categoryOnlyData.map((curElem,index) => {
  
            return (
              <button key={index} type='button' name='category' value={curElem} className={curElem === category ? "active" : ""} onClick={updateFilterValue} >
                {curElem}
              </button>
            );
})}

        </div>

      </div>

      <div className="filter-clear">

        <Button className='btn' onClick={clearFilters}>Clear Filter</Button>
      </div>

    </Wrapper>
  )
}

const Wrapper=styled.section`

padding:5rem 0;
display:flex;
flex-direction:column;
gap:3rem;


h3{
padding:2rem 0;
font-size: bold;
}
.filter-search{
input{
padding: 0.6rem 1rem;
}}

.filter-category 
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`

export default FilterSection