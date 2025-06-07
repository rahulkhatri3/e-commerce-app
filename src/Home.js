import React from 'react'
import HeroSection from './components/HeroSection';

const Home = () => {
      const data = {name: "Rahul Store"};
  return (
  
  <HeroSection myData = {data}  />
  )
  
}


export default Home;