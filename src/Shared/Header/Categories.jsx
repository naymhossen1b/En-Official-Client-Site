/* eslint-disable react/no-unescaped-entities */

import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Categories = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="btn" className="">
          <NavLink className="flex items-center gap-1">
            Categories <FaChevronDown />
          </NavLink>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[10] menu shadow bg-base-100 indent-px rounded-md w-56"
        >
          <section className="flex menu items-center">
            <div className="menu menu-dropdown  dropdown-hover p-2 text-black">
              <Link className="flex hover:bg-gray-100 items-center rounded-md p-2 justify-between w-full">
                Featured <FaChevronRight />
              </Link>
              <Link className="flex items-center hover:bg-gray-100 rounded-md p-2 justify-between w-full">
                Home & Kitchen <FaChevronRight />
              </Link>
              <Link className="flex hover:bg-gray-100 items-center rounded-md p-2 justify-between w-full">
                Women's Curve Clothing <FaChevronRight />
              </Link>
              <Link className="flex items-center hover:bg-gray-100 rounded-md p-2 justify-between w-full">
                Women's Shoes <FaChevronRight />
              </Link>
              <Link className="flex hover:bg-gray-100 items-center rounded-md p-2 justify-between w-full">
                Women's Lingerie & lounge <FaChevronRight />
              </Link>
              <Link className="flex items-center hover:bg-gray-100 rounded-md p-2 justify-between w-full">
                Men's Clothing <FaChevronRight />
              </Link>
              <Link className="flex hover:bg-gray-100 items-center rounded-md p-2 justify-between w-full">
                Men's Shoes <FaChevronRight />
              </Link>
              <Link className="flex items-center hover:bg-gray-100 rounded-md p-2 justify-between w-full">
                Men's Bag & Tal <FaChevronRight />
              </Link>
            </div>
            <div>
                <p>naym hossen</p>
            </div>
          </section>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
