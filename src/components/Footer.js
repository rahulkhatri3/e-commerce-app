import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
import { FaDiscord,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <Wrapper>
          <section className='contact-short'>
              
              <div className='gid grid-two-column'>
                  <div>
                      <h3>Ready to get started?</h3>
                     <h3>Talk to us today </h3>
                  </div>
                  <div>
                      <Button>
                          <NavLink to='/contact'>Get Started</NavLink>
                      </Button>
                  </div>
              </div>
          </section>
          <footer>
              <div className='container grid grid-four-colum'>
                  
                  <div className='footer-about'>
                      
                      <h3>Rahul Enterprises</h3>
                      <p>Lorem ipusm dolor, sit amet consectetur adipisicing elite.</p>
                  </div>
                  <div className='footer-subscribe'>
                      <h3>Subscribe to get important updates</h3>
                      <form action=''>
                          
                          <input type='email' placeholder=' your e-mail'></input>
                                <input type='submit' value='subscribe'></input>
                          
                      </form> 
                  </div>
                  <div className='footer-social'>
                      <h3>Folow Us</h3>
                      <div className='foter-social--icons'></div>
                      <div>  <FaDiscord className='icons' /></div>
                      <div><FaInstagram className='icon' /></div>
                       <div> <FaYoutube  className='icons'/></div>
                  </div>
                  <div className='footer-contact'>
                      
                      <h3>call us </h3>
                      {/* <a href="tel:8770536906">8770536906</a> */}
                      <h3>870536906</h3>
                  </div>
              </div>
              <div className='footer-bottom--section'>
              <div className='container grid grid-two-column'>
                  <hr />
                  
                      <p>@2025 Rahul Enterprises.All Rights Reserved</p>
                      <div>
                          <p>privacy policy</p>
                      <p>terms & conditions</p>
                      </div>
                  </div>
                  </div>

          </footer>
    
      </Wrapper>
  )
}

const Wrapper = styled.section`


`

export default Footer