// import { DOMAIN } from "@/u";
// import { CartItem } from "@/utils/types";
import { DOMAIN } from '../utils/constants';
import { CartItem } from '../utils/types';

const API_BASE_URL = `${DOMAIN}/api/cart`;

export async function fetchCart(): Promise<CartItem[]> {
 const response = await fetch(API_BASE_URL, { cache: 'no-store' });
 if (!response) {
  throw new Error(`Failed to fetch cart`);
 }

 const data = await response.json()
 return data.items
}

export async function addToCart(productId: number): Promise<CartItem[]> {
 const response = await fetch(API_BASE_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ productId }),
 });
 if (!response.ok) {
  throw new Error(`Failed to add to cart: ${response.status} ${response.statusText}`);
 }
 const data = await response.json();
 return data.items;
}

export async function removeFromCart(productId: number): Promise<CartItem[]> {
 const response = await fetch(API_BASE_URL, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ productId }),
  cache: 'no-store' 
 });
 if (!response.ok) {
  throw new Error(`Failed to remove from cart: ${response.status} ${response.statusText}`);
 }
 const data = await response.json();
 return data.items;
}


export async function clearCart(): Promise<void> {
 const response = await fetch(API_BASE_URL, { cache: 'no-store' , method: "PUT" });
 if (!response.ok) {
  throw new Error(`Failed to clear cart: ${response.status} ${response.statusText}`);
 }
}

export async function updateQuantity(productId: number, quantity: number): Promise<CartItem[]> {
 const response = await fetch(API_BASE_URL, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ productId, quantity }),
  cache: 'no-store' 
 });
 if (!response.ok) {
  throw new Error(`Failed to update quantity: ${response.status} ${response.statusText}`);
 }
 const data = await response.json();
 return data.items;
}

