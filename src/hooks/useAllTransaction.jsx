import { useState, useEffect } from "react";
import axios from "axios";

export const useAllTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllTransaction = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token tidak ditemukan");
            }
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/all-transaction?is_paginate=false", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
    
            const result = response.data.result;
            setTransactions(result || []); 
        } catch (error) {
            setError(error.message);
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        getAllTransaction();
    }, []);

    return { transactions, loading, error };
};