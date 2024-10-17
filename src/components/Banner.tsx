import banner from "../../Public/images/banner_2.jpg";
import Image from "next/image";

interface BannerProps {
  title: string;
  className?: string;
}
export default function Banner({ title, className }: BannerProps) {
  return (
    <div
      className={`${className} relative mb-28 h-[250px] md:h-[350px] flex justify-center items-center`}>
      <div className='absolute w-full h-full top-0 left-0 bg-[--primary] opacity-90 z-10'></div>
      <h1 className='text-4xl md:text-7xl font-bold md:font-semiBold mx-auto text-center text-white relative z-30 '>
        {title}
      </h1>
      <Image
        src={banner}
        alt='image'
        className='absolute w-full h-full top-0 left-0  object-cover -z-10'
      />
    </div>
  );
}
