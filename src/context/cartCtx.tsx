import { makeUseVisualState } from 'framer-motion';
import React, { useState, createContext, useContext, useEffect } from 'react';

interface items {
  id: string;
  price: number;
  quantity: number;
}

interface IcartCTX {
  // cartItems: items[];
  // cartQuantity: number;

  // removeFromCart: (id: string) => void;
  // decreaseItemQuantity: (id: string) => void;
  // addToCart: (id: string, price: number) => void;
  cartQuantityNum, setcartQuantityNum,
  state, setstates
}
const cartCTX = createContext<IcartCTX>({} as IcartCTX);

const initialcartQuantityNum = localStorage.getItem('shopping-cart-quantity')
  ? localStorage.getItem('shopping-cart-quantity')!
  : "";

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}
export const CartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartQuantityNum, setcartQuantityNum] = useState(initialcartQuantityNum);
  const [state, setstates] = useState(0);


  useEffect(() => {
    localStorage.setItem('shopping-cart-quantity', cartQuantityNum);
  }, [cartQuantityNum]);


// const cartQuantityNum=7;
  return (
    <cartCTX.Provider
      value={{
        cartQuantityNum, setcartQuantityNum,state, setstates
      }}
    >
      {children}
    </cartCTX.Provider>
  );
};

export const useCart = () => {
  return useContext(cartCTX);
};
