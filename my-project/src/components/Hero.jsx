const Hero = () => {
  return (
    <>
      <section className="bg-[url('./src/assets/landscape.jpg')] bg-cover bg-center bg-no-repeat w-full h-[800px] relative">
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
          src="./src/assets/profile.webp"
          alt="MARCI METZGER"
        />
        <h1 className="text-white text-2xl">REALTOR FOR NEARLY 3 DECADES!</h1>
        <h1 className="text-white ">206-919-6886</h1>
      </section>
    </>
  );
};

export default Hero;
