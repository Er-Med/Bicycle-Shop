import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../../Public/fonts/fonts";
import Header from "../components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Footer";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "E-Bike",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <CartProvider>
          <body className={`${poppins.className} antialiased `}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </body>
        </CartProvider>
      </ClerkProvider>
    </html>
  );
}
