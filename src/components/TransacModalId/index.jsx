import { useState, useEffect } from "react";
import axios from "axios";

const TransacModalId = ({isOpen, onClose, transactionId}) => {
const [transactionDetail, setTransactionDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [transactionItemsDetail, setTransactionItemsDetail] = useState(null);

  const fetchTransacById = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan. Silakan login kembali.");
        }
        const response = await axios.get(
          `https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/transaction/${transactionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setTransactionDetail(response.data.result);
        setTransactionItemsDetail(response.data.result.transaction_items);
      } catch (err) {
        console.error(err);
        setError(err.message || "Gagal mengambil detail transaksi.");
      } finally {
        setLoading(false);
      }
    };
  
    const handleSuccessPayment = async (id) => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token tidak ditemukan. Silakan login kembali.");
        }
  
        const response = await axios.post(
          `${BASE_URL}/transaction/update-status/${id}`,
          { status: "success" }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
              access: 'application/json',
            },
          }
        );
        window.location.reload();
        alert("Pembayaran berhasil disukseskan!");
        onClose();
      } catch (err) {
        setError(
          err.response?.data?.message || "Gagal mengupdate status transaksi."
        );
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
        if (isOpen && transactionId) {
          fetchTransacById();
        }
      }, [isOpen, transactionId]);
    
      if (!isOpen) return null;

      return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
        Transaction Detail 
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg font-semibold">
              Transaction ID: {transactionDetail?.id}
            </p>
            <p className="text-lg">Status: {transactionDetail?.status}</p>
            <p className="text-lg">
              Total: Rp. {transactionDetail?.total_amount?.toLocaleString()}
            </p>
            <h3 className="mt-4 text-xl font-bold">Proof Payment:</h3>
            {transactionDetail?.proof_payment_url ? (
              <img
                src={transactionDetail?.proof_payment_url}
                alt="Bukti Pembayaran"
              />
            ) : (
              <p className="text-red-500">Cust not send Proof Payment yet</p>
            )}
          </div>
        )}
        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            className="w-1/2 py-2 font-semibold text-black bg-gray-300 rounded-lg hover:bg-gray-500"
          >
            Tutup
          </button>
          {transactionDetail?.status === "pending" && (
            <button
              onClick={() => handleSuccessPayment(transactionDetail?.id)}
              className="w-1/2 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-700"
            >
              Accepted Payment
            </button>
          )}
        </div>
      </div>
    </div>
        </>
      )
}
export default TransacModalId;