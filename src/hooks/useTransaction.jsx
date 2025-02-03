import { useState, useCallback } from "react";
import axios from "axios";

const API_URL = "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transaction/create";

export const useTransaction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [transaction, setTransaction] = useState(null); // Simpan data transaksi yang berhasil dibuat

  const createTransaction = useCallback(async (paymentMethodId, activityId) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setTransaction(null); // Reset state sebelum transaksi baru

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.post(
        API_URL,
        {
          sport_activity_id: activityId,
          payment_method_id: paymentMethodId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      setTransaction(response.data.data); // Simpan data transaksi ke state
      setSuccess(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError({ message: err.response?.data?.message || "Transaction failed" });
      } else {
        setError({ message: "An unexpected error occurred" });
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { createTransaction, loading, error, success, transaction };
};
