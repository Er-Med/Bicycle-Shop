"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../Public/images/e-bike.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { RiMenuFold4Line, RiMenuUnfold4Line2 } from "react-icons/ri";
import Container from "./Container";
import { useCart } from "@/app/contexts/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  const pathname = usePathname();

  // styling navbar based in page pathname
  const shownBgColor = pathname == "/" ? "" : "bg_navbar";

  const { cart } = useCart();
  const ToggleMenu = () => setIsOpen(!isOpen);

  // Colored the active link
  const ActiveLink = (href: string) => {
    console.log(pathname.toLowerCase())
    console.log(href.toLowerCase())
    if (pathname.endsWith(href) || (href.includes(pathname) && pathname !== "/")) {
      return "active-link"
    } else {
      return ""
    }
  }


  console.log(pathname)
  const navLinks = [
    {
      id: "2145",
      name: "Home",
      href: "/",
    },
    {
      id: "145",
      name: "Services",
      href: "/services",
    },
    {
      id: "215",
      name: "Products",
      href: "/products",
    },
    {
      id: "45",
      name: "Contact Us",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 700;
      setIsFixed(window.scrollY > scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    //shownBgColor class applyed only in product details page for reset the hero section styles
    <div className={`${shownBgColor} ${isFixed
      ? 'fixed top-0 left-0 right-0  shadow-lg z-[19999] duration-500 bg-white/30 backdrop-blur-md bg_navbar'
      : ''}`}>
      <Container>
        <div className={` relative w-full z-[100] `}>
          <nav className='relative lg:relative grid grid-cols-12  py-4 lg:p-4 lg:items-center overflow-hidden lg:h-[80px] justify-between z-[101]'>
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

            {/* START Nav Links Menu : !!! Show only on LARGE Screens !!!*/}
            <div
              className={clsx(
                " hidden lg:flex lg:w-0 h-0 lg:left-[200%] relative overflow-hidden duration-300   flex-col lg:flex-row  md:justify-between col-span-6  ",
                {
                  "!h-fit md:!h-full lg:!w-full lg:!left-0": isOpen,
                }
              )}
            // className={
            //   " h-fit lg:!w-full lg:left-0 hidden lg:flex  relative overflow-hidden duration-300   flex-col lg:flex-row  md:justify-between col-span-6  "
            // }
            >
              <ul className='flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-14  duration-100 mt-24 lg:mt-0 items-center !bg-green-500 !bg-blue-500 '>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className={` ${ActiveLink(
                        link.href
                      )} block py-2 pl-3 pr-4 md:p-0 lg:text-white font-medium hover:text-[--secondary]`}
                      aria-current='page'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='user-area flex gap-4  text-white  -order-1 lg:order-1 items-center'>
                <div className='flex gap-4 lg:gap-6 text-2xl '>
                  <div className='relative'>
                    <Link href={"/cart"}>
                      <AiOutlineShoppingCart />
                    </Link>
                    <span className='absolute top-[-6px] -right-2 text-sm bg-red-500 text-white flex items-center justify-center px-[2px] rounded-full'>
                      {cart.length}
                    </span>
                  </div>
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
            {/*END Nav Links Menu : !!! Show only on LARGE Screens !!!*/}

            {/* BarMenu Icon */}
            <div
              className=' menu_icon text-4xl col-span-7 lg:col-span-1 justify-self-end text-white'
              onClick={ToggleMenu}>
              {isOpen ? <RiMenuFold4Line /> : <RiMenuUnfold4Line2 />}
            </div>
            {/*End BarMenu Icon */}
          </nav>

          {/* START Nav Links Menu : !!! Show only on Small Screens !!!  */}
          <div
            className={clsx(
              " lg:hidden fixed  top-0 right-0 h-[100vh] overflow-hidden w-0 zd-[100] bg-[--background] flex items-center justify-center duration-150 opacity-0  ",
              {
                "bg-[--background] !w-full  !opacity-100  !rounded-none":
                  !isOpen,
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
                    aria-current='page'
                    onClick={ToggleMenu}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*END Nav Links Menu : !!! Show only on Small Screens !!! */}
        </div>
      </Container>
    </div>
  );
}
