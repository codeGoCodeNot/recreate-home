import profileImg from "../assets/profile.webp";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import landscape from "../assets/landscape.jpg"; // <-- import bg image

const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${landscape})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "800px",
          position: "relative",
        }}
      >
        <div className="absolute inset-20 flex flex-col items-center justify-end text-white">
          <div className="text-lg tracking-widest mb-4 text-center font-light">
            MARCI METZGER - THE RIDGE REALTY GROUP
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-center">
            PAHRUMP REALTOR
          </h1>
          <button className="bg-white text-black px-8 py-3 rounded-full shadow font-semibold tracking-widest text-sm hover:bg-gray-200 transition cursor-pointer">
            CALL NOW
          </button>
        </div>
      </section>
      <section className="bg-gray-950 w-full h-[800px] flex flex-col justify-around items-center py-4">
        <h1 className="text-white text-3xl font-[Cinzel]">MARCI METZGER</h1>
        <img
          className="w-[360px] h-[360px] rounded-full"
          src={profileImg}
          alt="MARCI METZGER"
        />
        <h1 className="text-white text-2xl text-center">
          REALTOR FOR NEARLY 3 DECADES!
        </h1>
        <h1 className="text-white ">206-919-6886</h1>
      </section>
      <section className="w-full h-full flex justify-center flex-col items-center">
        <h1 className="text-3xl font-[Cinzel] text-center mt-25">
          GET IT SOLD
        </h1>
        <div className="container w-full flex justify-center mt-25">
          <ul className="grid-container list-none grid grid-cols-2 grid-rows-3 mb-10 text-lg">
            <li className="one flex justify-center">
              <img src={image1} alt="Top Residential Sales" />
            </li>
            <li className="two flex flex-col items-center justify-center gap-10 line leading-[2]">
              <h1 className="text-xl font-bold">
                Top Residential Sales Last 5 Years
              </h1>
              <h3>
                We helped nearly 90 clients in 2021, and closed 28.5 million in
                sales! Our team works hard everyday to grow and learn, so that
                we may continue to excel in our market. Our clients deserve our
                best, & we want to make sure our best is better every year.
              </h3>
            </li>
            <li className="four flex flex-col items-center justify-center gap-10 line leading-[2]">
              <h1 className="text-xl font-bold">Don't Just List it...</h1>
              <h3>
                Get it SOLD! We exhaust every avenue to ensure our listings are
                at the fingertips of every possible buyer, getting you top
                dollar for your home.
              </h3>
            </li>
            <li className="three flex justify-center">
              <img src={image2} alt="Get it SOLD" />
            </li>
            <li className="five flex justify-center">
              <img src={image3} alt="Guide to Buyers" />
            </li>
            <li className="six flex flex-col items-center justify-center gap-10 line leading-[2]">
              <h1 className="text-xl font-bold">Guide to Buyers</h1>
              <h3>
                Nobody knows the market like we do. Enjoy having a pro at your
                service. Market analysis, upgrades lists, contractors on speed
                dial, & more!
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
