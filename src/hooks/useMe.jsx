import { getMe } from "../api/me";
import { useState } from "react";
export const useMe = () => {
    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
            const response = await getMe(config);
            console.log("response", response);
            setProfile(response);
        } catch (error) {
            console.log(error);
        }
    }
    return {getProfile, profile}
}