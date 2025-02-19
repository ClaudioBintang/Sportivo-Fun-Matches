import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });
  const navigate = useNavigate();

  // Handle perubahan input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value || "" }));
  };

  // Handle login
  const usedLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ success: "", error: "" }); // Reset pesan error/sukses

    try {
      console.log("📡 Sending login request...");
      const response = await axios.post(
        "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/login",
        credentials
      );
      console.log("✅ API Response:", response.data);
      const respons = await axios.get(
        "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/me",
        {
          headers: {
            Authorization: `Bearer ${response.data.data.token}`,
          },
        }
      );
      console.log("✅ API Response1:", respons.data);

      const token = response.data?.data?.token;
      const user = respons.data?.data;

      if (!token || !user) {
        throw new Error("Invalid token or user data received from server");
      }

      // Simpan token dan user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setMessage({ success: "Login successful! Redirecting...", error: "" });

      // Redirect sesuai role user setelah login berhasil
      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }, 1000);
    } catch (error) {
      console.log(error);
      console.error("❌ Login Error:", error.response?.data || error.message);
      setMessage({
        success: "",
        error: error.response?.data?.message || "Invalid email or password.",
      });
    } finally {
      setLoading(false);
    }
  };
  const fetchme = async () => {
    try {
      const response = await axios.get(
        "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/me",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("❌ Fetch Error:", error.response?.data || error.message);
    }
  };

  return { handleChange, usedLogin, fetchme, loading, credentials, message };
};
