import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/navigasi";
import Footer from "../../components/Footer/footer";
import { usePaymentMethod } from "../../hooks/usePaymentMethod";
import { useActivityDetail } from "../../hooks/useActivityDetail";
import useTransaction from "../../hooks/useTransaction";
// Import Logo Bank
import BRI from "../../assets/BRI.png";
import BCA from "../../assets/BCA.png";
import BNI from "../../assets/BNI.png";
import Mandiri from "../../assets/Mandiri.svg";

const TransactionPage = () => {
  const { id } = useParams();
  const { activity, loading: activityLoading, error: activityError } = useActivityDetail(id);
  const { getPayment, payment, loading: paymentLoading, error: paymentError } = usePaymentMethod();
  const { createTransaction, loading: transactionLoading, error: transactionError, success } = useTransaction();

  // State untuk menyimpan metode pembayaran yang dipilih
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Mapping nama bank ke gambar logo
  const mappingImage = {
    "Bank BRI": BRI,
    "BCA": BCA,
    "Bank BNI": BNI,
    "Bank Mandiri": Mandiri,
  };

  useEffect(() => {
    getPayment();
  }, [id]);

  const handleTransaction = () => {
    if (!selectedPayment) {
      alert("Please select a payment method first.");
      return;
    }
    createTransaction(selectedPayment, id);
  };

  if (activityLoading || paymentLoading) return <div>Loading...</div>;
  if (activityError || paymentError) return <div>Error loading transaction details</div>;

  return (
    <>
      <Navbar />
      <main className="container max-w-6xl px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">Transaction for: <span className="">{activity.title}</span></h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Activity Details Section */}
          <section className="p-6 bg-white border rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-4 text-left">Activity</th>
                  <th className="pb-4 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4">
                    <h3 className="font-bold uppercase">{activity.team_name}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </td>
                  <td className="py-4 text-right">Rp. {activity.price.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Order Summary Section */}
          <section>
            <div className="p-6 mb-6 bg-white border rounded-lg">
              <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp. {activity.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Convenience Fee</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold border-t">
                  <span>Total</span>
                  <span>Rp. {activity.price.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
              {payment.map((item, index) => (
                <label key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="payment" 
                      value={item.id} 
                      className="mr-3" 
                      onChange={() => setSelectedPayment(item.id)} 
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <img src={mappingImage[item.name]} alt={item.name} width={60} height={20} />
                </label>
              ))}
            </div>

            <button
              className="w-full mt-6 bg-[#c23636] hover:bg-[#a62e2e] text-white py-3 px-6 rounded-lg font-medium transition-colors"
              onClick={handleTransaction}
              disabled={!selectedPayment || transactionLoading} // Disable jika belum pilih metode pembayaran atau masih loading
            >
              {transactionLoading ? "Processing..." : "Confirm Transaction"}
            </button>

            {transactionError && <p className="mt-3 text-red-500">{transactionError}</p>}
            {success && <p className="mt-3 text-green-500">Transaction successful!</p>}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TransactionPage;
