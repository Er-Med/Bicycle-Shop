import Image from "next/image";
import img_5 from "@/Public/images/img_5.png";
import banner from "@/Public/images/banner_2.jpg";
import Container from "./Container";

export default function AboutSection() {
  return (
    <section className='about-section py-20 md:py-28 relative '>
      <div className='absolute w-full h-full top-0 left-0 bg-[--primary] opacity-95 z-10'></div>
      <Image
        src={banner}
        alt='image'
        className='absolute w-full h-full top-0 left-0  object-cover -z-0'
      />
      <Container>
        <div className='md:w-1/2 mx-auto text-center z-20 relative text-white '>
          <h2
            className='text-3xl md:text-[50px]
      font-bold mb-5 !text-white'>
            About Our cycle Store
          </h2>
          <p className='hidden md:block'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <p className='block md:hidden'>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>

          <div className=' w-[90%] md:w-4/6 mx-auto  product_image relative pt-16 ps-10 mt-14 md:mt-20'>
            <Image
              src={img_5}
              alt='bycle Image'
              className=' '
            />
          </div>
          <button className='more-btn mt-16 md:mt-20'>Read More</button>
        </div>
      </Container>
    </section>
  );
}
