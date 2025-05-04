"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./CartReducer";

const initilaCart = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

const CartContext = createContext<any>(null);

export default function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
  const [cart, dispatch] = useReducer(cartReducer, [], initilaCart);


  console.log(cart)

  useEffect(
    function () {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = function () {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
