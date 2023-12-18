/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import SecureAxios from "../../Hooks/SecureAxios";
import useCart from "../../Hooks/UseCart";
import Swal from "sweetalert2";

const CartProduct = ({ product }) => {

  const [,refetch] = useCart();

  const { product_title, product_image, product_price, product_brand_name, product_stock, _id } =
    product || {};

    const handleDelete = (id) => {
      // console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          SecureAxios.delete(`/deleteCarts/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {/* Image section */}
        <div className="col-span-3">
            <img className="w-full mx-auto" src={product_image} alt="" />
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
            <div
            onClick={() => handleDelete(_id)}
            className="text-2xl text-red-500" role="button">
              <FaTrashAlt />
            </div>
          </div>
        </div>
        {/* price section */}
        <div className="col-span-2 text-xl font-bold">
          <p>${product_price}</p>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default CartProduct;
