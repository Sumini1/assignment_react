


import React from "react";
import { BiTab } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Navigation items
  const footer1 = ["Home", "About", "Program", "Contact",];
  const footer2 = ["S1 Resmi MS", "DBA MS", "Ilmu Syariah", "Kursus Madinah Salam", "Diploma Qur'an"];

  
  // Social media items with name and icon component
  const socialMedia = [
    { name: "Facebook", icon: FaFacebook, link: "#" },
    { name: "Instagram", icon: FaInstagram, link: "#" },
    { name: "Twitter", icon: FaTwitter, link: "#" },
  ];
  

  // Logo section with name, phone, and address
  const logoDetails = {
    name: "Madinah Salam",
    logo: "/public/logoms1.png",
    phone: "081 546 5552 123",
    address:
      "Jl. Radar Auri No. 9 RT/RW 013/005, Kel. Cibubur, Kec. Ciracas, Jakarta Timur.",
  };

  return (
    <footer id="contact" className="flex flex-col items-center justify-center py-10 mx-auto bg-white lg:p-10 lg:justify-start lg:items-start lg:-[-50px]">
      <div className="flex flex-col items-center justify-center px-4 mx-auto mt-5 lg:justify-start lg:items-start lg:flex-row lg:gap-10">
        <div className="flex flex-col justify-center gap-20 md:flex-row lg:gap-40">
          {/* Logo or Site Name */}
          <div className="flex flex-col items-center justify-center mb-6 md:mb-0 lg:mt-2">
            <h2 className="justify-start text-2xl font-bold lg:items-start lg:text-start lg:mt-1">
              {logoDetails.name}
            </h2>

            <img
              src={logoDetails.logo}
              alt="Logo Madinah Salam"
              className="w-40 h-40"
            />
            <div className="flex items-center gap-4 lg:justify-start">
              <BiTab />
              <p>{logoDetails.phone}</p>
            </div>
            <p className="mt-2 text-gray-500 w-[300px] text-center lg:text-start">
              {logoDetails.address}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center justify-center mb-6 lg:mt-5 md:mb-0 lg:justify-start lg:items-start mt-[-50px]">
            <h3 className="mb-4 text-lg font-semibold">Home</h3>
            <ul className="flex flex-col items-center justify-center space-y-2 lg:justify-start lg:items-start">
              {footer1.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center hover:text-gray-500"
                >
                  <a href="#" className="hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center justify-center mb-6 lg:mt-5 md:mb-0 lg:justify-start lg:items-start mt-[-50px]">
            <h3 className="mb-4 text-lg font-semibold">Program</h3>
            <ul className="flex flex-col items-center justify-center space-y-2 lg:justify-start lg:items-start">
              {footer2.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center hover:text-gray-500"
                >
                  <a href="#" className="hover:text-gray-700">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-center mb-6 md:mb-0 lg:mt-[-170px] mt-[-50px]">
            <h3 className="mb-4 text-lg font-semibold lg:mb-7">Ikuti Kami</h3>
            <div className="flex space-x-4">
              {socialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.link}
                  className="hover:text-gray-500"
                  aria-label={media.name}
                >
                  <media.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center flex-auto mx-auto mt-10 text-sm text-center">
        <p className="flex flex-row items-center justify-center">
          &copy; 2024 Madinah Salam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
