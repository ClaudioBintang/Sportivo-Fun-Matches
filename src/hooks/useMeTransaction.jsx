import { useState, useEffect } from "react";
import axios from "axios";

export const useMyTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token"); // Mengambil token dari localStorage
      try {
        setLoading(true);
        const response = await axios.get("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/my-transaction", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        setTransactions(response.data.result.data); // Menyimpan data transaksi ke state
      } catch (error) {
        console.error(error);
        setError("Gagal mengambil data transaksi");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions(); // Menjalankan fetch transaksi saat hook dipanggil
  }, []); // Efek ini hanya dijalankan sekali saat komponen pertama kali dimuat

  return { transactions, loading, error };
};
