import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    toast.info(`${item.title} removed from cart`);
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4 p-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200 p-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex items-center  py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded" />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md mt-2 md:mt-0 md:ml-4"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
