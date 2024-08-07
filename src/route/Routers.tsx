import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import DashboardLayout from "../component/layout/DashBoardLayout";
import { adminPaths } from "./admin.routes";
import routerGenerator from "../utiles/routerGenerator";
import Login from "../pages/Admin/Login";
import AdminProtectedRoute from "../component/layout/AdminProtectedRoute";
import Home from "../pages/userView/Home";
import AboutUs from "../pages/userView/AboutUs";
import Products from "../pages/userView/Products";
import ProductDetails from "../pages/userView/ProductDetails";
import Cart from "../pages/userView/Cart";
import CheckOut from "../pages/userView/CheckOut";
import LoginUser from "../pages/userView/LoginUser";
import SignUp from "../pages/userView/SignUp";
import ProtectedRoute from "../pages/userView/ProtectedRoute";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'products',
        element:<Products></Products>

      },
     
      // {
      //   path:'productManagement',
      //   element:<ProductManagement></ProductManagement>

      // },
      {
        path:'productDetails/:id',
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'cashout/:id',
        element:<ProtectedRoute><CheckOut></CheckOut></ProtectedRoute>
      }
    ]
  },
  {
    path:'/login',
    element:<LoginUser></LoginUser>

  },
  {
    path:'/signup',
    element:<SignUp></SignUp>

  },
  {
    path:'/admin',
    element:<AdminProtectedRoute><DashboardLayout></DashboardLayout></AdminProtectedRoute>,
    children:routerGenerator(adminPaths)

  },
  {
    path:"/admin-login",
    element:<Login></Login>
  }
]);

export default Routers;
