import axios from "axios";
import { useState, useEffect } from "react";

export const useSportsAndLocations = (selectedCategory, selectedLocation) => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories');
      setCategories(response.data.result.data); // Menyesuaikan struktur respons API
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchLocations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/locations/provinces');
      setLocations(response.data.result.data); // Menyesuaikan struktur respons API
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchActivities = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = 'https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/activities';
      if (selectedCategory || selectedLocation) {
        url += `?category=${selectedCategory}&location=${selectedLocation}`;
      }
      const response = await axios.get(url);
      setActivities(response.data.result.data); // Menyesuaikan struktur respons API
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchLocations();
  }, []);

  useEffect(() => {
    if (selectedCategory || selectedLocation) {
      fetchActivities();
    }
  }, [selectedCategory, selectedLocation]);

  return { categories, locations, activities, loading, error };
};
