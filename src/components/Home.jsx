import React from 'react';
import './Styles/Home.css';
import hero_image from '../assets/hero_image.png';
import Features from './Features';

const Home = () => {
  return (
    <>
      <div className="hero-container">
        {<img src={hero_image} alt="Logo" />}

        <div className="offer">
          <p className="para">Order your favrite food</p>
          <h1 className="heading">Enjoy our quick service</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <button className="btn btn-primary py-2 px-3">Explore Now</button>
        </div>
      </div>

      <Features />
    </>
  );
};

export default Home;
