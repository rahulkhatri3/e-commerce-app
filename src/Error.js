
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './components/Button'

const Error = () => {
  return (
   <Wrapper>
<div className="container">
<h2>404</h2>
<h3>UH OH! you'are lost.</h3>
<p>the page are looking for does not exits. How you got here is a mystery. But you can click the button below to go back to the homepage. </p>
<NavLink to='/'>
<Button>
  go to home page
</Button>
</NavLink>
</div>


   </Wrapper>
  )
}
const Wrapper= styled.section`
.container{
padding: 9rem 0;
text-align: center;
};

h2{
font-size:10rem
};

h3{
font-size:4.2rem
};

p{
margin: 2rem 0
};

`

export default Error