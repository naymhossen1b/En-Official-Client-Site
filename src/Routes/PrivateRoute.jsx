/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  // console.log(loading);

  const location = useLocation();

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  return user ? (
    <div>{children}</div>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
export default PrivateRoute;
