import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    img: "/avatr1.png",
    name: "Ali",
    opinion: "Belajar di Madinah Salam sangat menyenangkan",
  },
  {
    img:"/avatar2.png",
    name: "Fatimah",
    opinion: "Semua kalangan bisa ikut belajar",
  },
  {
    img: "/avatr1.png",
    name: "Umar",
    opinion: "Waktu belajar flexsible dan hemat",
  },
  {
    img: "/avatar2.png",
    name: "Aisha",
    opinion: "Belajar bersama guru yang kompetent dibidangnya",
  },
];

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],

    appendDots: (dots) => (
      <div className="flex justify-center w-full mt-4">
        
        {/* Flex untuk memastikan dots di tengah */}
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="p-10 mx-auto bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 mt-[-120px] w-screen h-screen flex flex-col gap-y-10 lg:p-36 lg:mt-[-200px] ">
      <div className="flex flex-col items-center justify-center lg:mt-[-50px]">
        <h2 className="mb-6 text-2xl font-bold text-center lg:text-4xl font-[poppins] mt-20">
          Pendapat Orang tentang Madinah Salam
        </h2>
      </div>

      <Slider
        {...settings}
        className="flex items-center justify-center w-full px-2 mt-2 text-center"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full p-10 mx-auto text-center transition-transform duration-300 ease-in-out shadow-md mb-7 rounded-xl hover:scale-105 bg-gradient-to-r from-indigo-700 via-blue-700 to-green-700 lg:p-10 lg:gap-x-7 lg:justify-between lg:mx-auto lg:text-center lg:w-[300px] lg:h-[300px] lg:m-4"
          >
            <img
              src={testimonial.img}
              alt="Avatar"
              className="flex flex-col w-16 h-16 mx-auto mb-10 rounded-full lg:w-32 lg:h-32 lg:mb-5 lg:gap-6 lg:p-5"
            />
            <p className="text-lg italic font-[poppins]">{testimonial.opinion}"</p>
            <h3 className="mt-4 font-semibold font-[poppins]">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
