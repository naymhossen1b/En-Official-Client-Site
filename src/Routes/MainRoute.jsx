import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Friends from "../Pages/Friends/Friends";
import Profile from "../Pages/Profile/Profile";
import Video from "../Pages/Videos/Video";
import Events from "../Pages/Events/Events";
import Saved from "../Pages/Saved/Saved";
import Memories from "../Pages/Memories/Memories";
import Shop from "../Pages/Shop/Shop";

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
            path: '/friends',
            element: <Friends />
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/video',
            element: <Video />
        },
        {
            path: '/events',
            element: <Events />
        },
        {
            path: '/saved',
            element: <Saved />
        },
        {
            path: '/memories',
            element: <Memories />
        },
        {
            path: '/shop',
            element: <Shop />
        },
    ]
  },
]);

export default router;
