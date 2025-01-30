import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivityById = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data.result);
        setActivity(response.data.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityById();
  }, [id]);

  return { activity, loading, error };
};


