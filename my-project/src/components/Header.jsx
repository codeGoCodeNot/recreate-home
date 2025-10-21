import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import marciImg from "../assets/marci.png";

const navItems = ["HOME", "LISTINGS", "LET'S MOVE", "ABOUT US"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(!menuOpen);
  return (
    <header className="flex items-center justify-center relative">
      <button onClick={handleClick}>
        <RxHamburgerMenu
          className="hamburger-btn fabars left-50 top-1/2 -translate-y-1/2 absolute cursor-pointer"
          size={25}
          color="#7d6e6e"
        />
      </button>

      <img
        className="marci-img cursor-pointer"
        src={marciImg}
        alt="Marci Metzger"
      />
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-[430px] bg-[#f6f6f6] z-50 ">
          <div className="flex justify-between items-start px-8 pt-8">
            <div></div>
            <RxCross2
              size={25}
              className="cursor-pointer text-[#7d6e6e] absolute top-19 right-12"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <nav className="mt-12 px-8 flex flex-col gap-8 ml-12">
            {navItems.map((item) => (
              <span
                key={item}
                className={`text-[#7d6e6e]  text-md cursor-pointer ${
                  item === "HOME" ? "font-[650]" : "font-normal"
                }`}
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
