
import React from 'react';
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Singleproduct from './Singleproduct';
import Carts from './Carts';
import Error from './Error';
import Header from './components/Header';


function App() {
  return (
    <Router>

        < Header/>
<Routes>
  <Route path ="/" element={<Home />}/>
  <Route path ="/about" element={<About />}/> 
  <Route path ="/product" element={<Products />}/> 
  <Route path ="/contact" element={<Contact />}/> 
    <Route path ="/cart" element={< Carts/>}/> 
      <Route path ="/error" element={<Error />}/> 
    <Route path ="/singleproduct/:id" element={<Singleproduct />}/> 


</Routes>

    </Router>

  );
}

export default App;
