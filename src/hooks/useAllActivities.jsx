import { useState, useEffect } from "react";
import axios from "axios";

export const useAllActivities = () => {
    const [activities, setActivities] = useState([])

    const fetchActivities = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities", {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              params: {
                is_paginate: false,
                per_page: 5,
                page: 1,
              },
            });
            setActivities(response?.data?.result || []);
          } catch (error) {
            console.error("Error fetching activities:", error);
            setActivities([]);
          }
        };
        useEffect(() => {
            fetchActivities()
        }, [])
        
        return { activities }
    }
