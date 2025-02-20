import { useState } from "react";
import axios from "axios";
export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUser = async (userId, data) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await axios.put(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/update-user/${userId}`, data, config);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.response ? `Error: ${error.response.statusText}` : "Error: gagal memperbarui profile");
        }
    };

    return { updateUser, loading, error };
};