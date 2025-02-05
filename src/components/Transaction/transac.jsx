import { useMyTransaction } from "../../hooks/useMeTransaction";
const Transaction = () => {
    const { transactions, loading, error } = useMyTransaction();
      
    return (
    <>
    <div className="mt-6 border rounded-md overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left">Transaction Invoice</th>
            <th className="px-4 py-2 text-left">Payment Method</th>
            <th className="px-4 py-2 text-left">Activity</th>
            <th className="px-4 py-2 text-left">Due Date</th>
            <th className="px-4 py-2 text-left">Expired Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="px-4 py-2 font-medium">{transaction.invoice_id}</td>
              <td className="px-4 py-2">{transaction.payment_method}</td>
              <td className="px-4 py-2">{transaction.total_amount}</td>
              <td className="px-4 py-2">{transaction.order_date}</td>
              <td className="px-4 py-2">{transaction.expired_date}</td>
              <td className="px-4 py-2 text-gray-500">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    )
}

export default Transaction