import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../pages/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "../routes/PrivateRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path:'/rider',
        element: <PrivateRoute>
          <Rider />
        </PrivateRoute>
      }
    ],
  },
  {
  path:'/',
  Component:AuthLayout,
  children: [
    {
      path:'/login',
      Component:Login
    },
    {
      path:'/register',
      Component:Register
    }
  ] 
  }
]);
