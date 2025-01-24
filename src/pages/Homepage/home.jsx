import Footer from "../../components/Footer/footer"
import Navbar from "../../components/Navbar/navigasi"
import gplay from "../../assets/google-dark.png"
import app from "../../assets/app-dark.png"
import venue from "../../assets/venue-preview.png"
import hero from "../../assets/ayoindonesia-greysiapolii.jpg"
import football from "../../assets/drawing football.png"
const Homepage = () => {
    return (
    <>
    <Navbar/>
      <div className="relative h-[60vh]">
        <img src={hero} alt="Hero" className="object-cover" />
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-8 bg-[#c23636] text-white rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4">
            <div className="flex items-center gap-2 flex-1">
              <label className="h-5 w-5" />
              <span>Activity</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <label className="h-5 w-5" />
              <span>Choose City</span>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <label className="h-5 w-5" />
              <span>Choose Sport</span>
            </div>
            <button className="bg-white text-[#c23636] hover:bg-gray-100 px-2 rounded-md">
              Temukan
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Sport 1"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Sport 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Sport 3"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Sport 4"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Find a sparring partner at the touch of finger</h2>
            <p className="text-gray-600">
            Now you don't have to bother looking for sparring partners. Easily make new friends and opponents every week.
            </p>
          </div>
          <div className="space-y-4 mt-28">
            <h2 className="text-3xl font-bold">look for matches that are exciting and fun</h2>
            <p className="text-gray-600">
              Looking for exciting and fun matches is an integral part of the world of sports. Every sports fan wants a
              match that is thrilling and full of surprises. An exciting match not only presents spectacular actions on
              the field, but also is able to arouse the fighting spirit of the athletes. That way, the audience will
              feel entertained and satisfied after watching the match. In addition, exciting matches can also be an
              inspiration for young athletes to perform better.
            </p>
          </div>
          <div>
            <img src={venue} alt="venue-preview" />
          </div>
        </div>
      </section>

      {/* Promotion Card */}
      <section className="bg-[#c23636] text-white py-16">
        <div className="container mx-screen px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={football}
              alt="Soccer Players"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">SPORTIVO</h2>
              <h3 className="text-xl font-semibold">Let's find your partner match and Play Together!</h3>
              <p>Puluhan ribu teman baru sudah menantimu di lapangan,
              yuk download Aplikasi SPORTIVO sekarang juga!</p>
              <button className="inline-block pr-1">
                <img src={gplay} alt="play store" className="h-[42px] hover:opacity-90" />
              </button>
              <button className="inline-block pr-1">
                <img src={app} alt="app store" className="h-[42px] hover:opacity-90" />
              </button>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </>
    )
}
export default Homepage