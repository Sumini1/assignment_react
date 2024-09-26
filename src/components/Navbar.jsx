import { useState } from "react";
import { RxAvatar } from "react-icons/rx";

const Navbar = ({ navbar}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchVisible(!isSearchVisible); 
  };

  return (
    <nav className="sticky top-0 z-10 bg-white border-gray-200 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-3 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img src="/public/logoms1.png" alt="Logo" className="w-16 h-10" />
          <span className="text-xl font-bold font-[poppins]">
            <h1>Madinah salam</h1>
          </span>
        </a>

        {/* Tombol hamburger untuk mobile dan avatar */}
        <div className="flex items-center md:order-2">
          {/* Tombol hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-controls="navbar-search"
            aria-expanded={isMenuOpen ? "true" : "false"}
            className="md:hidden text-gray-400 hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-2.5 ml-3"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>

          {/* Avatar */}
          <RxAvatar className="w-10 h-10 ml-3" />
        </div>

        {/* Search box */}
        <div
          className={`relative w-full md:w-auto ${
            isSearchVisible || window.innerWidth >= 768 ? "block" : "hidden"
          }`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Menu utama di dalam hamburger */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium text-center md:flex-row md:space-x-8 md:mt-0">
            {navbar.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 font-bold text-md"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
