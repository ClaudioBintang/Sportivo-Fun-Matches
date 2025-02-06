import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useTransactionId = () => {
    const { id } = useParams();
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchTransactionById = async () => {
            try {
                const response = await axios.get(
                    `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transaction/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response.data.result);
                setTransaction(response.data.result);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTransactionById();
    }, [id])
    return { transaction, loading, error };
}