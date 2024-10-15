import Container from "../Container";
import banner from "../../../Public/images/banner_2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  const newsData = [{}, {}, {}];

  return (
    <section className='py-20 md:py-28 bg-[--primary]'>
      <Container>
        <section className='text-center mb-10 md:mb-24 text-white md:w-1/2 mx-auto'>
          <h1 className='font-bold text-3xl lg:text-4xl mb-4 !text-white '>
            Our sycle
          </h1>
          <p>
            It is a long established fact that a reader will be distracted will
            be distracted that a reader will be distracted will be distracted
            that a reader will be distracted{" "}
          </p>
        </section>
        <section className='articles 2xl:px-32'>
          <div className='flex gap-10 flex-col md:flex-row'>
            {newsData?.map((n, i) => (
              <div
                className=''
                key={i}>
                <article className='flex flex-col shadow rounded-md overflow-hidden scale-95 hover:scale-100 duration-500'>
                  <Link href="/">
                    <Image
                      alt='image'
                      src={banner}
                    />
                    <div className='bg-white flex flex-col justify-start p-6'>
                      <h2 className='text-2xl md:text-3xl font-bold pb-4'>
                        Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                      </h2>
                      <p className='text-sm pb-3'>
                        By{" "}
                        <span className='font-semibold hover:text-gray-800'>
                          David Grzyb
                        </span>
                        , Published on October 22nd, 2019
                      </p>
                      <Link
                        href='#'
                        className='pb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare
                        ligula lacus, quis iaculis dui porta volutpat. In sit amet
                        posuere magna..
                      </Link>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
