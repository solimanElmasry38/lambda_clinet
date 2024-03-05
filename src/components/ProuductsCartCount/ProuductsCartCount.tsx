import React, { useEffect, useState } from 'react';

import './ProuductsCartCount.scss';
function ProuductsCartCount() {
  // const { cartQuantityNum } = useCart();
  const [st,setSt]=useState(localStorage.getItem('shopping-cart-coutn'))
// const count;
useEffect(()=>{
  setSt(localStorage.getItem('shopping-cart-coutn')!)
  //  location.reload()

},[localStorage.getItem('shopping-cart-coutn')])

  return <span className="CartItemsCount"> {st}</span>;
}

export default ProuductsCartCount;


