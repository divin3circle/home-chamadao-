import user1 from "../../public/user1.svg";
import user2 from "../../public/user2.svg";
import user3 from "../../public/user3.png";
import user4 from "../../public/user4.svg";

function CTA() {
  const users = [user1, user2, user3, user4];
  return (
    <div className="flex md:flex-row flex-col items-center justify-between max-w-[1040px] my-0 mx-auto rounded-3xl bg-gradient-to-r to-[#89D3DC] from-[#7FC786] mt-8">
      <div className="px-4 my-8 flex-1 md:w-1/2 w-full">
        <h1 className="text-white font-titles bg-[#363636] p-1 text-3xl w-72 mt-4 md:my-2 md:mt-0 font-bold">
          Join ChamaDAO
        </h1>
        <h1 className="text-white font-titles bg-[#363636] p-1 text-3xl w-28 mt-1 md:my-2 md:mt-1 font-bold">
          Today
        </h1>
        <p className="font-titles text-base w-3/4 my-4">
          Take control of your financial future and build wealth with your
          community.
        </p>
        <div className="h-[50px] w-2/3 lg:w-1/2 bg-white rounded-[30px] my-2 flex flex-row items-center mx-4">
          <div className="flex flex-row items-center">
            {users.map((user, index) => (
              <img
                key={index}
                src={user}
                className="-ml-4 md:-ml-5  w-12 h-12"
                alt="user"
              />
            ))}
          </div>
          <p className="font-bold text-sm font-titles px-2">+10K Members</p>
        </div>
        <button className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4 mt-4">
          Sign Up
        </button>
      </div>

      <img src="/cta.svg" alt="Hero" className="h-full md:w-1/2 w-full" />
    </div>
  );
}

export default CTA;
