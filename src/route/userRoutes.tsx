
import PaymentHistory from "../pages/UserDashboard/PaymentHistory";
import Profile from "../pages/UserDashboard/Profile";






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
  
  
];
