"use client"
import { useCart } from "@/app/contexts/CartContext";
import Link from "next/link";

interface ShopBtnProps {
 id: number;
 className?: string;
 text?: string
}
export default function ShopBtn({ className, text = "Buy Now", id }: ShopBtnProps) {
 const { addToCart } = useCart()

 return (
  <button className={`buy-btn ${className}`} onClick={() => addToCart(id)}><Link href={`/products/${id}`}>{text}</Link></button>
 );
}