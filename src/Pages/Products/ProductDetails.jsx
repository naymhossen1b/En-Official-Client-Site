import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import { Rate } from "antd";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const ProductDetails = () => {
  const [value, setValue] = useState(3);

  const [products] = UseProducts();
  const { id } = useParams();
  const details = products?.find((item) => item._id === id);

  return (
    <div className="py-8 grid gap-5 grid-cols-1 md:grid-cols-12">
      {/*  Images Section */}
      <div className=" col-span-4">
        <img className="w-full mx-auto" src={details?.product_image} alt="" />
      </div>
      {/*  Middle Text section */}
      <div className=" col-span-5">
        <h1 className="text-xl font-medium">{details?.product_title}</h1>
        <h1 className="text-xl font-medium">{details?.product_details}</h1>
        <p className="text-sm">Powered by - {details?.product_brand_name}</p>
        <a className="font-medium py-1 text-orange-700" target="_blank" rel="noreferrer" href="https://www.apple.com">
          Visit the {details?.product_brand_name} Store
        </a>
        <div className="mt-2">
          <div className="flex items-center gap-1">
            <h4>{details?.product_ratings}</h4>
            <Rate onChange={setValue} value={value} />
          </div>
        </div>
        <p className="text-sm py-3 text-green-500">
          {details?.product_sold_quantity}K+
          <span className="text-black">bought in past month</span>
        </p>
        <hr />
        <div className="py-8">
          <button className="bg-red-600 text-white font-bold rounded-md py-2 border-none px-3">
            Deal
          </button>
          <div className="flex text-center mt-3 gap-3">
            <p className="text-red-400">
              {details?.product_discount > 0 ? details?.product_discount + "% 0ff" : ""}
            </p>
              <h3 className="text-xl font-bold">${details?.product_price}</h3>
          </div>
          <div className="py-5">
            <h3 className="text-xl font-medium text-orange-500">Specifications :</h3>
            <div className="space-y-1 mt-3 font-medium">
                <p><span className="font-bold">Display: </span>{details?.product_full_specifications?.display}</p>
                <p><span className="font-bold">Cheap: </span>{details?.product_full_specifications?.processor}</p>
                <p><span className="font-bold">Camera: </span>{details?.product_full_specifications?.camera}</p>
                <p><span className="font-bold">Storage: </span>{details?.product_full_specifications?.storage}</p>
            </div>
          </div>
        <hr />
        </div>
      </div>
      {/*  Buy now & price Section */}
      <div className="col-span-3 rounded-md p-2">
        <h3 className="text-xl">${details?.product_price}</h3>
        <div className="py-2">
          <h2>
            {details?.product_stock === true ? (
              <h3 className="flex text-green-600 items-center gap-1 font-medium">In Stock</h3>
            ) : (
              <h3 className="flex text-red-600 items-center gap-1 font-medium">Stock Out</h3>
            )}
          </h2>
        </div>
        <div className="flex items-center justify-evenly font-medium">
          <div className="flex items-center gap-2">
            <p>20</p>
            <p role="button" className="text-green-600 text-xl">
              +
            </p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-red-600 text-xl" role="button">
              -
            </p>
            <p>0</p>
          </div>
        </div>
        <div className="py-8 w-11/12 mx-auto space-y-3">
          <div className="flex gap-5 items-center justify-center border font-medium px-1 py-2 rounded-full border-orange-600">
            <button>Add to Cart</button>
            <FaCartPlus className="text-xl text-orange-500" />
          </div>
          <div className="flex gap-5 items-center justify-center border font-medium px-1 py-2 rounded-full border-green-600">
            <button>Buy Now</button>
            <HiOutlineEmojiHappy className="text-xl text-green-500" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductDetails;
