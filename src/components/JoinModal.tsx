import { IconX } from "@tabler/icons-react";
import { closeModal } from "../../utils/modalFunctions";

function JoinModal() {
  function handleSignUp() {
    closeModal("joinModal");
  }
  return (
    <dialog
      id="joinModal"
      className="modal border-none rounded-2xl backdrop-blur-xl bg-blend-darken bg-white/50 "
    >
      <div className="modal-box flex flex-col md:flex-row md:gap-4 ">
        <div className="flex flex-col flex-3 items-center justify-center md:w-[40%] bg-gradient-to-b from-[#89D3DC] to-[#7FC786]">
          <div className="px-4">
            <h1 className="text-white font-titles w-[7.5rem] bg-[#363636] p-1 text-2xl mt-8 font-bold">
              Join The
            </h1>
            <h1 className="text-white font-titles w-36 bg-[#363636] p-1 text-xl mt-1 font-bold">
              Waiting List
            </h1>
          </div>
          <img src="/join.svg" className="object-contain h-full" alt="join" />
        </div>
        <div className="flex flex-col flex-1 px-4 z-50">
          <div className="w-full flex flex-col relative">
            <IconX
              size={24}
              className="absolute top-5 right-5 cursor-pointer"
              onClick={handleSignUp}
            />
            <div className="md:mt-16 mt-12">
              <h1 className="font-titles md:text-lg font-extrabold">
                WE ARE LAUNCHING SOON! BE THE
              </h1>
              <h1 className="font-titles md:text-lg font-extrabold">
                FIRST TO EXPERIENCE CHAMADAO
              </h1>
            </div>
            <div className="">
              <div className="flex flex-col my-4">
                <label className="font-titles font-bold text-sm">NAME</label>
                <input
                  placeholder="Enter your name here"
                  type="text"
                  className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col my-4">
                <label className="font-titles font-bold text-sm">EMAIL</label>
                <input
                  placeholder="Your Email address"
                  type="email"
                  className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col my-4">
                <label className="font-titles font-bold text-sm">
                  TELEGRAM
                </label>
                <input
                  placeholder="Your Telegram handle"
                  type="text"
                  className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-1 items-center mt-2">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-success text-[#7FC786]"
              />
              <h1 className="text-[0.5rem] font-titles font-bold text-gray-500">
                BY SIGNING UP I{"'"}M AGREEING TO CHMADAO{"'"}S{" "}
                <a href="#" className="text-blue-500 underline">
                  TERMS {" & "} CONDITIONS
                </a>
              </h1>
            </div>
            <button
              className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4 my-8"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default JoinModal;
