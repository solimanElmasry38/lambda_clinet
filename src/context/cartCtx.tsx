import React, { useState, createContext, useContext } from "react";

interface items {
  id: string;
  quantity: number;
}
interface IcartCTX {
  cartItems: items[];
  cartQuantity: number;
  cartVisablity: boolean;
  itemQuantity: () => number;
  removeFromCart: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  addToCart: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
}
const cartCTX = createContext<IcartCTX>({} as IcartCTX);
interface ShoppingCartProviderProps {
  children: React.ReactNode;
}
export const CartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [cartVisablity, setcartVisablity] = useState(false);
  const [cartItems, setCartItems] = useState<items[]>([]);
  

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
        console.log("add to cart firs time" + JSON.stringify(cartItems));
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          console.log("add to carrt second" + JSON.stringify(cartItems));

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

  const openCart = () => {
    setcartVisablity(true);
  };

  const closeCart = () => {
    setcartVisablity(false);
  };

  return (
    <cartCTX.Provider
      value={{
        itemQuantity,
        cartQuantity,
        cartItems,
        removeFromCart,
        addToCart,
        openCart,
        closeCart,
        cartVisablity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </cartCTX.Provider>
  );
};

export const useCart = () => {
  return useContext(cartCTX);
};
