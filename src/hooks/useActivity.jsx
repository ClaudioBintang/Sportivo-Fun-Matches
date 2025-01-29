import axios from "axios";
import { useState } from "react";
export const useActivity = () => {
    const [activity, setActivity] = useState([]);
    const [error, setError] = useState(null);
    const getActivity = async () => {
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/activities");
            console.log(response);
            setActivity(response);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    return {getActivity, activity, error};
}