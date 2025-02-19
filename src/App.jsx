import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/protectedroute";
import Registpage from "./pages/Registpage/register";
import Loginpage from "./pages/Loginpage/login";
import Homepage from "./pages/Homepage/home";
import Profilepage from "./pages/Profilepage/profile";
import ActivityDetailpage from "./pages/ActivityDetailpage/activitydetail";
import Activitypage from "./pages/Activitypage/activity";
import Paymentpage from "./pages/Paymentpage/payment";
import Invoicepage from "./pages/Invoicepage/invoice";
import MyTransactionPage from "./pages/MyTransactionPage/myTransaction";
import MyTransactionId from "./pages/MyTransactionId/myTransacionId";
import Dashboardpage from "./pages/Dashboardpage/dashboard";
import ProfileAdmin from "./pages/ProfileAdmin/adminProfile";
import { useAuth } from "./context/AuthContext";
import "./index.css";

function App() {
  const { user } = useAuth(); // ✅ Sekarang sudah bisa digunakan dengan aman
  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  return (
    <Routes>
      {/* Routes Publik */}
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Registpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/activity" element={<Activitypage />} />

      {/* Proteksi Halaman User (Harus Login) */}
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/mytransaction" element={<MyTransactionPage />} />
        <Route path="/mytransaction/:id" element={<MyTransactionId />} />
        <Route path="/activity/:id" element={<ActivityDetailpage />} />
        <Route path="/payment/:id" element={<Paymentpage />} />
        <Route path="/invoice/:id" element={<Invoicepage />} />
      </Route>

      {/* Proteksi Halaman Admin */}
      <Route
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            role={user?.role}
            requiredRole="admin"
          />
        }
      >
        <Route path="/dashboard" element={<Dashboardpage />} />
        <Route path="/profileadmin" element={<ProfileAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
