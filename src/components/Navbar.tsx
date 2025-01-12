import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { openModal } from "../../utils/modalFunctions";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <div className="bg-gradient-to-b from-[#404040] mx-2 to-[#1A1A1A] rounded-[20px] w-full lg:w-[70%] lg:max-w-[1000px] md:w-[90%] flex items-center justify-between py-4 mt-4 shadow-sm shadow-[#1a1a1a]">
      <Link to="/" className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-[30px] w-[30px] ml-4" />
        <h1 className="font-titles font-bold text-white text-2xl ml-2">
          <span className="text-[#7FC786]">The</span>
          Chama
          <span className="text-[#7FC786]">DAO</span>
        </h1>
      </Link>
      <div className="items-center gap-2 hidden md:flex">
        <div>
          <a
            href="#about"
            className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
          >
            About
          </a>
          <Link
            to="/contact"
            className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
          >
            Contact Us
          </Link>
          <Link
            to="/invest"
            className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
          >
            Invest
          </Link>
        </div>
        <button
          className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
          onClick={() => openModal("joinModal")}
        >
          Sign Up
        </button>
      </div>
      <div className="flex md:hidden">
        <button
          className="text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
          onClick={toggleNavbar}
        >
          <IconMenuDeep size={24} />
        </button>
      </div>
      <div
        className={`backdrop-blur-lg h-screen w-full md:hidden flex flex-col fixed top-0 left-0 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-1 mx-1">
          <button className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-[30px] w-[30px] ml-4"
              />
              <h1 className="font-titles font-bold text-white text-2xl ml-2">
                <span className="text-[#7FC786]">The</span>
                Chama
                <span className="text-[#7FC786]">DAO</span>
              </h1>
            </div>
          </button>
          <div
            className="flex items-center justify-center md:hidden mt-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconX size={34} color="#7FC786" />
          </div>
        </div>
        <ul className="flex flex-col h-full items-center gap-12 mt-20 font-titles">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer"
          >
            About
          </a>
          <Link
            to="/contact"
            className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            className="font-semibold text-lg hover:border-b-2 border-[#7FC786] transition-all cursor-pointer"
            to="/invest"
          >
            Invest
          </Link>
        </ul>
        <div className="flex items-center justify-center my-8">
          <button
            className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
            onClick={() => openModal("joinModal")}
          >
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
