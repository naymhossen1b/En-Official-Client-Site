/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import SecureAxios from "../Hooks/SecureAxios";
import UseRating from "../Hooks/UseRating";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Rating = ({ productId }) => {
  // console.log(productId)
  const [rating, refetch] = UseRating();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const [userHasRated, setUserHasRated] = useState(false);

  useEffect(() => {
    // Check if the user has already given a rating for the specific product
    const userRating = rating.find((r) => r.userId === user?.id && r.productId === productId);

    if (userRating) {
      setUserHasRated(true);
    } else {
      setUserHasRated(false);
    }
  }, [rating, user, productId]);

  const ratingChanged = async (newRating) => {
    if (!userHasRated) {
      if (user) {
        await SecureAxios.post("/ratings", { userId: user.id, productId, rating: newRating }).then(() => {
          refetch();
          setUserHasRated(true);
        });
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
        <p>({rating.length})</p>
      </div>
    </div>
  );
};

export default Rating;
