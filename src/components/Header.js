import React from 'react'
import{NavLink} from "react-router-dom";
import Nav from './Nav';

const Header = () => {
  return (
 <section>
    <NavLink to="/">
    <img src='./rahul-enterprises.jpg' alt='my logo img'/>

    </NavLink>
<Nav />
 </section>
  )
}

export default Header