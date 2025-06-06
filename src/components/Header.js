import React from 'react'
import{NavLink} from "react-router-dom";
import Nav from './Nav';
import styled from 'styled-components';


 const MainHeader = styled.header`
 padding: 0 4.8rem;
 height: 10rem;
 background-color: ${({theme})=> theme.colors.bg};
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: relative;

 .logo {
  height: 4rem;
}
  `;


const Header = () => {
  return (
 <MainHeader>
    <NavLink to="/">
    <img src='./rahul-enterprises.jpg' alt='my logo img' className='logo'/>

    </NavLink>
<Nav />
 </MainHeader>
  );
};




export default Header;