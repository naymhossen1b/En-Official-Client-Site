import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Home/Home";
import SubCategory from "../Pages/SubCategories/SubCategory";
import ProductDetails from "../Pages/Products/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import SubProductDetails from "../Pages/SubCategories/SubProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/carts",
        element: <Cart />,
      },
      {
        path: "/subCategory/:id",
        element: <SubCategory />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/:subCategory/:id/:product/:subName",
        element: <SubProductDetails />,
      },
    ],
  },
]);

export default router;
