/* eslint-disable react/prop-types */
import { Radio } from "antd";
import { FaTrashAlt } from "react-icons/fa";

const CartProduct = ({ product }) => {
  const { product_title, product_image, product_price, product_brand_name, product_stock } =
    product || {};

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {/* Image section */}
        <div className="col-span-3">
          <div className="flex items-center">
            <Radio />
            <img className="w-full mx-auto" src={product_image} alt="" />
          </div>
        </div>
        {/* Text section */}
        <div className="col-span-7">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{product_title}</h2>
            <p className="text-sm">Brand: {product_brand_name}</p>
          </div>
          <div className="py-2">
            <h2>
              {product_stock === true ? (
                <h3 className="flex text-green-600 items-center gap-1 font-medium">In Stock</h3>
              ) : (
                <h3 className="flex text-red-600 items-center gap-1 font-medium">Stock Out</h3>
              )}
            </h2>
          </div>
          <div className=" flex items-center font-bold space-x-5 py-3">
            <div className="flex items-center justify-evenly space-x-2 font-medium">
              <div className="flex items-center gap-2">
                <p> 20 </p>
                <p role="button" className="text-green-600 text-xl">
                  +
                </p>
              </div>
              <div>
                <p> Quantity </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-red-600 text-xl" role="button">
                  -
                </p>
                <p>0</p>
              </div>
            </div>
            <div className="text-2xl text-red-500" role="button">
              <FaTrashAlt />
            </div>
          </div>
        </div>
        {/* price section */}
        <div className="col-span-2">
          <p>${product_price}</p>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default CartProduct;
