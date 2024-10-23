"use client";
import { useCart } from "@/app/contexts/CartContext";
import { Product } from "@/utils/types";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductCard({
  id,
  image,
  name,
  price,
  brand,
}: Product) {
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { addToCart, removeFromCart, cart } = useCart();

  const handleIsInCartState = () => {
    setIsInCart(!isInCart);
  };

  useEffect(() => {
    isProductInCart(id);
  }, []);

  const isProductInCart = (id: number) => {
    const item = cart.filter((p) => p.id == id);
    if (item.length > 0) {
      return "text-red-500";
    }
  };

  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleAddToCart = (id: number) => {
    if (!isSignedIn) {
      router.push("/sign-in");
    } else {
      handleIsInCartState();
      addToCart(id);
      if (isInCart) {
        removeFromCart(id);
      }
    }
  };

  return (
    <div className='w-72 bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] rounded-xl overflow-hidden'>
      {/* <div className='bg-white flex justify-end pe-4'>
          <FaArrowRightLong />
          </div> */}
      <div>
        <Link href={`products/${id}`}>
          <Image
            src={image.src}
            height={image.height}
            width={image.width}
            alt='Product'
            className='h-60 w-72 object-scale-down rounded-t-xl px-2 hover:scale-105 duration-500 '
          />
        </Link>
        <div className='px-4 py-3 w-72'>
          <span className='text-gray-400 mr-3 uppercase text-xs'>{brand}</span>
          <p className='text-lg font-bold text-black truncate block capitalize'>
            {name}
          </p>
          <div className='flex items-center'>
            <p className='text-lg font-semibold text-black cursor-auto my-3'>
              ${price}
            </p>
            <del>
              <p className='text-sm text-gray-600 cursor-auto ml-2'>
                ${price + 100}
              </p>
            </del>
            <div
              className={`${isProductInCart(id)} ml-auto`}
              onClick={() => {
                handleAddToCart(id);
                // handleIsInCartState();
              }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-bag-plus'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                />
                <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
