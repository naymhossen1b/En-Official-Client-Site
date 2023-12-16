import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Home/Home";
import SubCategory from "../Pages/SubCategories/SubCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
          path: '/subCategory/:id',
          element: <SubCategory />
        }
    ]
  },
]);

export default router;
