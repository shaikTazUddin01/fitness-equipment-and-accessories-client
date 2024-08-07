import CreateAdmin from "../pages/Admin/AdminManagement/CreateAdmin";
import ManageAdmin from "../pages/Admin/AdminManagement/ManageAdmin";
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
    path: "/admin",
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
    name: "Admin Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Manage Admin",
        path: "manage-admin",
        element: <ManageAdmin/>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Manage User",
        path: "manage-user",
        element: <ShowUser></ShowUser>,
      },
      {
        name: "Manage Customer",
        path: "manage-customer",
        element: <ShowUser></ShowUser>,
      },
    ],
  },
  
  {
    name: "Order Management",
    children: [
      {
        name: "New Order Item",
        path: "new-order",
        element: <ShowUser></ShowUser>,
      },
      {
        name: "Shiping Order",
        path: "shiping-order",
        element: <ShowUser></ShowUser>,
      },
      {
        name: "Complected Order",
        path: "complected-order",
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
