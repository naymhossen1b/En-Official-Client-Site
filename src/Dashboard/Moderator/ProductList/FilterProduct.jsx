import { Divider } from "antd";
import { FaFilter } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";

const FilterProduct = () => {
  return (
    <>
      <div className="flex items-center gap-4 justify-end px-10">
        <FaFilter className="text-xl" />
        <button className="flex items-center gap-2 bg-lime-800 text-white rounded-md px-3 font-bold py-2">
          <HiPlusSm />
          Add Product
        </button>
      </div>
      <Divider />
    </>
  );
};

export default FilterProduct;
