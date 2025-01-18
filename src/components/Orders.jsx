import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import notFoundImg from '../assets/notFound.avif';
import './Styles/EmptyCart.css';

const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <div className="order-page">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <div className="no-orders-container">
          <img src={notFoundImg} alt="No Orders" className="not-found-img" />
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
