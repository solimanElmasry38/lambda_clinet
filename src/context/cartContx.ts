import { createContext, ReactNode, useContext, useState } from "react";
type CartItem = {
    id: number
    quantity: number
  }
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    // cartItems: CartItem[]
  }
  
  const ShoppingCartContext = createContext({} as ShoppingCartContext);
  export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  };
  export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] =useState<CartItem[]>()
    

  }