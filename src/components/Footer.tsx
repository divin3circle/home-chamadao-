import {
  IconBookFilled,
  IconBrandAppstore,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconChecklist,
} from "@tabler/icons-react";

function Footer() {
  return (
    <div className="h-[300px] bg-gradient-to-b from-[#404040] to-[#1A1A1A] mt-8 pt-16 md:pt-8 ">
      <div className="max-w-[1090px] my-0 mx-auto grid grid-cols-2 md:grid-cols-4 content-center px-2 gap-2 mt-8">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-[20px] w-[20px] ml-0"
            />
            <h1 className="font-titles font-bold text-white text-base ml-1">
              <span className="text-[#7FC786]">The</span>
              Chama
              <span className="text-[#7FC786]">DAO</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm font-titles">Copyright © 2025</p>
        </div>
        <div>
          <h1 className="text-white font-bold font-titles mb-4">Follow Us</h1>
          <div className="flex items-center gap-2">
            <IconBrandX size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Twitter
            </p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <IconBrandLinkedin size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Linkedin
            </p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <IconBrandGithub size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Github
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold font-titles mb-4">About</h1>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-titles my-2 hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Join ChamaDAO
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-titles my-2 hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Whitepaper
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-titles my-2 hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Our Story
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold font-titles mb-4">Resources</h1>
          <div className="flex items-center gap-2 cursor-pointer group">
            <IconBrandAppstore size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles my-2 group-hover:underline ease-in duration-150 group-hover:text-[#7FC786] transition-all">
              Download App
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <IconBookFilled size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles my-2 group-hover:underline ease-in duration-150 group-hover:text-[#7FC786] transition-all">
              Read our Blogs
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <IconChecklist size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles my-2 group-hover:underline ease-in duration-150 group-hover:text-[#7FC786] transition-all">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
