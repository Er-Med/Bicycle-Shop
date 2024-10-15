"use client";
import { FaQuoteLeft } from "react-icons/fa6";
// import { GrFormPrevious } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";
import client_img from "../../../Public/images/client_img.png";
import Image from "next/image";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {
  const testimonialsData = [{ id: 2 }, { id: 4 }, { id: 9 }];
  return (
    <div>
      <section className='testimonials-section py-20 md:py-28 relative '>
        <Container>
          <div className='md:w-4/6 mx-auto '>
            <h2 className='text-4xl font-bold text-center mb-8 md:mb-10 '>
              Says Customers
            </h2>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper'>
              {testimonialsData.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className='p-3 grid grid-cols-12 bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] min-h-[400px]  h-full'>
                    <div className='col-span-12 md:col-span-4'>
                      <div className='relative w-full h-full min-h-[300px]'>
                        <Image
                          src={client_img}
                          alt='image'
                          className='absolute top-0 left-0 w-full h-full md:object-cover'
                        />
                      </div>
                    </div>
                    <div className='col-span-12 md:col-span-8'>
                      <div className='mb-4 mt-10 ps:5 md:ps-10 pe-4'>
                        <div className='text-[--secondary] text-4xl'>
                          <FaQuoteLeft />
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters
                        </p>
                        <h3 className='text-xl font-bold'>Channery</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className=' flex justify-around gap-8 lg:gap-14 text-3xl text-[white] mt-10 '>
              <div className='p-2 md:p-4 bg-[--btn_bg] w-fit rounded-sm'>
                <GrFormPrevious />
              </div>
              <div className='p-2 md:p-4 bg-[--secondary] w-fit rounded-sm'>
                <MdNavigateNext />
              </div>
            </div> */}
          </div>
        </Container>
      </section>
    </div>
  );
}
