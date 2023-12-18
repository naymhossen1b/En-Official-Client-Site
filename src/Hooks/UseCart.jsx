import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const useCart = () => {

  const {refetch, data: cart = [], } = useQuery({
    queryKey: ["cartData",],
    queryFn: async () => {
      const res = await SecureAxios.get('/userCarts');
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;