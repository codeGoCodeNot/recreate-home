import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const LogoBar = () => (
  <section className="bg-white py-12 flex justify-center items-center w-full">
    <div className="logo-container flex justify-center items-center w-full p-10">
      <div className="logo flex justify-around w-500">
        <img
          src={logo1}
          alt="The Ridge Realty Group"
          className="w-[110px] h-auto object-contain"
        />
        <img
          src={logo2}
          alt="Equal Housing Opportunity"
          className="w-[110px] h-auto object-contain"
        />
        <img
          src={logo3}
          alt="Realtor"
          className="w-[110px] h-auto object-contain"
        />
        <img
          src={logo4}
          alt="Pahrump Chamber of Commerce"
          className="w-[110px] h-auto object-contain"
        />
      </div>
    </div>
  </section>
);

export default LogoBar;
