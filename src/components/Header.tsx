// import { SignedOut } from "@clerk/nextjs";
// import { useRouter } from 'next/router';
"use client";
import Hero from "./Hero";
import Container from "./Container";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function Header() {
  const path: string = usePathname();

  const shownBgColor = path == "/" ? "headerBg" : "";
  const shownHeroSection = path == "/" ? <Hero /> : null;

  return (
    <header className={`${shownBgColor}`}>
      <Navbar />
      <Container>{shownHeroSection}</Container>
    </header>
  );
}
