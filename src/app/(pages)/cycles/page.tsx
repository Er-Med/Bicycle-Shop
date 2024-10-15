import React from "react";
import Container from "../../../components/Container";
import ProductsList from "../../../components/Products/ProductsList";
import { bikeProducts } from "../../../utils/data";

export default function CyclesPage() {
  return (
    <section>
      <Container className="my-32">
        <section className=' md:mt-1 mb-32'>
          <h1 className='text-4xl font-bold mx-auto w-fit'>Our Bycleess</h1>
        </section>
        <div className=''>
          {/* <ProductsList bikes={bikeProducts} /> */}
        </div>
      </Container>
    </section>
  );
}
