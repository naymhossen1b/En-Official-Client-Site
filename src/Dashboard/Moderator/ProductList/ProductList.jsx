import UseProducts from "../../../Hooks/UseProducts";
import { FaRegStar } from "react-icons/fa";
import UseRating from "../../../Hooks/UseRating";
import { Divider, Pagination } from "@mui/material";
import FilterProduct from "./FilterProduct";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import SecureAxios from "../../../Hooks/SecureAxios";
import toast from "react-hot-toast";

const ProductList = () => {
  const [products, refetch] = UseProducts();
  const [rating] = UseRating();

  const handleDelete = async (id) => {
    await SecureAxios.delete(`/products/${id}`)
      .then(() => {
        toast.success("Delete Success!");
        refetch();
      })
      .catch((err) => toast.error(err.message));
  };

  const handleUpdate = async (id)=> {
    await SecureAxios.patch(`/products/${id}`)
  }

  return (
    <div className="bg-white border rounded-md shadow-2xl">
      {/* Add product and Filter product system */}
      <div className="py-5">
        <FilterProduct />
      </div>
      {/* All Products table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="font-bold text-gray-700 text-xl">
              <th></th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Status</th>
              <th>Ratings</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}.</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product?.product_image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-700">{product?.product_title}</div>
                    </div>
                  </div>
                </td>
                <td>{product?.subCategory}</td>
                <td>${product?.product_price}</td>
                <td>{product?.product_quantity}</td>
                <td>
                  {product?.product_quantity >= 0 ? (
                    <h3 className="flex text-green-600 items-center gap-1 font-medium">In Stock</h3>
                  ) : (
                    <h3 className="flex text-red-600 items-center gap-1 font-medium">Stock Out</h3>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 px-2 border rounded-md bg-green-500 text-white">
                      {product?.product_ratings} <FaRegStar />
                    </button>
                    <p className="font-medium">({rating?.length})</p>
                  </div>
                </td>
                <td className="flex items-center gap-5 text-2xl hover:cursor-pointer">
                  <button onClick={() => handleDelete(product?._id)}>
                    <FaRegTrashAlt className="text-red-400" />
                  </button>
                  <button onClick={() => handleUpdate(product?._id)}><FaEdit className="text-green-300" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Divider />
      {/* Pagination */}
      <div className="flex justify-end py-4 px-10">
        <Pagination count={products?.length} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default ProductList;
