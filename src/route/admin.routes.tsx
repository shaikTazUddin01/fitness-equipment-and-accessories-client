import Dashboard from "../pages/Admin/Dashboard";
import CreateProduct from "../pages/Admin/ProductManagement/CreateProduct";
import ManageProduct from "../pages/Admin/ProductManagement/ManageProduct";
import ShowUser from "../pages/Admin/UserManagement/ShowUser";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element: <CreateProduct></CreateProduct>,
      },
      {
        name: "Manage Product",
        path: "manage-product",
        element: <ManageProduct></ManageProduct>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Show User",
        path: "show-user",
        element: <ShowUser></ShowUser>,
      },
    ],
  },
];
