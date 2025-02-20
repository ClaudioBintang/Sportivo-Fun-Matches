import { useState, useEffect } from "react";
import axios from "axios";

export const useDeleteCategories = () => {
    const [categories, setCategories] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([])
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");

    const fetchCategories = async () => {
        try {
          const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories", {
            headers: { Authorization: `Bearer ${token}` }, // Pastikan token dikirim
          });
          setCategories(response.data);
        } catch (err) {
          console.error("Gagal mengambil kategori:", err);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchCategories();
      }, []);
    
      const handleCheckboxChange = (categoryId) => {
        setSelectedCategories((prevSelected) =>
          prevSelected.includes(categoryId)
            ? prevSelected.filter((id) => id !== categoryId)
            : [...prevSelected, categoryId]
        );
      };
    
      const handleDelete = async () => {
        if (selectedCategories.length === 0) {
          alert("Pilih kategori yang ingin dihapus!");
          return;
        }
    
        try {
          setLoading(true);
          const token = localStorage.getItem("token"); // Pastikan token ada
          if (!token) {
            alert("Token tidak ditemukan! Silakan login ulang.");
            return;
          }
    
          await Promise.all(
            selectedCategories.map(async (categoryId) => {
              const response = await axios.delete(
                `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/sport-categories/delete/${categoryId}`, 
                {
                  headers: { Authorization: `Bearer ${token}` }, 
                }
              );
              console.log(`Kategori ${categoryId} berhasil dihapus`, response.data);
            })
          );
    
          window.location.reload();
          fetchCategories();
          setSelectedCategories([]);
        } catch (err) {
          console.error(
            "Error saat menghapus kategori:",
            err.response?.data || err
          );
          alert(
            `Gagal menghapus kategori: ${
              err.response?.data?.message || "Unknown error"
            }`
          );
        } finally {
          setLoading(false);
        }
      };
    
      const handleCardClick = (categoryId) => {
        setSelectedCategories((prevSelected) =>
          prevSelected.includes(categoryId)
            ? prevSelected.filter((id) => id !== categoryId)
            : [...prevSelected, categoryId]
        );
      };
    
      return {
        categories,
        selectedCategories,
        loading,
        handleCheckboxChange,
        handleDelete,
        handleCardClick,
      };
}