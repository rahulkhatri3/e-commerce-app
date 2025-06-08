import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'
const Services = () => {
  return (
  <Wrapper>
    <div className='container'>
<div className='grid grid-three-column'>
<div className='services-1'>
    <div>
 <TbTruckDelivery className= "icon" />
 <h3> super fast and free delevery</h3>
</div>
</div>


<div className='services-2'>
<div className='services-colum-2'> 
<div>  
<MdSecurity  className="icon"/>
<h3>Non-contact-Shipping</h3>
</div>
</div>

 <div className='services-colum-2'>
<div>
<GiReceiveMoney className="icon" />
<h3>Money-back Guaranteed</h3>
</div>
 </div>
</div>

<div className='services-3'>
    <div>
<RiSecurePaymentLine className="icon" />
<h3>Super Secure Payment System</h3>
    </div>
</div>
</div>
    </div>

  </Wrapper>
  )
}

const Wrapper = styled.section`
.grid {
  display: grid;
  gap: 9rem;
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}
.icon{
color: rgba(81,56,238,0.4);
font-size: 2rem;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}


padding : 9rem 0;
.grid{
gap : 4.8rem;
}

.services-1,
.services-2,
.services-3{

width : auto;
height : 30rem;
display : flex;
flex-direction: column;
justify-content: center;
align-content: center;
background: ${({theme})=> theme.colors.bg};
text-align: center;
boreder-radius: 2rem;
box-shadow: rgba(0,0,0,0.05) 0px 1px 2px 0px;
}

.services-2{
gap: 4rem;
background-color: transparent;
box-shadow: none;

.services-colum-2{

background: ${({theme})=> theme.colors.bg};
display: flex;
flex-direction: row
flex: 1;
justify-content: center;
align-items: center;
border-radius: 2rem;
box-shadow: rgba(0,0,0,0.05) 0px 1px 2px 0px;

div{
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
gap: 1rem;
}
}


`

export default Services