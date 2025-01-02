interface Feature {
  id: number;
  title: string;
  icon: string;
  description: string;
}
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-[#F0F9F7] rounded-lg shadow-sm h-[320px] w-[300px]">
      <h1>{feature.title}</h1>
    </div>
  );
}
function Features() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Scalable and Efficient",
      icon: "/public/secure.svg",
      description:
        "Say goodbye to manual inefficiencies and embrace a fully automated system that scales with your chama.",
    },
    {
      id: 2,
      title: "Secure and Transparent",
      icon: "/public/scalable.svg",
      description:
        "Powered by blockchain, your contributions and transactions are safe and visible to all chama members.",
    },
    {
      id: 3,
      title: "Accessible to All",
      icon: "/public/accesible.svg",
      description:
        "Are you saving for emergencies or building wealth? ChamaDAO makes financial freedom a reality for everyone.",
    },
  ];
  return (
    <div className="mt-12 lg:max-w-[1040px] w-full mx-auto my-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-center font-body bg-[#363636] p-1 text-4xl lg:text-5xl w-full lg:w-[500px] md:w-[400px] mt-4 md:my-2 md:mt-0 font-bold">
          Why ChamaDAO?
        </h1>
        <p className="text-black text-center font-titles p-1 text-lg font-light mt-2 md:mt-4">
          Save, pool, and borrow funds directly with no intermediaries.
          Experience the future of efficient, secure, and scalable financial
          collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
