import axios from "axios";
import { useEffect, useState } from "react";
export const useActivity = () => {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getActivity = async () => {
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/activities");
            console.log(response);
            setActivity(response);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    const addActivity = async () => {
        try {
            const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/activities");
            console.log(response);
            setActivity(response);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    const deleteActivity = async () => {
        try {
            const response = await axios.delete("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/activities");
            console.log(response);
            setActivity((prev) => prev.filter((activity) => activity.id !== response.id));
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    useEffect(() => {
        getActivity();
    }, []);
    return { activity, loading, error, addActivity, deleteActivity };
}