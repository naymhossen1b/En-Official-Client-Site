import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const UseUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await SecureAxios.get("/users");
      return res.data;
    },
  });

  return [users, refetch];
};

export default UseUsers;
