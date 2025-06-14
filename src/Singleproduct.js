import React, { useEffect } from 'react'
import { useProductContext } from './context/Productcontext'
import { useParams } from 'react-router-dom'


const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const {getSingleProduct, isSingleLoading, singleProduct}=useProductContext()
  
  const {id} = useParams();

  const{id:alias, name, company,price,description,category,stock,stars,reviews } =singleProduct

  useEffect(()=>{
getSingleProduct(`${API}/${id}`)

  },[]);
  return (

    <h1>single page{name}</h1>

  )
}

export default Singleproduct