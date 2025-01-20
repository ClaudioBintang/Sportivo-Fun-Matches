// import { getMe } from "../api/me";
import { useState } from "react";
import axios from "axios";
export const useMe = () => {
    const [profile, setProfile] = useState({});

    const getProfile = async () => {
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/me", config);
            console.log("response", response);
            setProfile(response);
        } catch (error) {
            console.log(error);
        }
    }
    return {getProfile, profile}
}