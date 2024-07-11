import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import ProductManagement from "../pages/ProductManagement";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

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
      {
        path:'productManagement',
        element:<ProductManagement></ProductManagement>

      },
      {
        path:'productDetails/:id',
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      }
    ]
  },
]);

export default Routers;
