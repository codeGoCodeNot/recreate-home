import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black pt-0 pb-8 w-full">
    {/* Google Map */}
    <div className="w-full flex justify-center items-center">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.0635330735254!2d-116.0185026847252!3d36.20907788006637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c5b1a46c0b87%3A0x9b1e7d8c7f7c7a8d!2sPahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1680279262416!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="w-full h-[400px] md:h-[500px]"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="flex flex-col items-center justify-center mt-[-4px] gap-5 py-2">
      <div className="flex gap-6 text-white text-2xl mt-6 mb-12">
        <a
          href="https://facebook.com/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://yelp.com/"
          aria-label="Yelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYelp />
        </a>
      </div>
      <div className="text-white text-md tracking-wide text-center mb-4">
        COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED
      </div>
      <div className="mb-2 flex flex-col items-center">
        <span className="text-[#ccc] text-sm mb-2">POWERED BY</span>
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="13" stroke="#00C9A7" strokeWidth="3" />
            <text
              x="15"
              y="21"
              textAnchor="middle"
              fill="#00C9A7"
              fontSize="14"
              fontFamily="monospace"
              fontWeight="bold"
            >
              CGCN
            </text>
          </svg>
          <span className="text-[#00C9A7] font-bold text-lg tracking-wide">
            CodeGoCodeNot
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
