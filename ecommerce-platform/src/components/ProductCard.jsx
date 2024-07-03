import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleAddToCart = () => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find(item => item.id === product.id);

    if (!existingItem) {
      dispatch(addToCart(product));
      toast.success(`${product.title} added to cart!`);
    } else {
      toast.warning(`${product.title} is already in your cart.`);
    }
  };

  return (
    <div className="border rounded-xl shadow-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-lime-800 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
