import UseProducts from "../../Hooks/UseProducts";
import { FaRegStar } from "react-icons/fa";
import UseRating from "../../Hooks/UseRating";

const ProductList = () => {
  const [products] = UseProducts();
  const [rating] = UseRating();

  return (
    <div>
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
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                  {product?.product_stock === true ? (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
