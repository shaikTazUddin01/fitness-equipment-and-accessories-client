import { NavLink } from "react-router-dom";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<Dashboard></Dashboard>",
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element: "<CreateProduct></CreateProduct>",
      },
      {
        name: "Manage Product",
        path: "manage-product",
        element: "<ManageProduct></ManageProduct>",
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Show User",
        path: "show-user",
        element: "<ShowUser></ShowUser>",
      },
    ],
  },
];
// const role='admin'

const router = adminPaths.reduce((acc, item) => {
  if (item?.path && item?.element) {
    acc.push({
      key: item?.name,
      label: "link",
    });
  }
  if (item.children) {
      acc.push({
        key: item?.name,
        label: "link",
        children: item.children.map((child) => ({
          key: child?.name,
          label: "link",
        })),
      });
   
  }

  return acc;
}, []);

console.log(router);
