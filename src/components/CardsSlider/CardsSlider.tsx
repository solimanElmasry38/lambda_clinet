import React, { useState } from 'react';

import { ProductCard } from '../../components/ProductCard/ProductCard';
import { _GetCategory } from '../../gql/query/getCategory';

import './CardsSlider.scss';
import { useCart } from '../../context/cartCtx';
function CardsSlider({ Cards }) {
  const [currentIndex, setCurrentIndex] = useState(0); // useState hook called unconditionally
  const { addToCart } = useCart();

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Cards.length - 3 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Cards.length - 4 : prevIndex - 1));
  };

  return (
    <div className="card-container">
      <h1>top tech</h1>
      {Cards.map((card, index) => (
        <div
          key={index}
          className={`card ${index === currentIndex ? 'active' : ''}`}
          style={{ transform: `translateX(${(index + 1 - currentIndex) * 110}%)` }}
        >
          <ProductCard data={card}>
            {card.is_available ? (
              <button className="item-cart-btn" onClick={() => addToCart(card.id, card.price)}>
                Add To Cart
              </button>
            ) : (
              <p>notAvaliable</p>
            )}
          </ProductCard>
        </div>
      ))}

      <button onClick={prevCard}>
        {' '}
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </button>
      <button onClick={nextCard}>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </button>
    </div>
  );
}

export default CardsSlider;
