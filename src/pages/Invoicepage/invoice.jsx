import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navigasi";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const InvoicePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const transaction  = location.state?.transaction

  useEffect(() => {
    let storedTransaction = transaction;
    if (!transaction) {
      storedTransaction = JSON.parse(localStorage.getItem("transaction"));
    }
    console.log("Stored Transaction:", storedTransaction);
  
    if (!storedTransaction) {
      alert("Data transaksi tidak ditemukan. Kembali ke halaman utama.");
      navigate("/", { replace: true });
    }
  }, [transaction, navigate]);

  if (!transaction) {
    return <div className="mt-10 text-center text-red-500">No transaction data available.</div>;
  }

  return (
    <>
      <Navbar />
      <main className="container flex-1 px-4 py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold">Invoice</h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Invoice ID
                </th>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Payment Method
                </th>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Order Date
                </th>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Expired Date
                </th>
                <th className="px-4 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Upload Proof Payment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">{transaction.invoice_id}</td>
                <td className="px-4 py-4 whitespace-nowrap">{transaction.status}</td>
                <td className="px-4 py-4 whitespace-nowrap">{transaction.payment_method?.id}</td>
                <td className="px-4 py-4 whitespace-nowrap">Rp. {transaction.total_amount.toLocaleString()}</td>
                <td className="px-4 py-4 whitespace-nowrap">{transaction.order_date}</td>
                <td className="px-4 py-4 whitespace-nowrap">{transaction.expired_date}</td>
                <td className="px-4 py-4 whitespace-nowrap"><input type="file" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="justify-center flex gap-10 mt-10">
        <Link to="/" className="px-6 py-2 text-white transition-colors bg-red-600 border border-red-600 rounded-md hover:bg-white hover:text-red-600">
        Back to Homepage
        </Link>
        <Link to="/mytransaction" className="px-6 py-2 text-white transition-colors bg-red-600 border border-red-600 rounded-md hover:bg-white hover:text-red-600">
        Go to history transaction
        </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InvoicePage;
