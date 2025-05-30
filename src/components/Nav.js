import React from 'react'
import{NavLink} from "react-router-dom";

const Nav = () => {
  return (
<Nav>
    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>


                   <li>
                <NavLink to="/about">About</NavLink>
            </li>

                    <li>
                <NavLink to="/products">Products</NavLink>
            </li>

               <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>

                   <li>
                <NavLink to="/carts"> 🛒</NavLink>
            </li>



        </ul>

    </div>

</Nav>
  )
}

export default Nav