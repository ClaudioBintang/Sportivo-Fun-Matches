import axios from "axios";
import { useEffect, useState } from "react";

export const useAllTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchTransactions = async () => {
        try {
            const response = await axios.get(
            "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/all-transactions",
        );
            setTransactions(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };
    
        fetchTransactions();
    }, []);
    
    return { transactions, loading, error };
}