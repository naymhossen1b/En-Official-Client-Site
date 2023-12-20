import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";
import UseAuth from "./UseAuth";

const useCart = () => {
  const { user } = UseAuth();

  const {refetch, data: cart = [], } = useQuery({
    queryKey: ["cartData", user?.email ],
    queryFn: async () => {
      const res = await SecureAxios.get(`/userCarts/${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;