import React from 'react';
import { useCart } from '../../context/cartCtx';
import './ProuductsCartCount.scss';
function ProuductsCartCount() {
  const { cartQuantity } = useCart();

  return <span className="CartItemsCount">{cartQuantity}</span>;
}

export default ProuductsCartCount;
