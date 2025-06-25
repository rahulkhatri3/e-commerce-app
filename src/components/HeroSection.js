import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'

const HeroSection = ({ myData}) => {

    const {name} = myData ;
  return (
    <Wrapper>
<div className='container'>

    <div className='grid grid-two-column'>
    <div className='hero-section-data'>
    <p className='intro-data'>Welcome to</p>
    <h1>{name}</h1>
    <p> Welcome to Rahul Store, where we bring you the best products at unbeatable prices. Whether you're shopping for everyday essentials,
     trendy fashion, electronics, or home goods, our store is dedicated to delivering quality, affordability, and a great shopping experience.
      We believe in customer satisfaction, genuine products, and fast, friendly service.
      </p>
    <NavLink to="../Products">
        <Button>Shop Now</Button>
    </NavLink>
</div>
<div className='hero-section-image'>
<figure>
    <img src='shop.jpg' alt='shopping-image' className='img-style'/>
</figure>

</div>
</div>
</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

padding: 12rem 0;
img{
min-width: 10rem;
height: 10rem;
}
.hero-section-data{
p{
margin: 2rem 0;
}
}

h1{
text-transform: capitalize;
font-weight: bold;
}

.intro-data{
margin-bottom: 0;
}

.hero-section-image{
width: 100%;
height: auto;
display:flex;
justify-content: center;
align-items: center;
}


figure{
position: relative;

& :: after{
content: "";
width: 60%;
height: 80%
background-color: rgba(81,56,238,0.4);
position: absolute;
left: 50%;
top: -5rem;
z-index: -1;
}
 }

.img-style{
width: 100%;
height: auto;
}
@media (max-width: ${({theme})=> theme.media.mobile}){
.grid{
gap: 10rem;
}
}

figure:: after{
content: "";
width: 50%;
height: 100%;
left: 0;
top:10%;
background-color: rgba(81,56,238,0.4);
}
}
`;

export default HeroSection
