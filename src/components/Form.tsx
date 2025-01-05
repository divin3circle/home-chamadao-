type FormProps = {
  title: string;
  value: string;
  icon: string;
};

function Card({ formItem }: { formItem: FormProps }) {
  return (
    <div className="flex items-center gap-2 w-[300px]">
      <img src={formItem.icon} alt={formItem.title} className="w-10 h-10" />
      <div className="flex flex-col">
        <h1 className="font-titles font-bold text-sm">{formItem.title}</h1>
        <h1 className="font-titles text-base">{formItem.value}</h1>
      </div>
    </div>
  );
}

function Form() {
  const formItems: FormProps[] = [
    {
      title: "Location",
      value: "Nairobi, Kenya",
      icon: "/public/location.svg",
    },
    {
      title: "Phone",
      value: "+254 701 838 690",
      icon: "/public/phone.svg",
    },
    {
      title: "Email",
      value: "info@thechamadao.com",
      icon: "/public/mail.svg",
    },
    {
      title: "Twitter",
      value: "@TheChamaDAO",
      icon: "/public/x.svg",
    },
  ];
  const handleSubmit = () => {};
  return (
    <div className="mt-20 max-w-[1040px] my-0 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-white font-titles w-[11.5rem] bg-[#363636] p-1 text-3xl mt-8 font-bold">
        Contact Us
      </h1>
      <div className="bg-gradient-to-r from-[#89D3DC] to-[#7FC786] mt-8 flex flex-col md:flex-row md:justify-between w-full md:w-3/4 py-12 px-12 rounded-2xl items-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          {formItems.map((item) => (
            <div key={item.title}>
              <Card formItem={item} />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-10">
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
            <label className="font-titles font-bold text-sm">MESSAGE</label>
            <textarea
              placeholder="Tell us something"
              rows={5}
              className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
            />
          </div>
          <button
            className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
            onClick={() => handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
