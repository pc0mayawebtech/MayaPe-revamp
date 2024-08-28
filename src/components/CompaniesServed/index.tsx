const logos = [
  "/Fincafe.png",
  "/dcp.png",
  "/rooh.png",
  "/webwise.png",
  "/ladder.png",
];

const CompaniesServed = () => {
  return (
    <div className="sm:mb-20">
      <h2 className="mb-10 sm:mb-5 text-xl text-center sm:text-3xl font-normal dark:text-white text-black">
        Brands trust the expertise of{" "}
        <span className="font-medium text-sky-500"> MayaPe</span>
      </h2>
      <div className="flex w-11/12 sm:w-3/5 backdrop-blur-lg justify-center mx-auto rounded-lg bg-transparent border-2 border-gray-300/20 shadow-lg py-4 overflow-hidden">
        <div
          className="flex gap-8"
        >
          {[...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center flex-none h-24">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mix-blend-overlay w-24 sm:w-32 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesServed;
