import {
  FaOpencart,
  FaRegStar,
  FaRegThumbsUp,
  FaRocketchat,
  FaRegFlag,
  FaSearch,
} from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/assets/Simple Layout logo.png";
import Categories from "./Categories";
import Account from "../../Auth/Account";
import useCart from "../../Hooks/UseCart";
import { Badge } from "antd";
// import SmCategories from "./SmCategories";
const NavBar = () => {
  const [cart] = useCart();

  return (
    <div>
      <div className="navbar bg-orange-400 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-2 -ml-2 rounded-sm  z-[10] w-[300px] bg-white text-black"
            >
              <nav className="grid  items-center gap-3">
                <NavLink className="flex hover:bg-gray-200 items-center gap-1">
                  <FaRegThumbsUp />
                  Best Seller
                </NavLink>
                <NavLink className="flex hover:bg-gray-200 items-center gap-1">
                  <FaRegStar />5 Star-Rated
                </NavLink>
                <NavLink className="flex hover:bg-gray-200 items-center gap-1">
                  <IoMdHappy />
                  Happy Holiday
                </NavLink>
                <NavLink className="flex hover:bg-gray-200 items-center gap-1">New Arrival</NavLink>
                {/* <NavLink className="flex items-center gap-1"><SmCategories /></NavLink> */}
              </nav>
            </ul>
          </div>
          <Link to="/">
            <img className="md:w-12 w-8 rounded-2xl" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <nav className="flex items-center gap-4">
              <NavLink className="flex items-center gap-1">
                <FaRegThumbsUp />
                Best Seller
              </NavLink>
              <NavLink className="flex items-center gap-1">
                <FaRegStar />5 Star-Rated
              </NavLink>
              <NavLink className="flex items-center gap-1">
                <IoMdHappy />
                Happy Holiday
              </NavLink>
              <NavLink className="flex items-center gap-1">New Arrival</NavLink>
              <NavLink className="flex items-center gap-1">
                <Categories />
              </NavLink>
              <NavLink className="flex items-center gap-1">
                <div className="relative text-black ">
                  <input
                    type="text"
                    className="py-2 pl-8 pr-4 rounded-full focus:outline-none focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch />
                  </div>
                </div>
              </NavLink>
            </nav>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <NavLink>
              <Account />
            </NavLink>
            <NavLink className="flex text-2xl items-center gap-1">
              <FaRocketchat />
            </NavLink>
            <NavLink className="flex items-center gap-1">
              <FaRegFlag className="text-2xl border rounded-full p-[2px]" />
              En
            </NavLink>
          </div>
          <div
            role="button"
            className="flex items-center mr-3 btn-ghost rounded-full hover:bg-orange-600 p-2"
          >
            <Badge count={cart.length} className="absolute ml-3 -mt-9 border-none" />
            <FaOpencart className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
