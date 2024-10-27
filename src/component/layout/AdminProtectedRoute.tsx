import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import { ReactNode } from "react";

const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.adminLoginInfo.user);
  const role = useAppSelector((state) => state.adminLoginInfo.user?.role);
  const token = useAppSelector((state) => state.adminLoginInfo.token);
  const location = useLocation();

  console.log(role);

  if (!user && !token && role !== "Admin") {
    return <Navigate to={"/admin-login"} state={location?.pathname}></Navigate>;
  }
if (role==="Admin") {
  return children;
}
};

export default AdminProtectedRoute;
