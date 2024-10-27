import ChangePassword from "../pages/Admin/AccountManagement/ChangePassword";
import AdminProfile from "../pages/Admin/AccountManagement/UpdateInformation";
import CreateAdmin from "../pages/Admin/AdminManagement/CreateAdmin";
import ManageAdmin from "../pages/Admin/AdminManagement/ManageAdmin";

import CreateCategory from "../pages/Admin/CategoryManagement/CreateCategory";
import ManageCategory from "../pages/Admin/CategoryManagement/ManageCategory";

import Dashboard from "../pages/Admin/Dashboard";
import ComplectedOrder from "../pages/Admin/OrderManagement/ComplectedOrder";
import NewOrder from "../pages/Admin/OrderManagement/NewOrder";
import ShipingOrder from "../pages/Admin/OrderManagement/ShipingOrder";
import CreateProduct from "../pages/Admin/ProductManagement/CreateProduct";
import ManageProduct from "../pages/Admin/ProductManagement/ManageProduct";
import ManageCustomer from "../pages/Admin/UserManagement/ManageCustomer";
import ManageUser from "../pages/Admin/UserManagement/ManageUser";

export const adminPaths = [
  {
    name: "Dashboard",
    // index: true,
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Accound Management",
    children: [
      {
        name: "Admin Profile",
        path: "admin-profile",
        element: <AdminProfile/>,
      },
      {
        name: "Change Password",
        path: "change-passord",
        element: <ChangePassword></ChangePassword>,
      },
    ],
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
        element: <ManageAdmin />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Manage User",
        path: "manage-user",
        element: <ManageUser></ManageUser>,
      },
      {
        name: "Manage Customer",
        path: "manage-customer",
        element: <ManageCustomer></ManageCustomer>,
      },
    ],
  },

  {
    name: "Order Management",
    children: [
      {
        name: "New Order Item",
        path: "new-order",
        element: <NewOrder></NewOrder>,
      },
      {
        name: "Shiping Order",
        path: "shiping-order",
        element: <ShipingOrder></ShipingOrder>,
      },
      {
        name: "Complected Order",
        path: "complected-order",
        element: <ComplectedOrder></ComplectedOrder>,
      },
    ],
  },
  
];
