import Navbar from "../../components/Navbar/navigasi"
import Footer from "../../components/Footer/footer"
import Card from "../../components/Card/card"
const Sparringpage = () => {
    
    return (
    <>
      <Navbar/>
      <main className="flex-1">
        <div className="bg-[#B71C1C] text-white py-16 text-center relative">
          <div className="absolute inset-0 bg-[url('/wave-bg.svg')] bg-cover bg-center opacity-10" />
          <h1 className="relative z-10 text-4xl font-bold md:text-5xl">CARI LAWAN SPARRING</h1>
        </div>
        <div className="container px-4 py-12 mx-auto">
          <Card/>
        </div>
      </main>
      <Footer/>
    </>
    )
}
export default Sparringpage