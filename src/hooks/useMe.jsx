import { getMe } from "../api/me";
import { useState } from "react";
export const useMe = () => {
    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        try {
            const response = await getMe();
            console.log("response", response);
            setProfile(response);
        } catch (error) {
            console.log(error);
        }
    }
    return {getProfile, profile}
}