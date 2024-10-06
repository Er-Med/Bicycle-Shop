"use client";
import Image from "next/image";
import cycleImg from "@/Public/images/img_1.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
export default function Hero() {
  const slides = [{ id: 2 }, { id: 4 }, { id: 9 }];
  return (
    <section className='pt-10 md:pt-24 '>
      <div className='container z-30 relative   '>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'>
          {slides?.map((slid) => (
            <SwiperSlide key={slid.id}>
              <section className=''>
                <div className='grid grid-cols-12 lg:px-10 xl:px-40'>
                  {/* Image */}
                  <div className='col-span-full md:col-span-7 '>
                    <div>
                      <div className='hidden md:flex rounded-full w-16 h-16 md:w-24 md:h-24 bg-[--secondary]  justify-center items-center text-[white] font-semibold mx-auto relative -left-7 mb-2'>
                        Best
                      </div>
                      <div className='image_1'>
                        <Image
                          src={cycleImg}
                          alt='image'
                          className='max-w-full h-auto'
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Image */}

                  {/* Desc */}
                  <div className='col-span-full md:col-span-5 -order-1 md:order-1'>
                    <div className='text-[white] flex flex-col gap-3'>
                      <h1 className=' text-4xl  md:text-[45px] font-bold leading-tight sm:w-1/3 pt-8 !text-white'>
                        New Model Cycle
                      </h1>
                      <p className='banner_text text-[#F0F0F0]'>
                        It is a long established fact that a reader will be
                        distracted by the readable content{" "}
                      </p>
                      <div className='shop-btn'>
                        <a href='contact.html'>Shop Now</a>
                      </div>
                    </div>
                  </div>
                  {/*End Desc */}
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slide Arrows  */}
        <div className='absolute right-0 bottom-0 lg:bottom-20 flex justify-end gap-8 lg:gap-14 text-3xl text-[white] '>
          <div className=' p-2 md:p-4 bg-[--btn_bg] w-fit rounded-sm'>
            <GrFormPrevious />
          </div>
          <div className='p-2 md:p-4 bg-[--secondary] w-fit rounded-sm'>
            <MdNavigateNext />
          </div>
        </div>
        {/*End Slide Arrows  */}
      </div>
    </section>
  );
}
