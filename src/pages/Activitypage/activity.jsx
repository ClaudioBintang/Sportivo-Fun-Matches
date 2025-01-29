import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
const Activitypage = () => {
    const [activity, setActivity] = useState([]);
    const useActivity = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities", {
              headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            console.log(response.data.result.data);
            setActivity(response.data.result.data);
          } catch (error) {
            console.log(error);
          }  
    }
    useEffect(() => {
        useActivity();
    }, [])
  return (
    <div>
      <h1>test</h1>
      
    </div>
  )
}

export default Activitypage
