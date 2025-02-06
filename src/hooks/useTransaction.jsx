import { useState, useCallback } from "react";
import axios from "axios";

export const useTransaction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [transaction, setTransaction] = useState(null);

  const createTransaction = async (paymentMethodId, activityId) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setTransaction(null);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transaction/create",
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
      console.log("Response dari API:", response.data?.message); // Debugging respons API

    if (!response.data || !response.data.result) {
      throw new Error("Invalid response structure from API");
    }
    const transactionData = response.data.result; // Ambil data transaksi yang true
    setTransaction(response.data.result);
    setSuccess(true);
    return transactionData; //memastikan return data transaksi
    } catch (err) {
      console.log("error while create transaction", err);
      setError({ message: err.response?.data?.message || "Transaction failed" })
      return null
    } finally {
      setLoading(false);
    }
  }
  return { createTransaction, loading, error, success, transaction };
};
