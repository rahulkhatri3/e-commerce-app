import React, { useState } from 'react'
import CartAmountToggle from './CartAmountToggle';

import { NavLink } from 'react-router-dom';
import {Button} from "./Button"
import Carts from '../Carts';

const AddCart = ({product}) => {
    const { id,  stock } = product;

    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
        
    };

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
        
    };
    return (
        <>
      
        <CartAmountToggle  amount={amount}
        
            setDecrease={setDecrease}
            setIncrease={setIncrease} />
            
        
            <NavLink to="/Carts">

            <Button>Add to Cart</Button>
            </NavLink>
            


            </>
        

  
  )
}

export default AddCart