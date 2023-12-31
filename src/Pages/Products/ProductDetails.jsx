import { useNavigate, useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import SecureAxios from "../../Hooks/SecureAxios";
import toast from "react-hot-toast";
import useCart from "../../Hooks/UseCart";
import UseAuth from "../../Hooks/UseAuth";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Rating from "../../Components/Rating";
import { Image } from "antd";

const ProductDetails = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const [products] = UseProducts();
  const { id } = useParams();
  const details = products?.find((item) => item._id === id);
  const {
    _id,
    product_title,
    product_image,
    product_price,
    product_details,
    product_brand_name,
    product_ratings,
    product_discount,
    product_stock,
    product_full_specifications,
    product_sold_quantity,
    product_quantity,
  } = details || {};

  console.log(product_stock);

  const handleAddCart = async () => {
    const cartData = {
      email: user.email,
      product_title,
      product_image,
      product_price,
      product_details,
      product_brand_name,
      product_ratings,
      product_discount,
      product_stock,
      product_full_specifications,
      product_sold_quantity,
    };

    if (product_stock) {
      await SecureAxios.post("/userCarts", cartData).then(() => {
        // console.log(res.data);
        toast.success(`Product Added Success!`);
        navigate("/carts");
        refetch();
      });
    } else {
      toast.error("Product not available 🙁 !");
    }
  };

  /// Increment & Decrement \\\

  const handleIncrement = async (id) => {
    await SecureAxios.put(`/userCarts/increment/${id}`);
    refetch();
  };

  const handleDecrement = async (id) => {
    await SecureAxios.put(`/userCarts/decrement/${id}`);
    refetch();
  };

  return (
    <div className="py-8 grid gap-5 grid-cols-1 md:grid-cols-12">
      {/*  Images Section */}
      <div className=" col-span-4">
        <Image className="w-full mx-auto" src={product_image} alt="" />
      </div>
      {/*  Middle Text section */}
      <div className=" col-span-5">
        <h1 className="text-xl font-medium">{product_title}</h1>
        <h1 className="text-xl font-medium">{product_details}</h1>
        <p className="text-sm">Powered by - {product_brand_name}</p>
        <a
          className="font-medium py-1 text-orange-700"
          target="_blank"
          rel="noreferrer"
          href="https://www.apple.com"
        >
          Visit the {product_brand_name} Store
        </a>
        <div className="mt-2">
          <Rating productId={_id} />
        </div>
        <p className="text-sm py-3 text-green-500">
          {product_sold_quantity}K+
          <span className="text-black">bought in past month</span>
        </p>
        <hr />
        <div className="py-8">
          <button className="bg-red-600 text-white font-bold rounded-md py-2 border-none px-3">
            Deal
          </button>
          <div className="flex text-center mt-3 gap-3">
            <p className="text-red-400">{product_discount > 0 ? product_discount + "% 0ff" : ""}</p>
            <h3 className="text-xl font-bold">${product_price}</h3>
          </div>
          <div className="py-5">
            <h3 className="text-xl font-medium text-orange-500">Specifications :</h3>
            <div className="space-y-1 mt-3 font-medium">
              <p>{product_full_specifications?.display}</p>
              <p>{product_full_specifications?.processor}</p>
              <p>{product_full_specifications?.camera}</p>
              <p>{product_full_specifications?.storage}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/*  Buy now & price Section */}
      <div className="col-span-3 rounded-md p-2">
        <h3 className="text-xl">${product_price}</h3>
        <div className="py-2">
          <h2>
            {product_stock === true ? (
              <h3 className="flex text-green-600 items-center gap-1 font-medium">In Stock</h3>
            ) : (
              <h3 className="flex text-red-600 items-center gap-1 font-medium">Stock Out</h3>
            )}
          </h2>
        </div>
        <div className="flex items-center justify-evenly font-medium">
          <div className="flex items-center gap-2">
            {/* <p>20</p> */}
            <button onClick={() => handleIncrement(_id)} className="text-green-600 text-xl">
              <CiCirclePlus />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p>Available</p>
            <p>{product_quantity}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleDecrement(_id)} className="text-red-600 text-xl">
              <CiCircleMinus />
            </button>
            {/* <p>0</p> */}
          </div>
        </div>
        <div className="py-8 w-11/12 mx-auto space-y-3">
          <div
            onClick={handleAddCart}
            role="button"
            className="flex gap-5 items-center justify-center border font-medium px-1 py-2 rounded-full border-orange-600"
          >
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
