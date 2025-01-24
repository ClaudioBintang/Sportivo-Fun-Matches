import axios from "axios";
import { useState } from "react";
export const useActivity = () => {
    const [activity, setActivity] = useState([]);
    const getActivity = async () => {
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/activities", activity);
            console.log(response.data?.data);
            setActivity(response.data?.data);
        } catch (error) {
            console.log(error);
        }
    }
    return {getActivity, activity}
}