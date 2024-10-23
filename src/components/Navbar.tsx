"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../Public/images/e-bike.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { GrClose } from "react-icons/gr";
import { HiOutlineBars3 } from "react-icons/hi2";
import Container from "./Container";
import { useCart } from "@/app/contexts/CartContext";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const { userId } = useAuth();

  const pathname = usePathname();

  const isHomeBtn = pathname === "/";

  // styling navbar based in page pathname
  const shownBgColor = pathname == "/" ? "" : "bg_navbar";

  const { cart } = useCart();

  const ToggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(!isMenuOpen);

    if (newMenuState === true) {
      // Menu is opening
      document.body.style.overflow = "hidden";
    } else {
      // Menu is closing
      document.body.style.overflow = "unset";
    }
  };

  // Colored the active link
  const ActiveLink = (href: string) => {
    if (
      pathname.endsWith(href) ||
      (href.includes(pathname) && pathname !== "/")
    ) {
      return "active-link";
    } else {
      return "";
    }
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //shownBgColor class applyed only in product details page for reset the hero section styles
    <div
      className={`${shownBgColor} ${
        isFixed
          ? "fixed top-0 left-0 right-0  shadow-lg z-[19999] duration-500 bg-white/30 backdrop-blur-lg bg_navbar"
          : ""
      }`}>
      <Container>
        <div className={` relative w-full z-[100] `}>
          <nav className='large-Screens-Nav hidden lg:grid relative lg:relative  grid-cols-12  py-4 lg:p-4 lg:items-center overflow-hidden lg:h-[80px] justify-between z-[101]'>
            {/* Logo */}
            <div className='col-span-4 items-center justify-between'>
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
                " hidden lg:flex relative overflow-hidden duration-300   flex-col lg:flex-row  md:justify-between col-span-8  !h-fit md:!h-full lg:!w-full lg:!left-0 "
              )}
              // className={
              //   " h-fit lg:!w-full lg:left-0 hidden lg:flex  relative overflow-hidden duration-300   flex-col lg:flex-row  md:justify-between col-span-6  "
              // }
            >
              <ul className='flex flex-col lg:flex-row gap-4 md:gap-6 xl:gap-14  duration-100 mt-24 lg:mt-0 items-center'>
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
              <div className='user-area flex md:gap-10  text-white  -order-1 lg:order-1 items-center'>
                {/* START Shopping Cart */}
                <div className='flex gap-4 lg:gap-6 text-2xl '>
                  <div className='relative'>
                    <Link href={"/cart"}>
                      <AiOutlineShoppingCart />
                    </Link>
                    <span className='absolute top-[-6px] -right-2 text-sm bg-red-500 text-white flex items-center justify-center px-[2px] rounded-full'>
                      {userId && cart && cart.length ? cart.length : 0}
                    </span>
                  </div>
                </div>
                {/* END Shopping cart */}

                {/* START Button[Lgin - Register] */}
                <div className='flex gap-3'>
                  <SignedOut>
                    <div className='bg-orange-500'>
                      {/* <SignInButton> */}
                      {/* login */}
                      <LoginBtn isHomeBtn={isHomeBtn} />
                      {/* </SignInButton> */}
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <SignedOut>
                    <RegisterBtn isHomeBtn={isHomeBtn} />
                  </SignedOut>
                </div>
                {/* END Button[Lgin - Register] */}
              </div>
            </div>
            {/*END Nav Links Menu : !!! Show only on LARGE Screens !!!*/}
          </nav>

          {/* START Nav Links Menu : !!! Show only on Small Screens !!!  */}
          <nav className='small-Screens-Nav block lg:hidden relative z-[1000] py-2'>
            <div className=' relative z-[2000] menu_icon text-4xl col-span-8 lg:col-span-1 justify-self-end text-white '>
              <div className='flex gap-2 items-center justify-between'>
                <div className='flex items-center'>
                  {/* START BarMenu Icon */}
                  <div onClick={ToggleMenu}>
                    {isMenuOpen ? <GrClose /> : <HiOutlineBars3 />}
                  </div>
                  {/*End BarMenu Icon */}
                  {/* START Logo */}
                  <div className='h-[30px] w-[100px] relative'>
                    <Link href='/'>
                      <Image
                        src={logoImg}
                        alt='logo Image'
                        className='absolute h-full w-full object-scale-down'
                      />
                    </Link>
                  </div>
                  {/* END Logo */}
                </div>

                <div className='flex items-center'>
                  {/* START Shopping Cart */}
                  <div className='flex gap-4 lg:gap-6 text-2xl order-last'>
                    <div className='relative'>
                      <Link
                        href={"/cart"}
                        className='text-[1.3rem]'>
                        <AiOutlineShoppingCart />
                      </Link>
                      <span className='absolute -top-[8px] right-[5px] text-sm text-[--secondary] flex items-center justify-center rounded-full'>
                        {userId && cart && cart.length ? cart.length : 0}
                      </span>
                    </div>
                  </div>
                  {/* END Shopping cart */}
                  {/* START Button[Lgin - Register] */}
                  <div className='flex gap-2 items-center'>
                    <SignedOut>
                      <LoginBtn
                        isHomeBtn={isHomeBtn}
                        isFixedMenu={isFixed}
                      />
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                    <SignedOut>
                      <RegisterBtn isHomeBtn={isHomeBtn} />
                    </SignedOut>
                  </div>
                  {/* END Button[Lgin - Register] */}
                </div>
              </div>
              <div className={clsx('block md:hidden border-t border-white mt-3',{"hidden": isFixed && !isMenuOpen})} ></div>
            </div>
            <div
              className={clsx(
                "navmenu lg:hidden fixed  top-0 left-0 h-[100vh] overflow-hidden w-0 zd-[100] bg-[--background] flex items-center justify-center duration-150 opacity-0  ",
                {
                  "bg-[--background] !w-full  !opacity-100  !rounded-none":
                    isMenuOpen,
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
          </nav>
          {/*END Nav Links Menu : !!! Show only on Small Screens !!! */}
        </div>
      </Container>
    </div>
  );
}
