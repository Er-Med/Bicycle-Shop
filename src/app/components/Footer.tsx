import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Container from "./Container";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook size={20} /> },
    { href: "https://instagram.com", icon: <FaInstagram size={20} /> },
    { href: "https://linkedin.com", icon: <FaLinkedin size={20} /> },
    { href: "https://twitter.com", icon: <RiTwitterXLine size={20} /> },
  ];

  return (
    <footer>
      <div
        className=' py-32 bg-[--primary]
      '>
        <Container>
          <div className='flex flex-col md:flex-row'>
            {/* Map Location  */}
            <div className='bg-gray-200 flex-grow rounded-sm overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France'
                // width='600'
                height='400'
                className='w-full'></iframe>
            </div>
            {/*End Map Location  */}
            {/* Info */}
            <div className='md:w-[40%] text-white pt-10 md:ps-8 md:p-4'>
              <ul className='flex flex-col gap-4 md:w-fit'>
                <li>
                  <Link
                    href={"/"}
                    className='flex gap-3 hover:text-[--secondary] duration-200'>
                    <span className='text-xl'>
                      <FaLocationDot />
                    </span>{" "}
                    Page when looking at its layou
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex gap-3 hover:text-[--secondary] duration-200'>
                    <span className='text-xl'>
                      <FaPhoneAlt />
                    </span>{" "}
                    Call Now +01 123467890
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className='flex gap-3 hover:text-[--secondary] duration-200'>
                    <span className='text-xl'>
                      <MdOutlineEmail />
                    </span>{" "}
                    demo@gmail.com
                  </Link>
                </li>
              </ul>
              <div className='flex space-x-4 mt-10'>
                {/* Add your social media links or icons here */}
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className='p-2 rounded-sm flex justify-center items-center bg-white text-[--primary]  hover:bg-[--secondary] hover:text-white duration-200 '
                    target='_blank'
                    rel='noopener noreferrer'>
                    {social.icon}
                  </Link>
                ))}
              </div>
              <input
                type='text'
                placeholder='Enter You Email'
                className='mt-10 mb-4  w-4/5 p-3 rounded-sm outline-none text-black '
              />
              <div className='main-btn '>Subscribe</div>
            </div>
            {/*End Info */}
          </div>
        </Container>
      </div>
      <div className='text-center bg-white py-5'>
        <p className=''>Copyright 2024 Ermili Mohamed</p>
      </div>
    </footer>
  );
}
