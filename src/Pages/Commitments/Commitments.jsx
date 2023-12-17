/* eslint-disable react/no-unescaped-entities */
import { FaChevronRight } from "react-icons/fa";
import { VscWorkspaceTrusted, VscVerified } from "react-icons/vsc";
import { TbTruckReturn } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { GiTreeBranch } from "react-icons/gi";

const Commitments = () => {
  return (
    <div>
      <div
        role="button"
        className="bg-green-600 md:flex hidden justify-between text-white font-semibold py-2 px-5"
      >
        <h3 className="flex items-center gap-2">
          <VscWorkspaceTrusted /> UrbanHaven's Commitments
        </h3>
        <h3 className="flex items-center gap-2">
          See All <FaChevronRight />
        </h3>
      </div>

      <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8 py-3 bg-orange-200 px-5">
        <div className="text-start border-r-2">
          <h3 className="flex items-center gap-2 text-green-600 font-bold">
            <VscVerified /> Free Shipping
          </h3>
          <p>Time-limited offer</p>
        </div>
        <div className="text-start border-r-2">
          <h3 className="flex items-center gap-2 text-green-600 font-bold">
            <TbTruckReturn />Free Returns
          </h3>
          <p>Within 90 days</p>
        </div>
        <div className="text-start border-r-2">
          <h3 className="flex items-center gap-2 text-green-600 font-bold">
            <MdSecurity />Security & Privacy
          </h3>
          <p>Safe Payments</p>
        </div>
        <div className="text-start border-r-2">
          <h3 className="flex items-center gap-2 text-green-600 font-bold">
            <FaSackDollar /> Price Adjustment
          </h3>
          <p>Within 30 days</p>
        </div>
        <div className="text-start">
          <h3 className="flex items-center gap-2 text-green-600 font-bold">
            <GiTreeBranch />Sustainability
          </h3>
          <p>Tree planting commitment</p>
        </div>
      </div>
      <div className="py-2 bg-orange-400"></div>
    </div>
  );
};

export default Commitments;
