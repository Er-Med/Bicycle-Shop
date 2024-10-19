"use client";

import Link from "next/link";
import banner from "../../Public/images/banner_2.jpg";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className='flex items-center justify-center min-h-screen relative'>
      <div className='absolute w-full h-full top-0 left-0 bg-[--primary] opacity-90 z-10'></div>
      <Image
        src={banner}
        alt='image'
        className='absolute w-full h-full top-0 left-0  object-cover -z-10'
      />
      <div className='max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg relative z-50'>
        <div className='text-9xl font-bold text-[--primary] mb-4'>Oops!</div>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>
          Something Went Wrong
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          The page you&apos;re looking for seems to have gone on a little
          adventure. Don&apos;t worry, we&apos;ll help you find your way back
          home.
        </p>
        <div className='flex gap-4 justify-center'>
          <Link
            href='/'
            className='inline-block bg-[--primary] text-white font-semibold px-6 py-3 rounded-md hover:bg-[--secondary] transition-colors duration-300'>
            Go Back Home
          </Link>

          <Link
            href='/'
            className='inline-block bg-[--primary] text-white font-semibold px-6 py-3 rounded-md hover:bg-[--secondary] transition-colors duration-300'>
            Refresh page
          </Link>
        </div>
      </div>
    </div>
  );
}
