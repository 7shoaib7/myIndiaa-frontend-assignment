import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItemsCount = useSelector(state => state.cart.length);

    return (
        <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    E-Commerce
                </Link>
                <nav className="flex items-center">
                    {/* <Link to="/products" className="mr-4">
                        <FaShoppingBag className="mr-2" />
                    </Link> */}
                    <Link to="/cart" className="flex items-center relative">
                        <FaShoppingCart className="mr-2" />
                        {cartItemsCount > 0 ? <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                            {cartItemsCount}
                        </span> : null}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
