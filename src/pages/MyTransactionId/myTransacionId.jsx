import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navigasi";
import { useTransactionId } from "../../hooks/useTransactionId"

const MyTransactionId = () => {
    const {transaction, loading, error} = useTransactionId();

    if (loading) return <p className="text-lg text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
    if (!transaction) return <p className="text-center text-gray-500">Data not found.</p>;
    return (
    <>
    <Navbar/>
    <div className="p-4">
    <h1 className="mb-4 text-xl font-bold text-center">My Transaction</h1>
    <p>{transaction}</p>
    </div>
    <Footer/>
    </>
    )
}
export default MyTransactionId