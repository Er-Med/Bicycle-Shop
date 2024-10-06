// components/Slider.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  content: JSX.Element; // Required JSX content
}

interface SliderProps {
  slides: Slide[]; // Array of slides, each containing JSX content
  autoplay?: boolean; // Enable/disable autoplay
  navigation?: boolean; // Show/hide navigation arrows
  loop?: boolean; // Enable/disable loop
  spaceBetween?: number; // Space between slides
  centeredSlides?: boolean; // Center the active slide
}

export default function Slider({
  slides,
  autoplay = false,
  navigation = true,
  loop = true,
  spaceBetween = 30,
  centeredSlides = true,
}: SliderProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false}
      navigation={navigation}
      loop={loop}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
}
