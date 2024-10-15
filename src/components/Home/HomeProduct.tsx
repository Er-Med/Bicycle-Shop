import { Product } from "@/utils/types";
import Image from "next/image";
import ShopBtn from './../ShopBtn';

export default function HomeProduct({
  id,
  image,
  name,
  desc,
  price,
  brand,
}: Product) {
  return (
    <div className='product-section group'>
      <section className='grid grid-cols-12 lg:px-10 xl:px-40 '>
        <div className=' col-span-full md:col-span-6 md:group-odd:order-1'>
          {/* Image */}
          <div className='product_image relative md:group-odd:ms-20 md:group-last-of-type:pe-16'>
            <div className='ps-4 pt-10 md:ps-10 md:pt-16'>
              <Image
                src={image.src}
                alt='product_image'
                width={400}
                height={500}></Image>
            </div>
          </div>
          {/*End Image */}
        </div>

        <div className='col-span-full md:col-span-6'>
          {/* Product Description */}
          <div className='md:pt-10 '>
            <div className='mb-11 md:mb-16 flex items-center justify-between'>
              <span className='h-0.5 w-1/3 inline-block bg-black'></span>{" "}
              <h2 className='font-semibold text-2xl md:text-3xl'>{name}</h2>
            </div>
            <p>{desc}</p>
            <div className='flex justify-between mt-11 md:mt-16'>
              {/* <button className='buy-btn'> Buy Now</button> */}
              <ShopBtn id={id} />
              <div className='font-bold text-xl '>
                Price <span className='text-[--secondary]'>${price}</span>
              </div>
            </div>
          </div>
          {/* Product Description */}
        </div>
      </section>
    </div>
  );
}
