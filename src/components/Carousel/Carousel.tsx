import { useEffect, useState } from 'react';
import './Carousel.scss';
import { AnimatePresence, motion } from 'framer-motion';

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');
  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };
  useEffect(() => {
    const intr_id = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      clearInterval(intr_id);
    };
  });

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };
  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0.2
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0.2
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="carousel">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          variants={slideVariants}
          initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>
      ;
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
