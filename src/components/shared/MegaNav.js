import { MdHome, MdOutlineArrowDropDown } from "react-icons/md";
import Item1 from "./MegaNav/Item1";
import "./style.css";
import { TiArrowSortedDown } from "react-icons/ti";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AboutMenu from "./MegaNav/AboutMenu";
import ToursMenu from "./MegaNav/ToursMenu";
import PropertyMenu from "./MegaNav/PropertyMenu";
import RentalsMenu from "./MegaNav/RentalsMenu";
import AccommodationMenu from "./MegaNav/AccommodationMenu";

const MegaNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className=" container  z-20   font-bold text-black   shadow-b-lg mx-auto  ">
        <div className="  flex gap-4   ">
          <div className="  ">
            <Link href="/" className="  ">
              {/* <img src={logo} alt="" className="w-16 lg:w-18" /> */}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex uppercase">
            <nav>
              <ul className="flex items-center justify-center font-semibold gap-1  ">
                <li className="relative group px-3 py-2 border-b-2 border-transparent  hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/"
                    className={` rounded-full cursor-pointer  ${
                      pathname === "/" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <MdHome /> <p>Home </p>
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/about" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>About us</p> <TiArrowSortedDown />
                    </span>
                  </Link>
                  <AboutMenu />
                </li>
                <li className="relative group px-3 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Tours & Travels </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                  <ToursMenu />
                </li>
                <li className="relative group px-3 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Property </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                  <PropertyMenu />
                </li>
                <li className="relative group px-3 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Rentals </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                  <RentalsMenu />
                </li>
                <li className="relative group px-3 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Accommodation and transportation </p>{" "}
                      <TiArrowSortedDown />
                    </span>
                  </Link>
                  <AccommodationMenu />
                </li>
                <li className="relative group px-3 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-brandColor ">
                  <Link
                    href="/contact"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/contact" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Contact us </p>{" "}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </div>
  );
};

export default MegaNav;
