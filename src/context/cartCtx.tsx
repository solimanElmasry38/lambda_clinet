import React, { useState, createContext, useContext, useEffect } from 'react';

interface items {
  id: string;
  quantity: number;
}
interface IcartCTX {
  cartItems: items[];
  cartQuantity: number;
  itemQuantity: () => number;
  removeFromCart: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  addToCart: (id: string) => void;
}
const cartCTX = createContext<IcartCTX>({} as IcartCTX);

const initialCartItems = localStorage.getItem('shopping-cart')
  ? JSON.parse(localStorage.getItem('shopping-cart'))
  : [];
interface ShoppingCartProviderProps {
  children: React.ReactNode;
}
export const CartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<items[]>(initialCartItems);
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
  }, [cartItems]);
  const cartQuantity = 9;

  const itemQuantity = () => {
    return 6;
  };

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

  const addToCart = (id: string) => {
    setCartItems((currItem): items[] => {
      if (currItem.find((item) => item.id === id) == null) {
        console.log('add to cart firs time' + JSON.stringify(cartItems));
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          console.log('add to carrt second' + JSON.stringify(cartItems));

          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }

      // console.log("final "+JSON.stringify(cartItems));
    });
  };

  return (
    <cartCTX.Provider
      value={{
        itemQuantity,
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
