import { useEffect, useState } from "react";
import { useParams, useNavigate, replace } from "react-router-dom";
import Navbar from "../../components/Navbar/navigasi";
import Footer from "../../components/Footer/footer";
import { usePaymentMethod } from "../../hooks/usePaymentMethod";
import { useActivityDetail } from "../../hooks/useActivityDetail";
import { useTransaction } from "../../hooks/useTransaction";
import BRI from "../../assets/BRI.png";
import BCA from "../../assets/BCA.png";
import BNI from "../../assets/BNI.png";
import Mandiri from "../../assets/Mandiri.svg";

const TransactionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { activity, loading: activityLoading, error: activityError } = useActivityDetail(id);
  const { getPayment, payment, loading: paymentLoading, error: paymentError } = usePaymentMethod(id);
  const { createTransaction, loading: transactionLoading, error: transactionError, success, transaction, setTransaction } = useTransaction();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const mappingImage = {
    "Bank BRI": BRI,
    "BCA": BCA,
    "Bank BNI": BNI,
    "Bank Mandiri": Mandiri,
  };

  useEffect(() => {
    getPayment();
  }, []);

  const handleTransaction = async () => {
    if (!selectedPaymentMethod) {
      alert("Pilih metode pembayaran terlebih dahulu!");
      return;
    }
    if (!activity || !activity.id) {
      alert("Activity ID tidak ditemukan, silakan coba lagi!");
      return;
    }
    const result = await createTransaction(selectedPaymentMethod, activity.id);
    console.log("hasil create transaction", result);
    
    if (result) {
      setTransaction(result);
    } else {
      alert("transaction failed, try again")
    }
  };

  useEffect(() => {
    if (success && transaction && transaction.id) {
      localStorage.setItem("transaction", JSON.stringify(transaction));
      navigate(`/invoice/${transaction.id}`, { state: { transaction } }, { replace: true});
    }
  }, [success, transaction, navigate]);

  if (activityLoading || paymentLoading) return <div>Loading...</div>;
  if (activityError || paymentError) return <div>Error loading transaction details</div>;

  return (
    <>
      <Navbar />
      <main className="container max-w-6xl px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">
          Transaction for: <span className="">{activity.title}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

            <div className="space-y-3">
              {payment.map((item) => (
                <label key={item.id} className="flex items-center justify-between p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="payment" 
                      value={item.id} 
                      className="mr-3" 
                      onChange={() => setSelectedPaymentMethod(item.id)} 
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
              disabled={!selectedPaymentMethod || transactionLoading || success}
            >
              {transactionLoading ? "Processing..." : "Confirm Transaction"}
            </button>

            {transactionError && <p className="mt-3 text-red-500">{transactionError.message}</p>}
            {success && <p className="mt-3 text-green-500">Transaction successful!</p>}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TransactionPage;
