import React, { useEffect, useState } from 'react';
import './ProductsCartCount.scss';

function ProductsCartCount() {
  const [count, setCount] = useState<string | null>(() => {
    return localStorage.getItem('cartCount-query');
  });

  useEffect(() => {
    const updateCount = () => {
      setCount(localStorage.getItem('cartCount-query'));
    };

    // Add event listener to handle changes in localStorage
    window.addEventListener('storage', updateCount);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  console.log(count);

  return <span className="CartItemsCount">{count}</span>;
}

export default ProductsCartCount;
