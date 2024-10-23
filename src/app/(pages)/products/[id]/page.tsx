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

// // import { Suspense } from "react";
// import { getSingleBikeProduct } from "@/apiCalls/productApiCall";
// import Container from "../../../../components/Container";
// import ProductPage from "../../../../components/Products/ProductPage";
// // import ProductPageSkeleton from "../../../../components/Products/ProductPageSkeleton";
// // import AmazonLoader from "@/components/skeltons/skelton1";

// interface SingleProductPageProps {
//   params: { id: string };
// }

// // Async component to fetch and render product data
// async function ProductDetails({ id }: { id: string }) {
//   const singleProduct = await getSingleBikeProduct(id);
//   return <ProductPage product={singleProduct} />;
// }

// export default function ProductsPage({ params }: SingleProductPageProps) {
//   const pId: string = params.id;

//   return (
//     <section>
//       <Container>
//         {/* <Suspense fallback={<AmazonLoader />} > */}
//         <ProductDetails id={pId} />
//         {/* </Suspense> */}
//       </Container>
//     </section>
//   );
// }
