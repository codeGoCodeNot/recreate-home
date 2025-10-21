import React, { useState, useEffect, useRef } from "react";

const photos = [
  "./src/assets/photo1.png",
  "./src/assets/photo2.png",
  "./src/assets/photo3.png",
  "./src/assets/photo4.png",
  "./src/assets/photo5.png",
  "./src/assets/photo6.png",
];

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + photos.length) % photos.length);
  const next = () => setCurrent((current + 1) % photos.length);

  return (
    <section className="bg-[#181818] py-16 flex flex-col items-center">
      <h2 className="text-4xl text-[#e5d3c3] font-[Cinzel] mb-10 text-center">
        Photo Gallery
      </h2>
      <div
        className="
          relative flex items-center justify-center
          w-full
          max-w-[900px]
          h-[320px] sm:h-[400px] md:h-[500px]
        "
      >
        {/* Left overlay + button */}
        <div className="absolute left-0 top-0 h-full w-[40px] sm:w-[60px] md:w-[80px] bg-black bg-opacity-50 flex items-center justify-center z-10">
          <button
            onClick={prev}
            className="text-white text-2xl sm:text-3xl p-2 hover:bg-gray-700 rounded-full cursor-pointer"
          >
            &#60;
          </button>
        </div>
        {/* Main image */}
        <img
          src={photos[current]}
          alt={`photo${current + 1}`}
          className="
            object-cover
            w-full
            h-[320px] sm:h-[400px] md:h-[500px]
            mx-auto block
            rounded
            transition-all
            duration-300
          "
        />
        {/* Right overlay + button */}
        <div className="absolute right-0 top-0 h-full w-[40px] sm:w-[60px] md:w-[80px] bg-black bg-opacity-50 flex items-center justify-center z-10">
          <button
            onClick={next}
            className="text-white text-2xl sm:text-3xl p-2 hover:bg-gray-700 rounded-full cursor-pointer"
          >
            &#62;
          </button>
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 sm:gap-4 mt-8 overflow-x-auto">
        {photos.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`thumb${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`w-16 h-10 sm:w-24 sm:h-16 object-cover cursor-pointer border-2 ${
              idx === current ? "border-[#e5d3c3]" : "border-transparent"
            }`}
            style={{ transition: "border 0.2s" }}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
