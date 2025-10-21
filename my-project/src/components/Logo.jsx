const LogoBar = () => (
  <section className="bg-white py-12 flex justify-center items-center w-full">
    <div className="logo-container flex justify-center items-center w-full p-10">
      <div className="flex justify-around w-500">
        <img
          src="./src/assets/logo1.png"
          alt="The Ridge Realty Group"
          className="w-[110px] h-auto object-contain"
        />
        <img
          src="./src/assets/logo2.png"
          alt="Equal Housing Opportunity"
          className="w-[110px] h-auto object-contain"
        />
        <img
          src="./src/assets/logo3.png"
          alt="Realtor"
          className="w-[110px] h-auto object-contain"
        />
        <img
          src="./src/assets/logo4.png"
          alt="Pahrump Chamber of Commerce"
          className="w-[110px] h-auto object-contain"
        />
      </div>
    </div>
  </section>
);

export default LogoBar;
