import axios from "axios";
import { useState } from "react";

export const useSportCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    per_page: 5,
    current_page: 1,
    total: null,
    total_page: null,
  });

 
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories?is_paginate=${pagination.current_page}&per_page=${pagination.per_page}`);
        console.log(response.data.result.data);
        setCategories(response.data.result.data); // Menyesuaikan struktur respons API
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  return { fetchCategories, categories, loading, error };
};

export const useLocations = (page = 1, perPage = 5) => {
  const [locations, setLocations] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  const fetchLocations = async () => {
    setLoading2(true);
    setError2(null);
    try {
        const response = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/locations?is_paginate=true&per_page=${perPage}&page=${page}`);
        console.log(response);
        setLocations(response)
    } catch (error) {
        console.log(error);
        setError2(error.message);
    } finally {
        setLoading2(false);
    }
  }
  return { locations, loading2, error2, fetchLocations };
}