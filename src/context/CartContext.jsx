import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    setOrders(cart);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, orders, setOrders, confirmOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};
