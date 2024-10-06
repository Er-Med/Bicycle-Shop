"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/Public/images/e-bike.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { RiMenuFold4Line, RiMenuUnfold4Line2 } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const ToggleMenu = () => setIsOpen(!isOpen);

  const ActiveLink = (name: any) =>
    pathname.toLowerCase() === name.toLowerCase()
      ? "!text-[--secondary] text-[17px]"
      : "";

  const navLinks = [
    {
      id: "2145",
      name: "Home",
      href: "/",
    },
    {
      id: "145",
      name: "About",
      href: "/about",
    },
    {
      id: "215",
      name: "Our Cycle",
      href: "/cycles",
    },
    {
      id: "45",
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <div className='relative w-full z-[100] '>
      <nav className='relative lg:relative grid grid-cols-12  pt-4 lg:p-4 lg:items-center overflow-hidden lg:h-[80px] justify-between z-[101]'>
        {/* Logo */}
        <div className='col-span-5 items-center justify-between'>
          <div className='h-[40px] w-[120px] relative'>
            <Link href='/'>
              <Image
                src={logoImg}
                alt='logo Image'
                className='absolute h-full w-full '
              />
            </Link>
          </div>
        </div>
        {/*End Logo */}

        {/* Large Screens Nav Links*/}
        <div
          className={clsx(
            " hidden lg:flex lg:w-0 h-0 lg:left-[200%] relative overflow-hidden duration-300   flex-col lg:flex-row  md:justify-between col-span-6  ",
            {
              "!h-fit lg:!w-full lg:!left-0": isOpen,
            }
          )}>
          <ul className='flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-14  duration-100 mt-24 lg:mt-0'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={` ${ActiveLink(
                    link.href
                  )} block py-2 pl-3 pr-4 md:p-0 lg:text-white font-medium hover:text-[red]`}
                  aria-current='page'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-4  text-white  -order-1 lg:order-1'>
            <div className='flex gap-4 lg:gap-6 text-2xl'>
              <Link href={"/cart"}>
                <AiOutlineShoppingCart />
              </Link>
              <IoSearchSharp />
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {/*End Large Screens  Nav Links*/}

        {/* BarMenu Icon */}
        <div
          className='  text-4xl  col-span-7 lg:col-span-1 justify-self-end text-white'
          onClick={ToggleMenu}>
          {isOpen ? <RiMenuFold4Line /> : <RiMenuUnfold4Line2 />}
        </div>
        {/*End BarMenu Icon */}
      </nav>

      {/*Small Screens Nav Links Menu */}
      <div
        className={clsx(
          " lg:hidden fixed  top-0 right-0 h-[100vh] overflow-hidden w-0 zd-[100] bg-[--background] flex items-center justify-center duration-150 opacity-0  ",
          {
            "bg-[--background] !w-full  !opacity-100  !rounded-none": isOpen,
          }
        )}>
        <ul className='flex flex-col  gap-4 text-white items-center'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={` ${ActiveLink(
                  link.href
                )} block py-2 pl-3 pr-4 md:p-0 lg:text-white font-medium hover:text-[--secondary] text-xl`}
                aria-current='page'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*End Small Screens Nav Links Menu */}
    </div>
  );
}
