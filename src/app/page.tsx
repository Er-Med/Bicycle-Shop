import { auth } from "@clerk/nextjs/server";
import Container from "./components/Container";

import AboutSection from "./components/AboutSection";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import NewsSection from "./components/NewsSectin";

export default function Home() {
  return (
    <div>
      {/* Products Section */}
      <Container>
        <Products />
      </Container>
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
