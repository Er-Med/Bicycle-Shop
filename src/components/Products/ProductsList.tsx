import { Product } from "@/utils/types";
import ProductCard from "./ProductCard";

export default function ProductsList({ bikes }: { bikes: Product[] }) {
  return (
    <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
      {bikes?.map((p: Product) => (
        <ProductCard
          key={p.id}
          id={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          brand={p.brand}
        />
      ))}
    </section>
  );
}
