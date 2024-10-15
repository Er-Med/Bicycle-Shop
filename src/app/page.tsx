// import { auth } from "@clerk/nextjs/server";
import Container from "../components/Container";

import AboutSection from "../components/Home/AboutSection";
import Products from "../components/Home/HomeProducts";
import Testimonials from "../components/Home/Testimonials";
import NewsSection from "../components/Home/NewsSectin";

export default function Home() {
  return (
    <div>
      {/* Products Section */}
      <section className='pb-28  pt-20 md:pt-0 md:pb-20'>
        <Container>
          <Products />
        </Container>
      </section>
      {/*End Products Section */}

      {/* About Section */}
      <AboutSection />
      {/* End About Section */}

      {/* Testimonials Section */}
      <Testimonials />
      {/* End Testimonials  Section */}

      {/* News Section */}
      <NewsSection />
      {/*End News Section */}
    </div>
  );
}
