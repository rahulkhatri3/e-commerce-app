import React from 'react'
import FormatePrice from "../Helper/FormatePrice"
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'

const CartItem = ({id,name,image,price,amount}) => {
    const {removeItem,setDecrease,setIncrease}=useCartContext();

    //     const setDecrease = () => {
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1);
        
    // };

    // const setIncrease = () => {
    //     // amount < stock ? setAmount(amount + 1) : setAmount(stock);
        
    // };
  return (
    <div className='cart_heading grid grid-five-column'>
<div className="cart-image--name">

    <div>
        <figure>
            <img src={image} alt={id} />
        </figure>
    </div>
    <div>
        <p>{name}</p>
    </div>
</div>

<div className="cart-hide">

    <p> <FormatePrice price={price} /></p>
</div>
<CartAmountToggle  amount={amount}
        
            setDecrease={()=>setDecrease(id)}
            setIncrease={()=>setIncrease(id)} />


            <div className="cart-hide">
                <p> <FormatePrice price={price*amount} /></p>
            </div>

            <div>
                 <FaTrash className='remove_icon' onClick={()=> removeItem (id)
                 } />


            </div>


    </div>
  )
}

export default CartItem