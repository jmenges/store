"use client"

import React, { createContext, useContext, useState } from 'react';

type CartContext = {
  toggleCart: () => void;
  cartOpen: boolean;
};

const cartContext = createContext<CartContext | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  return <cartContext.Provider value={{ toggleCart, cartOpen }}>{children}</cartContext.Provider>;
}

const useCart = () => {
  const context = useContext(cartContext);

  if (context === undefined) throw new Error('useCart can only be used inside a CartProvider');

  return context;
};

export { useCart };
