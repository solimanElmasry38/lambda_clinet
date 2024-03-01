import React, { useState, createContext, useContext, useEffect } from 'react';

interface items {
  id: string;
  price: number;
  quantity: number;
}

interface IcartCTX {
  cartItems: items[];
  cartQuantity: number;

  removeFromCart: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  addToCart: (id: string, price: number) => void;
}
const cartCTX = createContext<IcartCTX>({} as IcartCTX);

const initialCartItems = localStorage.getItem('shopping-cart')
  ? JSON.parse(localStorage.getItem('shopping-cart')!)
  : [];

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}
export const CartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<items[]>(initialCartItems);
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const removeFromCart = (id: string) => {
    setCartItems((currItem) => currItem.filter((item) => item.id !== id));
  };

  const decreaseItemQuantity = (id: string) => {
    setCartItems((curritem) => {
      if (curritem.find((item) => item.id === id)?.quantity === 1) {
        return curritem.filter((item) => item.id !== id);
      } else {
        return curritem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const addToCart = (id: string, price) => {
    setCartItems((currItem): items[] => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1, price }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <cartCTX.Provider
      value={{
        cartQuantity,
        cartItems,
        removeFromCart,
        addToCart,

        decreaseItemQuantity
      }}
    >
      {children}
    </cartCTX.Provider>
  );
};

export const useCart = () => {
  return useContext(cartCTX);
};
