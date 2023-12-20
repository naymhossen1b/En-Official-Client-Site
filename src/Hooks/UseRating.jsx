import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const UseRating = () => {

  const {refetch, data: rating = [], } = useQuery({
    queryKey: ["rating" ],
    queryFn: async () => {
      const res = await SecureAxios.get("/ratings");
      return res.data;
    },
  });

  return [rating, refetch];
};

export default UseRating;