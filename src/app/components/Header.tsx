// import { SignedOut } from "@clerk/nextjs";
import Hero from "./Hero";
import Container from "./Container";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className='h-screen md:h-[90vh] relative '>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </header>
  );
}
