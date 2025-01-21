import axios from "axios";
import { useState, useEffect } from "react";

export const useSportCategories = (page = 1, perPage = 5) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories?is_paginate=true&per_page=${perPage}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data.data); // Menyesuaikan struktur respons API
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [page, perPage]);

  return { categories, loading, error };
};

export const useLocations = (page = 1, perPage = 5) => {
  const [locations, setLocations] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  const fetchLocations = async () => {
    setLoading22(true);
    setError2(null);
    try {
        const response = await axios.get(
          `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/locations?is_paginate=true&per_page=${perPage}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch locations");
        }
        const data = await response.json();
        setLocations(data.data)
    } catch (error) {
        console.log(error);
    } finally {
        setLoading2(false);
    }
  }
  return { locations, loading2, error2, fetchLocations };
}