import Banner from "@/components/Banner";
import Link from "next/link";

// export default function ServicesPage() {
//   return <div>
//     <Banner title="Our Services" />
//   </div>;
// }

import React from 'react';
import { IconType } from "react-icons";
import { FaWrench, FaTruck, FaBicycle, FaClock } from 'react-icons/fa';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Icon className="w-12 h-12 text-[--primary] mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: FaWrench,
      title: "Bicycle Repair",
      description: "Expert repair services for all types of bicycles, from basic tune-ups to complex repairs."
    },
    {
      icon: FaTruck,
      title: "Home Delivery",
      description: "Free delivery for all bicycle purchases within city limits. Fast and secure shipping nationwide."
    },
    {
      icon: FaBicycle,
      title: "Custom Builds",
      description: "Create your dream bike with our custom build service. Choose every component to match your style and needs."
    },
    {
      icon: FaClock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your cycling needs and inquiries."
    }
  ];

  return (
    <section>
      <Banner title="Our Services" className="!mb-0" />
      <div className="bg-gray-100 min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Enhancing your cycling experience with top-notch services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Need a Custom Service?</h2>
            <p className="text-xl text-gray-600 mb-8">We are here to accommodate your unique cycling needs.</p>
            <button className="bg-[--primary] hover:bg-[--secondary] text-white font-bold py-3 px-6  transition duration-300">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;