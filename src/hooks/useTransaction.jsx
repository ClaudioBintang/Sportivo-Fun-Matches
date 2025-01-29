import { useState, useEffect } from "react";
import axios from "axios";
import { Fingerprint } from "lucide-react";

export const useTransaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transactions");
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    const addTransaction = async () => {
        try {
            const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transactions");
            console.log(response);
            setTransactions(response);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    const deleteTransaction = async (id) => {
        try {
            const response = await axios.delete("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transactions");
            console.log(response);
            setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    useEffect(() => {
        fetchTransactions();
    }, []);
    return { transactions, loading, error, addTransaction, deleteTransaction };
}