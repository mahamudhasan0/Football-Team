import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  const totalSalary = cart.reduce((total, salary) => total + salary.salary, 0);
  const name= (cart.map((name)=>{
    return(
      <div>
        <ul>
          <li>{name.name}</li>
        </ul>
      </div>
    )
  }))
  
  return (
    <div className="cart-area">
      <h4>Added Players: {cart.length}</h4>
      <p>Total Budget of Salary:<span className="salary">${totalSalary}</span></p>
      <h5>My Final Squad:<span className="selected-player">{name}</span></h5>     
    </div>
  );
};

export default Cart;
