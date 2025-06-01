import React, { useState } from 'react'
import{NavLink} from "react-router-dom";
import { cgMenu,cgClose } from "react-icons/cg";

const Nav = () => {
    const [menuIcon, setMenuIcon] = useState();
  return (
<Nav>
    <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
            <li>
                <NavLink to="/" className="navbar-link" onClick ={ ()=>setMenuIcon(false)}>Home</NavLink>
            </li>


                   <li>
                <NavLink to="/about"  className="navbar-link" onClick ={ ()=>setMenuIcon(false)}>About</NavLink>
            </li>

                    <li>
                <NavLink to="/products"  className="navbar-link" onClick ={ ()=>setMenuIcon(false)}>Products</NavLink>
            </li>

               <li>
                <NavLink to="/contact"  className="navbar-link" onClick ={ ()=>setMenuIcon(false)}>Contact</NavLink>
            </li>

                   <li>
                <NavLink to="/carts"  className="navbar-link" onClick ={ ()=>setMenuIcon(false)}> 🛒</NavLink>
            </li>

        </ul>

        <div className='mobile-navbar-btn'>
            <cgMenu name="menu-outline" className="mobile-nav-icon"  
               onClick ={ ()=>setMenuIcon(true)}  />
          <cgClose name="close-outline" className="mobile-nav-icon close outline"
                onClick ={ ()=>setMenuIcon(false)}
          />
        </div>

    </div>

</Nav>
  )
}

export default Nav