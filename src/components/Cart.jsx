import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';
import loaderGif from '../assets/loader.gif';
import emptyCartImg from '../assets/cart.webp'; 
import './Styles/Loader.css';

const Cart = () => {
  const { cart, setCart, confirmOrder } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setLoading(true);
    confirmOrder();

    setTimeout(() => {
      setLoading(false);
      navigate('./orders');
    }, 3000);
  };

  const increaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
        : cartItem,
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem,
    );
    setCart(updatedCart);
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    alert(`${item.name} has been removed from the cart!`);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      {loading && (
        <div className="loader-container">
          <img src={loaderGif} alt="Loading..." />
        </div>
      )}

      <h2>Your Cart</h2>

      {cart.length > 0 ? (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{item.type}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-3">
            <h4>Total: ₹{calculateTotal()}</h4>
          </div>

          <button className="btn btn-primary mt-2" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      ) : (

        !loading && (
          <div className="empty-cart">
            <img
              src={emptyCartImg}
              alt="Your cart is empty"
              className="empty-cart-img"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Cart;
