import { useState, useEffect } from "react";
import axios from "axios";

export const useMe = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Unauthorized: token tidak ditemukan");
      return;
    }
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const response = await axios.get(
        "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/me",
        config
      );
      console.log("response", response.data?.data);
      setProfile(response.data?.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(`Error: ${error.response.statusText}`);
      } else {
        setError("Error: gagal mengambil data profile");
      }
    }
  };

  useEffect(() => {
    getProfile(); // Panggil saat pertama kali halaman dibuka
  }, []);

  return { getProfile, profile, error };
};
