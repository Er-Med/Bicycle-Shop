import { getBikeProducts } from "@/apiCalls/productApiCall";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import ProductsList from "@/components/Products/ProductsList";
import { Product } from "@/utils/types";

export default async function productsPage() {
  const bikeProducts: Product[] = await getBikeProducts();

  return (
    <section className='mb-32 '>
      <Banner title='Our Bicycles' />
      <Container>
        <ProductsList bikes={bikeProducts} />
      </Container>
    </section>
  );
}
