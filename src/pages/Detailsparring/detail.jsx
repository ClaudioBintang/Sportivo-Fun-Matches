import lokasi from '../../assets/location.png'
import  { MapPin, Calendar, Trophy } from 'lucide-react'
import Navbar from '../../components/Navbar/navigasi'
import Footer from '../../components/Footer/footer'
import { Link } from 'react-router-dom'
const Detailsparring = () => {
    return (
    <>
    <Navbar/>
    <main className="container px-4 py-8 mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Team Info Section */}
        <div className="flex flex-col gap-8 mb-8 md:flex-row">
          {/* Left Side - Team Image */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
              <img
                src="/placeholder.svg"
                alt="Team Image"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Team Details */}
          <div className="w-full md:w-2/3">
            <h1 className="mb-4 text-3xl font-playfair">NAME OF TEAM</h1>

            <div className="flex items-center gap-6 mb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>Sport category</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Location</span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
              <div className="text-2xl font-bold">Rp. xxx.xxx</div>
              <Link to="/payment" className="bg-[#c23636] text-white px-8 py-3 rounded-lg hover:bg-[#a62e2e] transition-colors">
              <button className="bg-[#c23636] text-white px-8 py-3 rounded-lg hover:bg-[#a62e2e] transition-colors">
                Take the Match
              </button>
              </Link>
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h2 className="mb-3 font-bold">Sparring Description</h2>
              <p className="text-gray-600">
                Now you don't have to bother looking for sparring partners. Easily make new friends and opponents every
                week.
              </p>
            </div>

            {/* Venue Section */}
            <div>
              <h2 className="mb-3 font-bold">Venue Location</h2>
              <p className="mb-4 text-gray-600">
                Jl. Radin Inten II No.A30-31, RT.1/RW.5, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah
                Khusus Ibukota Jakarta 13440, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.0954081586774!2d107.02145772984385!3d-6.70886373487647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3e46a8832b9%3A0xf50137b4e6acd84!2sLe%20Eminence%20Puncak%20Hotel%20Convention%20%26%20Resort!5e1!3m2!1sid!2sid!4v1737967971020!5m2!1sid!2sid" 
          width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            <div>
              <h3 className="font-bold">Date & Time</h3>
              <p className="text-gray-600">Select available time slot</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <div>
              <h3 className="font-bold">Location</h3>
              <p className="text-gray-600">View on map</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
    )
}
export default Detailsparring