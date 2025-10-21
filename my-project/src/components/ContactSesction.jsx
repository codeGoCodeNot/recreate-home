import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => (
  <section className="bg-white pt-20 pb-24 w-full">
    {/* Heading */}
    <h2 className="text-4xl text-[#9e7c7c] font-serif mb-16 text-center tracking-wide">
      CALL OR VISIT
    </h2>
    {/* Main Grid */}
    <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-24 gap-10 max-w-5xl mx-auto px-4">
      {/* Left: Form */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-8 text-center">Send Message</h3>
        <form className="flex flex-col gap-8 w-full">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#9e7c7c] bg-transparent"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email*
            </label>
            <input
              type="email"
              required
              className="w-full border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#9e7c7c] bg-transparent"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#9e7c7c] bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-[160px] mx-auto bg-[#e9ecef] text-gray-700 py-2 rounded-full font-semibold mt-2 hover:bg-[#dde0e3] transition-all cursor-pointer"
          >
            SEND
          </button>
        </form>
        <div className="mt-4 text-xs text-gray-500 text-center w-full">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
      {/* Right: Info */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#55676b] w-full py-3 px-6 rounded-full font-semibold mb-10 text-white hover:bg-[#455A64] transition-all"
        >
          <FaWhatsapp size={22} className="inline" />
          Message us on WhatsApp
        </a>
        <div className="mb-6 w-full text-center">
          <div className="font-semibold text-lg mb-2">
            Marci Metzger - THE RIDGE REALTY GROUP
          </div>
          <div className="text-[#374151] mb-2">
            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
          </div>
          <a href="tel:2069196886" className="text-[#b08585] font-medium">
            (206) 919-6886
          </a>
        </div>
        <div className="w-full text-center">
          <div className="font-semibold text-lg mb-2">Office Hours</div>
          <div className="mb-2">
            Open today{" "}
            <span className="text-[#b08585]">08:00 am – 07:00 pm</span>
          </div>
          <div className="mb-2">
            Open daily{" "}
            <span className="ml-2 text-black">8:00 am – 7:00 pm</span>
          </div>
          <div className="text-[#374151] text-sm mt-2">
            Appointments outside office hours available upon request. Just call!
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
