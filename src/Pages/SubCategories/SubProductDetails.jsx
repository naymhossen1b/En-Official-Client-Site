/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import SubProductCard from "./SubproductCard";
import { TiTick } from "react-icons/ti";

const SubProductDetails = () => {
  const [products] = UseProducts();
  const { subName } = useParams();
  //   console.log("name==========>777777", subName)

  const allProducts = products?.filter((item) => item?.subCategory === subName);
  // console.log(allProducts);

  return (
    <div className="py-12">
      {/* Second part */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div className="bg-green-200 rounded-md flex items-center justify-between p-1">
          <div className="flex items-center space-x-3">
            <div className="border-r-2 border-gray-400">
              <TiTick className="text-3xl text-green-700" />
            </div>
            <h2 className="font-bold">Free shipping on all orders</h2>
          </div>
          <div className="font-medium px-3">
            <h3>Special offer</h3>
          </div>
        </div>
        <div>
          <div className="bg-orange-50 rounded-md flex items-center space-x-3 p-1">
            <div className="border-r-2 border-gray-400">
              <TiTick className="text-3xl text-green-700" />
            </div>
            <h3 className="font-bold">Price adjustment within 30 days</h3>
          </div>
        </div>
      </section>
      {/*Product Main part */}
      <section className="grid grid-cols-9">
        <div className="col-span-2 mt-3">
          <h2 className="font-bold text-xl">Filters</h2>
          <section>
            <div>
              <h3 className="font-bold mt-5">Items</h3>
              <div className="py-4">
                <hr />
              </div>
            </div>
            {/* Product filtering section */}
            <div>

            </div>
          </section>
        </div>
        {/* Right side product section */}
        <div className="col-span-7">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Trending items</h3>
            </div>
            <div className="flex items-center gap-3 font-medium">
              <p>Short by</p>
              <select className="select select-bordered rounded-full">
                <option disabled selected>
                  Relevance
                </option>
                <option>Top Sale</option>
                <option>Most Recent</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {allProducts?.map((product) => (
              <SubProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubProductDetails;
