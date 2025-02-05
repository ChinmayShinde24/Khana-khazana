import React from 'react';
import './Styles/Features.css';
import delivery from '../assets/delivery.png';
import discount from '../assets/discount.png';
import fresh from '../assets/fresh.png';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img className="feature-img" src={delivery} alt="" />
        <div className="feature-content">
          <h3>Home Delivery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, atque.
          </p>
        </div>
      </div>

      <div className="feature">
        <img className="feature-img" src={discount} alt="" />
        <div className="feature-content">
          <h3>Home Delivery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, atque.
          </p>
        </div>
      </div>

      <div className="feature">
        <img className="feature-img" src={fresh} alt="" />
        <div className="feature-content">
          <h3>Home Delivery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, atque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
