

import Faq from "./components/Faq";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import Program from "./components/Program";
import TentangMs from "./components/TentangMs";
import Footer from "./components/Footer";

const App = () => {
  const navbar = ["Home", "About", "Program", "Contact"];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar navbar={navbar}  />
      {/* Komponen lainnya */}
      <Banner />
      <Program />
      <TentangMs  />
      <Faq />
      <Carousel />
      <Footer  />
    </div>
  );
};

export default App;

