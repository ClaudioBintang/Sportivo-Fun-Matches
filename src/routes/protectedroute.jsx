import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ isAuthenticated, role, requiredRole }) => {
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Access Denied!",
        text: "You must login to access this page",
        icon: "warning",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "OK"
      }).then(() => {
        setRedirectPath("/login");
      });
    } else if (requiredRole && role !== requiredRole) {
      Swal.fire({
        title: "Access Forbidden!",
        text: "You do not have permission to access this page",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "OK"
      }).then(() => {
        setRedirectPath(role === "admin" ? "/dashboard" : "/");
      });
    }
  }, [isAuthenticated, role, requiredRole]);

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
