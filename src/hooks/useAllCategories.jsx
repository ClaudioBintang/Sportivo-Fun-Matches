import { useState, useEffect } from "react";
import axios from "axios";

export const useAllCategories = () => {
    const [categories, setCategories] = useState([])

    const getUseData = async () => {
        let allCategories = []
        try {
            let current_page = 1;
            let total_page = 1;
            while (current_page <= total_page) {
            const response = await axios.get(
              `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories?page=${current_page}`
            );
            if (response.data.result && response.data.result.data) {
              allCategories = [...allCategories, ...response.data.result.data];
              total_page = response.data.result.last_page;
            }else{
              throw new Error("Data not found");
            }
            current_page++;
            }
            setCategories(allCategories);
            console.log("data category", categories);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    }
    useEffect(() => {
        getUseData()
    }, [])
    return { categories }
}