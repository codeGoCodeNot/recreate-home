import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => (
  <section className="bg-white py-16 w-full mt-10">
    <h2 className="text-4xl text-[#9e7c7c] font-[Cinzel] mb-25 text-center">
      CALL OR VISIT
    </h2>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-16 max-w-[1200px] mx-auto px-4">
      {/* Left: Form */}
      <div className="max-w-md w-full mx-auto mb-12 lg:mb-0 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h3 className="text-xl font-semibold mb-8">Send Message</h3>
        <form className="flex flex-col gap-8 w-full">
          <div className="w-full">
            <label className="block mb-2 text-gray-700 text-left lg:text-left">
              Name
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#9e7c7c] bg-transparent"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-gray-700 text-left lg:text-left">
              Email*
            </label>
            <input
              type="email"
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#9e7c7c] bg-transparent"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-gray-700 text-left lg:text-left">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#9e7c7c] bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-[160px] mx-auto bg-gray-200 text-gray-700 py-2 rounded-full font-semibold mt-2 hover:bg-[#e3dbdb] transition-all cursor-pointer"
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
      <div className="max-w-md w-full mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#455A64] w-full text-white py-3 px-6 rounded-full font-semibold mb-8 hover:bg-[#263238] transition-all"
        >
          <FaWhatsapp size={22} className="inline" />
          Message us on WhatsApp
        </a>
        <div className="mb-6 w-full">
          <div className="font-semibold text-lg mb-2">
            Marci Metzger - THE RIDGE REALTY GROUP
          </div>
          <div className="text-gray-700 mb-2">
            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
          </div>
          <a href="tel:2069196886" className="text-[#9e7c7c] font-medium">
            (206) 919-6886
          </a>
        </div>
        <div className="w-full">
          <div className="font-semibold text-lg mb-2">Office Hours</div>
          <div className="mb-2">
            Open today{" "}
            <span className="text-[#9e7c7c]">08:00 am – 07:00 pm</span>
          </div>
          <div className="mb-2">
            Open daily &nbsp; <span>8:00 am – 7:00 pm</span>
          </div>
          <div className="text-gray-700 text-sm mt-2">
            Appointments outside office hours available upon request. Just call!
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
