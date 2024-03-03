import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './CardsSlider.scss';
import { useCart } from '../../context/cartCtx';

function CardsSlider({ Cards }) {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerScreen, setCardsPerScreen] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Cards.length) % Cards.length);
  };

  useEffect(() => {
    function updateScreenWidth() {
      const screenWidth = window.innerWidth;
      setCardsPerScreen(screenWidth < 480 ? 3 : 4);
    }

    updateScreenWidth();

    // Event listener for window resize
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div className="multi-card-carousel">
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {Cards.slice(currentIndex, currentIndex + cardsPerScreen).map((card, index) => (
            <ProductCard key={index} data={card}>
              {card.is_available ? (
                <button className="item-cart-btn" onClick={() => addToCart(card.id, card.price)}>
                  Add To Cart
                </button>
              ) : (
                <p>Not Available</p>
              )}
            </ProductCard>
          ))}
        </div>

        <button className="Prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="Next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default CardsSlider;
