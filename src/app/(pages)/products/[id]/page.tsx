import { getSingleBikeProduct } from "@/apiCalls/productApiCall";
import Container from "../../../../components/Container";
import ProductPage from "../../../../components/Products/ProductPage";

interface SingleProductPageProps {
  params: { id: string };
}

export default async function productsPage({ params }: SingleProductPageProps) {
  const pId: string = params.id;
  const singleProduct = await getSingleBikeProduct(pId);

  return (
    <section>
      <Container>
        <ProductPage product={singleProduct} />
      </Container>
    </section>
  );
}
