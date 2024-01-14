/* eslint-disable react/prop-types */
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import { BsEmojiTear } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import UseRating from "../../Hooks/UseRating";

const OrderProduct = ({ items }) => {
  const [rating] = UseRating();

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {items?.map((item) => (
          <div key={item._id} className="hover:rounded-md hover:shadow-xl">
            <Link to={`/productDetails/${item._id}`}>
              <img className="w-full py-5 mx-auto h-56" src={item.product_image} alt="" />
            </Link>
            <div className="absolute -mt-4 ml-[155px]">
              <h2>
                {parseFloat(item?.product_quantity) > 0 ? (
                  <h3 className="flex items-center text-sm gap-1 font-medium">
                    Stock <MdOutlineVerified className="text-green-500" />
                  </h3>
                ) : (
                  <h3 className="flex items-center gap-1 font-medium">
                    Stock <BsEmojiTear className="text-red-500" />
                  </h3>
                )}
              </h2>
            </div>
            <div className="py-3 px-3">
              <Link to={`/productDetails/${items._id}`}>
                <h2 className="font-bold">{item?.product_title.slice(0, 20)}...</h2>
              </Link>
              <p className="font-medium text-gray-700">{item?.product_brand_name}</p>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 px-2 border rounded-md bg-green-500 text-white">
                    {item?.product_ratings} <FaRegStar />
                  </button>
                  <p className="font-medium">({rating?.length})</p>
                </div>
                <button>
                  <FaCartPlus className="text-3xl text-orange-500" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-lg font-medium">
                <p>
                  <span>$</span>
                  {item.product_price}
                </p>
                <p className="text-green-600">
                  {item.product_discount > 0 ? item.product_discount + "% 0ff" : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProduct;
