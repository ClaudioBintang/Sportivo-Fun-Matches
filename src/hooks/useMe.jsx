// import { getMe } from "../api/me";
import { useState } from "react";
import axios from "axios";
export const useMe = () => {
    const [profile, setProfile] = useState({});
    const [error, setError] = useState(null)

    const getProfile = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("unAuthorized: token tidak ditemukan");
            return
        }
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/me", config);
            console.log("response", response.data?.data);
            setProfile(response.data?.data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 401) {
                setError("unAuthorized: token tidak valid");
                } else {
                    setError(`Error: ${error.response.statusText}`);
                }} 
                else {
                    setError("Error: mengambil data profile");
                }
            }
        }
        return {getProfile, profile, error}
}