import { useState, useEffect } from "react";
import axios from "axios";

export const useActivity = () => {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data.result.data);
        setActivity(response.data.result.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  return { activity, loading, error };
};
