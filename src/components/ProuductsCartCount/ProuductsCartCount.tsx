import React, { useEffect } from 'react';
import { useCart } from '../../context/cartCtx';
import './ProuductsCartCount.scss';
function ProuductsCartCount() {
  const { cartQuantityNum} = useCart();
let x=cartQuantityNum;
useEffect(()=>{
x=cartQuantityNum
},[cartQuantityNum])
console.log(x)
console.log(cartQuantityNum)

return <span className="CartItemsCount">{x}</span>;
}

export default ProuductsCartCount;
