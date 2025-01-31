import Footer from "../../components/Footer/footer"
import Navbar from "../../components/Navbar/navigasi"
import { useLocation } from "react-router-dom"
const Invoicepage = () => {
    const location = useLocation();
    const { transaction } = location.state || {};
    if (!transaction) {
    return <div className="mt-10 text-center text-red-500">No transaction data available.</div>;
    }
    return (
    <>
    <Navbar/>
    <div>
    <h1>invoice</h1>
    <main className="container flex-1 px-4 py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold">Transaction Detail</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-4 text-left">Invoice id</th>
                <th className="px-4 py-4 text-left">Status</th>
                <th className="px-4 py-4 text-left">Payment Method</th>
                <th className="px-4 py-4 text-left">Amount</th>
                <th className="px-4 py-4 text-left">Order Date</th>
                <th className="px-4 py-4 text-left">Expired Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-4">{transaction.invoice_id}</td>
                <td className="px-4 py-4">{transaction.status}</td>
                <td className="px-4 py-4">{transaction.payment_method}</td>
                <td className="px-4 py-4">Rp. {transaction.total_amount.toLocaleString()}</td>
                <td className="px-4 py-4">{transaction.order_date}</td>
                <td className="px-4 py-4">{transaction.expired_date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
    <Footer/>
    </>
    )
}
export default Invoicepage