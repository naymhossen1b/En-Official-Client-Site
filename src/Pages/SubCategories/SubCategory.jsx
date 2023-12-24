import { useQuery } from "@tanstack/react-query";
import SecureAxios from "../../Hooks/SecureAxios";
import { Link, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const SubCategory = () => {
  const { data: subCategory = [] } = useQuery({
    queryKey: ["subCategory"],
    queryFn: async () => {
      const res = await SecureAxios.get("/categories");
      return res.data;
    },
  });

  const { id } = useParams();
  const categories = subCategory?.find((category) => category._id === id);

  return (
    <div className="py-14">
      <div className="w-9/12 mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories?.subcategories?.map((category) => (
          <Link key={category} to={`product/${category?.subName}`}>
            <div role="button" className="text-center space-y-2 font-medium">
              <div className="avatar flex justify-center">
                <div className="w-32 mask mask-squircle">
                  <img className="w-full" src={category?.image} alt="category image" />
                </div>
              </div>
              <h3>{category?.name}</h3>
            </div>
          </Link>
        ))}
      </div>
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

      {/* Filter section */}
      <section className="py-5 grid grid-cols-9">
        <div className="col-span-2 mt-3">
          <h2 className="font-bold text-xl">Filters</h2>
          <section>
            <div>
              <h3 className="font-bold mt-5">Category</h3>
              <div className="py-4">
                <hr />
              </div>
            </div>
            <div className="grid space-y-3">
              {categories?.subcategories?.map((item) => (
                <div key={item?.name} className="border rounded-md hover:shadow-md p-2 font-medium hover:cursor-pointer hover:bg-orange-50">
                  <h3 className="px-5">{item?.subName}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
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
        </div>
      </section>
    </div>
  );
};

export default SubCategory;
