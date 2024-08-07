import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.userLoginInfo.user);
  const token = useAppSelector((state) => state.userLoginInfo.token);
  const location = useLocation();

  if (!user && !token) {
    return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
