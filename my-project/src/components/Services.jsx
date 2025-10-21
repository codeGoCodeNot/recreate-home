const Services = () => (
  <section className="bg-white py-16 w-full">
    <h2 className="text-4xl text-[#9e7c7c] font-[Cinzel] mb-12 text-center">
      Our Services
    </h2>
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-[1800px] mx-auto px-4">
      {/* Service 1 */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src="./src/assets/service1.png"
          alt="Real Estate Done Right"
          className="w-[320px] h-[320px] xl:w-[420px] xl:h-[420px] object-cover mb-8"
        />
        <h3 className="text-xl xl:text-2xl font-semibold mb-4 text-center">
          Real Estate Done Right
        </h3>
        <p className="text-gray-700 text-center xl:text-lg">
          Nervous about your property adventure? Don’t be. Whether you're
          getting ready to buy or sell your residence, looking at investment
          properties, or just curious about the markets, our team ensures you
          get the best experience possible!
        </p>
      </div>
      {/* Service 2 */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src="./src/assets/service2.png"
          alt="Commercial & Residential"
          className="w-[320px] h-[320px] xl:w-[420px] xl:h-[420px] object-cover mb-8"
        />
        <h3 className="text-xl xl:text-2xl font-semibold mb-4 text-center">
          Commercial & Residential
        </h3>
        <p className="text-gray-700 text-center xl:text-lg">
          Large or small, condo or mansion, we can find it and get at the price
          that's right. Fixer-uppers? Luxury? We can help with all of it! We
          live, work, and play in this community. Happy to help you find where
          to put you hard-earned dollars.
        </p>
      </div>
      {/* Service 3 */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src="./src/assets/service3.png"
          alt="Rely on Expertise"
          className="w-[320px] h-[320px] xl:w-[420px] xl:h-[420px] object-cover rounded-full mb-8"
        />
        <h3 className="text-xl xl:text-2xl font-semibold mb-4 text-center">
          Rely on Expertise
        </h3>
        <p className="text-gray-700 text-center xl:text-lg">
          If you have questions about affordability, credit, and loan options,
          trust us to connect you with the right people to get the answers you
          need in a timely fashion. We make sure you feel confident and educated
          every step of the way.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
