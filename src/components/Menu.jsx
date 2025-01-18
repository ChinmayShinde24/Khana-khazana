import React, { useContext, useState } from 'react';
import { Card, Button, Row, Col, Figure } from 'react-bootstrap';
import menuData from '../data/menuData.json';
import { CartContext } from '../context/CartContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('starters');
  const { cart, setCart } = useContext(CartContext);

  const handleClick = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updateCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCart(updateCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      alert(`${item.name} added to cart`);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const currentCategory = menuData.categories.find(
    (category) => category.id === selectedCategory,
  );

  return (
    <div>
      <div className="category-button">
        {menuData.categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            variant="outline-primary"
            className="m-2"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {currentCategory && (
        <div>
          <h2>{currentCategory.name}</h2>
          <Row>
            {currentCategory.items.map((item) => (
              <Col key={item.id} sm={6} md={4} lg={3}>
                <Card style={{ width: '18rem' }} className="mb-4">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    width={171}
                    height={180}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>
                      <strong>Price:</strong> ₹{item.price}
                    </Card.Text>
                    <Card.Text>
                      <strong>Type:</strong> {item.type}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleClick(item)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Menu;
