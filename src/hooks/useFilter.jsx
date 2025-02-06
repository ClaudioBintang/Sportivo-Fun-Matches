import { useState, useEffect } from "react";
import axios from "axios";

const useSportsAndLocations = () => {
  const [provinces, setProvinces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  
  const filteredCities = provinces
    .flatMap((province) => province.cities)
    .filter((city) =>
      city.city_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchCategory.toLowerCase())
  );

  useEffect(() => {
    const fetchProvincesAndCities = async () => {
      let allProvinces = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        try {
          const response = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/location/provinces?page=${page}`);
          const newProvinces = response.data.result.data;

          for (let province of newProvinces) {
            const citiesResponse = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/location/cities/${province.province_id}`);
            province.cities = citiesResponse.data.result.data; // Tambahkan kota ke setiap provinsi
          }

          allProvinces = [...allProvinces, ...newProvinces];

          if (newProvinces.length < response.data.result.per_page) {
            hasMore = false;
          } else {
            page++;
          }
        } catch (error) {
          console.error("Error fetching provinces and cities:", error);
          hasMore = false;
        }
      }

      setProvinces(allProvinces);
    };

    fetchProvincesAndCities();
  }, []);

  // Ambil data kategori olahraga
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories`);
        console.log(response.data.result.data);
        setCategories(response.data.result.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  const filterActivities = async () => {
    const token = localStorage.getItem("token")
    try {
      const params = {
        is_paginate: false,
        per_page: 5,
        page: 1,
      };

      if (selectedLocation) {
        params.city_id = selectedLocation.city_id;
      }

      if (selectedCategory) {
        params.sport_category_id = parseInt(selectedCategory, 10);
      }
      const response = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-activities`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          params,
        },
        );
      setFilteredActivities(response.data.result);
    } catch (error) {
      console.error("Error filtering activities:", error);
      setFilteredActivities([]);
    }
  };

  const handleSearch = (navigate) => {
    const id = new URLSearchParams({
      sport_category_id: selectedCategory ? parseInt(selectedCategory, 10) : "",
      city_id: selectedLocation ? selectedLocation.city_id : "",
    }).toString();
    navigate(`/activity?${id}`);
  };

  return {
    provinces,
    categories,
    selectedLocation,
    selectedCategory,
    filteredActivities,
    setSelectedLocation,
    setSelectedCategory,
    filterActivities,
    handleSearch,
    filteredCities,
    searchQuery,
    setSearchQuery,
    searchCategory,
    setSearchCategory, 
    filteredCategories, 
  };
};

export default useSportsAndLocations;