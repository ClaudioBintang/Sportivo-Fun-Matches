import BRI from "../../assets/BRI.png"
import BCA from "../../assets/BCA.png"
import BNI from "../../assets/BNI.png"
import Mandiri from "../../assets/Mandiri.svg"
import Navbar from "../../components/Navbar/navigasi"
import Footer from "../../components/Footer/footer"
import { usePayment } from "../../hooks/usePayment"
import { useEffect } from "react"
const Paymentpage = () => {
  const {getPayment, payment} = usePayment();
  
  const mappingImage = {
  "Bank BRI": BRI,
  BCA: BCA,
  "Bank BNI": BNI,
  "Bank Mandiri": Mandiri
  }
  useEffect(() => {
    getPayment();
  }, [])
  

    return (
<>
  <Navbar/>
  <main className="container max-w-6xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Payment</h1>

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
                  <h3 className="font-bold uppercase">NAME OF TEAM</h3>
                  <p className="text-sm text-gray-600">description team</p>
                </td>
                <td className="py-4 text-right">Rp. 500.000</td>
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
                <span>Rp. 500.000</span>
              </div>
              <div className="flex justify-between">
                <span>Convenience Fee</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold border-t">
                <span>Total</span>
                <span>Rp. 500.000</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          
          <div className="space-y-3">
            {payment.map((item, index) => (
            <label key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex items-center">
                <input type="radio" name="payment" value="mandiri" className="mr-3" />
                <span>{item.name}</span>
              </div>
              <img src={mappingImage[item.name]} alt="img" width={60} height={20} />
            </label>
            ))}
          </div>

          <button
            className="w-full mt-6 bg-[#c23636] hover:bg-[#a62e2e] text-white py-3 px-6 rounded-lg font-medium transition-colors"
            onClick={() => console.log("Payment processed")}>
            Payment
          </button>
        </section>
      </div>
    </main>
  <Footer/>    
</>
)
}
export default Paymentpage