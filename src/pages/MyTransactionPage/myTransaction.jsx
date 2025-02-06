import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navigasi";
import { useMyTransaction } from "../../hooks/useMeTransaction"; // Mengimpor hook
import { useNavigate } from "react-router-dom";
const MyTransactionPage = () => {
  const navigate = useNavigate();
  const { transactions, loading, error } = useMyTransaction();

  return (
  <>
  <Navbar />
      <div className="h-16 bg-[#B71C1C] w-full"></div>
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold text-center">My Transactions</h1>

      {/* Menampilkan loading state */}
      {loading && <p className="text-center">Loading Transaction...</p>}

      {/* Menampilkan error jika gagal memuat data */}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Menampilkan transaksi jika ada */}
      {transactions.length === 0 && !loading && !error ? (
        <p className="text-center">Transactions not found</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} onClick={() => navigate(`/transaction/${transaction.id}`)} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold">Invoice: {transaction.invoice_id}</h2>
              <p><strong>Status:</strong> {transaction.status}</p>
              <p><strong>Total Price:</strong> {transaction.total_amount}</p>
              <p><strong>Payment Method:</strong> {transaction.payment_method}</p>
              <p><strong>Transaction Date:</strong> {transaction.order_date}</p>
              <p><strong>Expired Date:</strong> {transaction.expired_date}</p>
              {/* Tambahkan informasi lainnya yang relevan */}
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer />
  </>
  );
};

export default MyTransactionPage;
