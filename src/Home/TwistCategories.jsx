import { useQuery } from "@tanstack/react-query";
import SecureAxios from "../Hooks/SecureAxios";
import CategoriesCard from "./CategoriesCard";

const TwistCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await SecureAxios.get("/categories");
      return res.data;
    },
  });

  //   console.log(categories)

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 w-9/12 mx-auto">
        {
            categories?.map( category => <CategoriesCard key={category._id} category={category} />)
        }
      </div>
    </div>
  );
};

export default TwistCategories;
