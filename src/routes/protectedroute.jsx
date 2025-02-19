import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoute = ({ isAuthenticated, role, requiredRole }) => {
  if (!isAuthenticated) {
    Swal.fire({
      title: "Access Denied!",
      text: "You must login to access this page",
      icon: "warning",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonText: "OK"
    }).then(() => {
      window.location.href = "/login"; // Redirect setelah Swal selesai
    });
    return null; // Menghindari render halaman yang tidak diizinkan
  }

  if (requiredRole && role !== requiredRole) {
    Swal.fire({
      title: "Access Forbidden!",
      text: "You do not have permission to access this page",
      icon: "error",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonText: "OK"
    }).then(() => {
      // Arahkan ke halaman berdasarkan role
      if (role === "admin") {
        window.location.href = "/dashboard"; // Redirect ke halaman dashboard jika role admin
      } else {
        window.location.href = "/"; // Redirect ke homepage jika bukan admin
      }
    });
    return null;
  }

  // Jika authenticated dan memiliki akses sesuai role
  return <Outlet />;
};

export default ProtectedRoute;
