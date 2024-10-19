import { Product } from "@/utils/types";
import HomeProduct from "./HomeProduct";
import Link from "next/link";
import { getBikeProducts } from "@/apiCalls/productApiCall";

export default async function HomeProducts() {
  const products: Product[] = await getBikeProducts();

  //Get the first 3 products data
  const homeProducts = products.slice(0, 3);

  return (
    <div>
      <section className='text-center mb-10 md:mb-24'>
        <h1 className='font-bold text-3xl lg:text-4xl mb-2'>Our sycleee</h1>
        <p>It is a long established fact that a reader will be distracted </p>
      </section>
      {homeProducts?.map((product: Product) => (
        <HomeProduct
          id={product.id}
          name={product.name}
          image={product.image}
          brand={product.brand}
          price={product.price}
          desc={product.desc}
          key={product.id}
        />
      ))}
      <button className='more-btn mt-20 md:mt-44 w-fit mx-auto block hover:bg-[--primary] duration-500'>
        <Link href={`/products`}>More Products</Link>
      </button>
    </div>
  );
}
