import { useQuery } from "@tanstack/react-query";
import SecureAxios from "../../Hooks/SecureAxios";
import { Link, useParams } from "react-router-dom";

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
    <div className="w-9/12 mx-auto py-14">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </div>
  );
};

export default SubCategory;
