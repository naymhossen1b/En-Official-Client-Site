/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { name, image, _id } = category;

  return (
    <Link to={`/${name}/${_id}`}>
    <div className="space-y-2">
      <div className="avatar flex justify-center">
        <div className="w-32 mask mask-squircle">
          <img src={image} alt="" />
        </div>
      </div>
      <h3 className="text-center font-medium">{name}</h3>
    </div>
    </Link>
  );
};

export default CategoriesCard;
