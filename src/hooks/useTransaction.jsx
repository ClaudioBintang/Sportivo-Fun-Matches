import { useState } from "react";
import axios from "axios";

const useTransaction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const createTransaction = async (paymentId, activityId) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transaction/create",
        { payment_id: paymentId, activity_id: activityId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return { createTransaction, loading, error, success };
};

export default useTransaction;
