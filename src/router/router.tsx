import Home from "../features/Home";
import Auth from "../features/Auth";
import Admin from "../features/Admin";
import Dashboard from "../features/Dashboard";

export const routes = [
  {
    path: "",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/register",
    title: "Auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    title: "Admin",
    element: <Admin />,
  },
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    element: <Dashboard />,
  },
];
