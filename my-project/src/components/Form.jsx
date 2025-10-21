const Form = () => {
  return (
    <div className="bg-[url('./src/assets/home.jpg')] bg-cover bg-center bg-no-repeat w-full h-[650px] relative mt-25">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <h1 className="w-full text-neutral-50 text-4xl font-[700] font-[Cinzel] absolute top-15 left-1/2 transform -translate-x-1/2 text-center">
        FIND YOUR DREAM HOME
      </h1>
      <div className="absolute left-1/2 bottom-[90px] transform -translate-x-1/2 z-20 w-full flex justify-center">
        <div className="bg-white shadow-2xl p-10 max-w-[900px] w-full">
          <form>
            <h1 className="text-4xl text-[#9e7c7c] font-[Cinzel] mb-8">
              SEARCH LISTINGS
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-6 mb-8">
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Location</label>
                <select className="w-full bg-gray-100 p-2 rounded-md">
                  <option>Any</option>
                </select>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Type</label>
                <select className="w-full bg-gray-100 p-2 rounded-md">
                  <option>Any</option>
                </select>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Sort By</label>
                <select className="w-full bg-gray-100 p-2 rounded-md">
                  <option>Any</option>
                </select>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Bedrooms</label>
                <select className="w-full bg-gray-100 p-2 rounded-md">
                  <option>Any Number</option>
                </select>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Baths</label>
                <select className="w-full bg-gray-100 p-2 rounded-md">
                  <option>Any Number</option>
                </select>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Min Price</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 rounded-md"
                />
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block mb-2">Max Price</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled
              className="mt-4 w-full bg-gray-200 text-gray-500 text-[1rem] font-semibold rounded-full py-4 cursor-not-allowed"
            >
              SEARCH NOW
            </button>
          </form>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[180px] bg-black"></div>
    </div>
  );
};

export default Form;
