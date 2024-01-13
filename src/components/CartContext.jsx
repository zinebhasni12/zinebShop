import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('shoppingCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const removeFromCart = (sku) => {
        const newCart = cart.filter(item => item.sku !== sku);
        setCart(newCart);
        localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    };

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
