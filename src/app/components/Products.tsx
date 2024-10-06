import Product from "./Product";
import img_2 from "@/Public/images/img_2.png";
import img_3 from "@/Public/images/img_3.png";
import img_4 from "@/Public/images/img_4.png";
export default function Products() {
  const productsData = [
    {
      id: 43,
      imgSrc: img_2,
      name: "BigOne",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      price: 252,
    },
    {
      id: 43,
      imgSrc: img_3,
      name: "BigOne",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      price: 252,
    },
    {
      id: 43,
      imgSrc: img_4,
      name: "BigOne",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      price: 252,
    },
  ];
  return (
    <section className='py-28 md:py-20'>
      <section className='text-center mb-10 md:mb-24'>
        <h1 className='font-bold text-3xl lg:text-4xl mb-2'>Our sycle</h1>
        <p>It is a long established fact that a reader will be distracted </p>
      </section>
      {productsData?.map((product) => (
        <Product
          name={product.name}
          imgSrc={product.imgSrc}
          price={product.price}
          desc={product.desc}
          key={product.id}
        />
      ))}
      <div className='more-btn mt-20 md:mt-44 '>More Products</div>
    </section>
  );
}
