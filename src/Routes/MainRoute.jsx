import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Home/Home";

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
    ]
  },
]);

export default router;
