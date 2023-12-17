import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const UseSubCategory = () => {
  const { data: subcategory = [], refetch, isLoading: loading } = useQuery({
    queryKey: ["subcategory"],
    queryFn: async () => {
      const res = await SecureAxios.get("/allSubCategories");
      return res.data;
    },
  });
  return [subcategory, refetch, loading]
};

export default UseSubCategory;
