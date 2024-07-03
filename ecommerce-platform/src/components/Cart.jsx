import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="border-b py-2">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
