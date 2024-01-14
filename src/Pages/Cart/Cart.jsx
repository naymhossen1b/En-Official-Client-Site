import useCart from "../../Hooks/UseCart";
import { TiTickOutline } from "react-icons/ti";
import CartProduct from "./CartProduct";
import toast from "react-hot-toast";

const Cart = () => {
  const [cart] = useCart();
  // console.log(cart)

  const totalPrice = cart
    .reduce((acc, price) => acc + parseFloat(price.product_price), 0)
    .toFixed();
  const discountPrice = cart
    .reduce((acc, price) => acc + parseFloat(price.product_discount), 0)
    .toFixed();
  const estimatedTotal = totalPrice - discountPrice;

  if (estimatedTotal > 50000) {
    toast.error("Already you buy a maximum products!");
  }

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-12">
        <div className="col-span-5">
          <h1 className="text-4xl font-medium py-4 px-5">Shopping Cart</h1>
          <hr className="py-3" />
          <div className="flex items-center justify-between bg-orange-200 rounded-md p-1">
            <div className="flex items-center space-x-2">
              <div className="border-r-2 border-gray-400">
                <TiTickOutline className="text-4xl text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-medium">Free shipping on all orders</h3>
              </div>
            </div>
            <div>
              <p className="text-xl font-medium">Limited-time offer</p>
            </div>
          </div>
          <div className="flex font-bold text-xl items-center justify-between p-1 py-5">
            <h3>
              Total <span className="underline text-green-600">{cart?.length}</span> Items
            </h3>
            <h2>Price</h2>
          </div>
          <hr />

          {/*  Product Section */}
          <section>
            {cart?.map((product) => (
              <CartProduct key={product} product={product} />
            ))}
          </section>
        </div>

        {/* Order Summary section */}
        <div className="col-span-3">
          <h3 className="text-3xl font-medium py-4">Order Summary</h3>
          <div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xl font-medium px-5">
                <h3>Items total:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="flex items-center justify-between text-xl font-medium px-5 pb-3">
                <h3>Items discount:</h3>
                <h3>${discountPrice}</h3>
              </div>
              <hr className="py-1" />
              <div className="flex items-center justify-between text-xl font-medium px-5">
                <h3>Estimated total </h3>
                <h3>${estimatedTotal}</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <button className="border hover:bg-green-600 shadow-md w-full text-xl px-4 py-2 flex justify-center  text-white rounded-full bg-orange-500">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
