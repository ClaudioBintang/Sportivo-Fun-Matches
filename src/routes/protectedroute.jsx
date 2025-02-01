import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    Swal.fire({
      title: "Access Denied!",
      text: "You must login to access this page",
      icon: "warning",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonText: "OK"
    }).then(() => {
        setTimeout(() => {
        window.location.href = "/login";    
        }, 3000);
    });
    return null;
  }
  return <Outlet />;
};

export default ProtectedRoute;
