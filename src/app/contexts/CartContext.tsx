"use client";

import { CartItem } from "@/utils/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAuth } from "@clerk/nextjs";

import {
  fetchCart,
  addToCart as apiAddToCart,
  removeFromCart as apiRemoveFromCart,
  clearCart as apiClearCart,
  updateQuantity as apiUpdateQuantity,
} from "@/apiCalls/cartApiCalls";

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    if (isLoaded && userId) {
      fetchCartData();
    }
  }, [isLoaded, userId]);

  // Get cart
  const fetchCartData = async () => {
    setIsLoading(true);
    try {
      const items = await fetchCart();
      setCart(items);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
    setIsLoading(false);
  };

  // Add To Cart
  const addToCart = async (productId: number) => {
    try {
      const updatedCart = await apiAddToCart(productId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  // Remove From Cart
  const removeFromCart = async (productId: number) => {
    try {
      const updatedCart = await apiRemoveFromCart(productId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };

  // Clear Cartt
  const clearCart = async () => {
    try {
      await apiClearCart();
      setCart([]);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const updateQuantity = async (productId: number, quantity: number) => {
    try {
      const updatedCart = await apiUpdateQuantity(productId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isLoading,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
