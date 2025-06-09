import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
    
      <h2 className='common-heading'>Contact</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14671.772468936391!2d75.79528355000001!3d23.172276099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1749484218494!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

<div className='container'>

<div className='contact-form'>

<form action="https://formspree.io/f/mrbkplnw" method='POST' className='contact-inputs' >
<input type='text' placeholder='username' name='username' required autoComplete='off' ></input>
<input type='email' placeholder='Email' name='email' required autoComplete='off' ></input>

<textarea typeof='text' name='message' cols={30} rows={10} placeholder='ENTER YOUR MESSAGE' required autoComplete='off'></textarea>
<input type='submit' value="send"></input>

</form>

</div>

</div>
</Wrapper>
  )
  }

const Wrapper = styled.section`
.container{
marrgin-top: 6rem
}

.contact-form{
padding-top:5rem;
max-width:50rem;
margin:auto;
}

.contact-inputs{
display:flex;
flex-direction:column;
gap: 3rem;
}

input[type="submit"]{
  cursor: pointer;
  transiction:all 0.2s;}

&:hover{
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({theme})=> theme.colors.btn}
      color: ${({theme})=> theme.colors.btn};
      transform: scale(0.9);
}



`;

export default Contact