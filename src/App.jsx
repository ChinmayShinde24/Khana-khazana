import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
