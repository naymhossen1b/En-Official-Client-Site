import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const UseProducts = () => {
  const { data: products = [], refetch, isLoading: loading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await SecureAxios.get("/products");
      return res.data;
    },
  });
  return [products, refetch, loading]
};

export default UseProducts;
