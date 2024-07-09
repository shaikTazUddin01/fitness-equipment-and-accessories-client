import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

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
      }
    ]
  },
]);

export default Routers;
