
import MyReviews from "../pages/UserDashboard/MyReviews";
import PaymentHistory from "../pages/UserDashboard/PaymentHistory";
import Profile from "../pages/UserDashboard/Profile";
import ShoppingCart from "../pages/UserDashboard/ShoppingCart";






export const UserPath = [
  {
    name: "Manage Profile",
    // index: true,
    path: "dashboard",
    element: <Profile/>,
  },
  {
    name: "Payment History",
    // index: true,
    path: "paymentHistory",
    element: <PaymentHistory/>,
  },
  {
    name: "Shopping Cart",
    path: "shoppingCart",
    element: <ShoppingCart/>,
  },
  {
    name: "My Reviews",
    path: "myReviewa",
    element: <MyReviews/>,
  },
  
  
];
