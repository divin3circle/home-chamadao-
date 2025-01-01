import { IconMenuDeep } from "@tabler/icons-react";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[20px] w-full lg:w-[70%] md:w-[90%] flex items-center justify-between py-4 mt-4 shadow-sm shadow-[#1a1a1a]">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-[30px] w-[30px] ml-4" />
        <h1 className="font-titles font-bold text-white text-2xl ml-2">
          <span className="text-[#7FC786]">The</span>
          Chama
          <span className="text-[#7FC786]">DAO</span>
        </h1>
      </div>
      <div className="items-center gap-2 hidden md:flex">
        <div>
          <button className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            About
          </button>
          <button className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            Contact
          </button>
          <button className=" text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
            Invest
          </button>
        </div>
        <button className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
          Sign Up
        </button>
      </div>
      <div className="flex md:hidden">
        <button className="text-white font-titles font-bold text-sm px-4 py-2 rounded-md mr-4">
          <IconMenuDeep size={24} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
