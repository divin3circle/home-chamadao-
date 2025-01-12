import { openModal } from "../../utils/modalFunctions";
function Hero() {
  return (
    <div className="mx-auto my-0 to-[#89D3DC] from-[#7FC786] bg-gradient-to-b md:h-[85dvh] lg:max-w-[1070px] rounded-b-[63px] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center md:gap-1 md:-mb-20 mt-24 md:mt-0">
        <div className="md:mx-8 lg:pt-0 mb-4 md:mb-0 md:px-12">
          <h1 className="text-white rounded font-body bg-[#363636] text-[2.8rem] md:text-5xl lg:text-6xl w-full lg:w-[500px] md:w-[400px] my-2 font-bold">
            A borderless and
          </h1>
          <h1 className="text-white rounded font-body bg-[#363636] text-[2.8rem] md:text-5xl lg:text-6xl w-full lg:w-[480px] md:w-[380px] my-2 font-bold">
            trustless saving
          </h1>
          <h1 className="text-white rounded font-body bg-[#363636] text-[2.8rem] md:text-5xl lg:text-6xl w-full lg:w-[430px] md:w-[350px] my-2 font-bold">
            platform made
          </h1>
          <h1 className="text-white rounded font-body bg-[#363636] text-[2.8rem] md:text-5xl lg:text-6xl w-full lg:w-[380px] md:w-[330px] my-2 font-bold">
            for everyone
          </h1>
        </div>
        <div className="flex justify-center items-center md:mt-16">
          <img
            src="/hero.svg"
            alt="Hero"
            className="h-[400px] md:w-[400px] w-auto"
          />
        </div>
      </div>
      <p className="text-black font-titles p-1 text-sm md:w-[50%] mx-10 font-light px-10">
        Join the revolution in communal financial freedom with ChamaDAO — a
        decentralized platform inspired by Kenya’s trusted chamas.
      </p>
      <div className="flex justify-center md:justify-start items-center md:items-start mt-4">
        <button
          className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mx-8 mt-4 w-[162px] mb-4 md:mb-0"
          onClick={() => openModal("joinModal")}
        >
          Download App
        </button>
      </div>
    </div>
  );
}

export default Hero;
