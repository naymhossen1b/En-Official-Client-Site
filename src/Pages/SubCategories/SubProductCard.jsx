/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import { BsEmojiTear } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import UseRating from "../../Hooks/UseRating";

const SubProductCard = ({ product }) => {
  const {
    product_title,
    product_image,
    product_price,
    product_brand_name,
    product_ratings,
    product_discount,
    product_stock,
    _id,
  } = product || {};

  const [rating] = UseRating();

  return (
    <div>
      <section>
        <div className="hover:rounded-md hover:shadow-xl">
          <Link to={`/productDetails/${_id}`}>
            <img className="w-full py-5 mx-auto h-56" src={product_image} alt="" />
          </Link>
          <div className="absolute -mt-4 ml-[155px]">
            <h2>
              {product_stock === true ? (
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
            <Link to={`/productDetails/${_id}`}>
              <h2 className="font-bold">{product_title.slice(0, 20)}...</h2>
            </Link>
            <p className="font-medium text-gray-700">{product_brand_name}</p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 px-2 border rounded-md bg-green-500 text-white">
                  {product_ratings} <FaRegStar />
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
                {product_price}
              </p>
              <p className="text-green-600">
                {product_discount > 0 ? product_discount + "% 0ff" : ""}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubProductCard;
