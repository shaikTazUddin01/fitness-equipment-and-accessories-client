import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
// import ProductManagement from "../pages/ProductManagement";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import DashboardLayout from "../component/layout/DashBoardLayout";
import { adminPaths } from "./admin.routes";
import routerGenerator from "../utiles/routerGenerator";

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
        element:<CheckOut></CheckOut>
      }
    ]
  },
  {
    path:'/admin',
    element:<DashboardLayout></DashboardLayout>,
    children:routerGenerator(adminPaths)

  }
]);

export default Routers;
