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
import { Badge } from "antd";
import useCart from "../../Hooks/UseCart";
import Account from "../../Auth/Account";

const Header = () => {
  const [cart] = useCart();

  return (
    <div>
      <div>
        <section></section>
        <section className="bg-orange-400 text-white py-5 px-5">
          <div className="flex justify-between items-center gap-5">
            <nav>
              <Link to="/">
                <img className="w-12 rounded-2xl" src={logo} alt="" />
              </Link>
            </nav>
            <nav className="lg:flex hidden text-sm items-center gap-3">
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
              <NavLink>
                <Account />
              </NavLink>
              <NavLink className="flex text-2xl items-center gap-1">
                <FaRocketchat />
              </NavLink>
              <NavLink className="flex items-center gap-1">
                <FaRegFlag className="text-2xl" />
                En
              </NavLink>
            </nav>
            <nav>
              <Link to="/carts">
                <div
                  role="button"
                  className="flex items-center gap-3 btn-ghost rounded-full hover:bg-orange-600 p-2"
                >
                  <Badge count={cart.length} className="absolute ml-3 -mt-9 border-none"></Badge>
                  <FaOpencart className="text-3xl" />
                </div>
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
