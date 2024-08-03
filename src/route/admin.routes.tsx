import CreateCategory from "../pages/Admin/CategoryManagement/CreateCategory";
import ManageCategory from "../pages/Admin/CategoryManagement/ManageCategory";
import UpdateCategory from "../pages/Admin/CategoryManagement/UpdataCategory";
import Dashboard from "../pages/Admin/Dashboard";
import CreateProduct from "../pages/Admin/ProductManagement/CreateProduct";
import ManageProduct from "../pages/Admin/ProductManagement/ManageProduct";
import UpdateProduct from "../pages/Admin/ProductManagement/updateProduct/UpdateProduct";

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
    name: "Category Management",
    children: [
      {
        name: "Create Category",
        path: "create-category",
        element: <CreateCategory></CreateCategory>,
      },
      {
        name: "Manage Category",
        path: "manage-category",
        element: <ManageCategory></ManageCategory>,
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

  {
    name: "",
    path: "update-product/:id",
    element: <UpdateProduct></UpdateProduct>,
  },
  {
    name: "",
    path: "update-category/:id",
    element: <UpdateCategory />,
  },
 
];
