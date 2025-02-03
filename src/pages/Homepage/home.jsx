import Footer from "../../components/Footer/footer"
import Navbar from "../../components/Navbar/navigasi"
import gplay from "../../assets/google-dark.png"
import app from "../../assets/app-dark.png"
import venue from "../../assets/venue-preview.png"
import hero from "../../assets/Banner.png"
import football from "../../assets/drawing football.png"
import Filter from "../../components/Filter/filter"
import timnas from "../../assets/Timnas indo.jpg"
import yahoo from "../../assets/Yahoo Sports.jpg"
import basket from "../../assets/Sports.jpg"
import soccer from "../../assets/Soccer Girl.jpg"
const Homepage = () => {
    return (
    <>
    <Navbar/>
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 object-cover w-full h-full"
      />
      
      <div className="relative flex flex-col items-start justify-center h-full px-6 bg-black bg-opacity-10 text-start">
        <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl">Sportivo</h1>
        <p className="max-w-2xl mt-4 text-base font-medium text-white md:text-lg lg:text-xl">
          Platform for sport lovers who want to find a sport venue, or find friends to play with. <br className="hidden md:block" />
          Sports are made easy and fun.
        </p>
      </div>
    </div>

      {/* Search Section */}
      <Filter />
      {/* Features Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={timnas}
              alt="Sport 1"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <img
              src={yahoo}
              alt="Sport 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <img
              src={basket}
              alt="Sport 3"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <img
              src={soccer}
              alt="Sport 4"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>  
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: "#8A1010" }}>FIND A SPARRING OPPONENT</h4>
            <h2 className="text-3xl font-bold">Find a sparring partner opponent in just a tap of a finger</h2>
            <p className="text-gray-600">
            Now you don't have to bother looking for sparring partners. Easily make new friends and opponents every week only on the SPORTIVO App!
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
        <div className="container px-4 mx-screen">
          <div className="grid items-center gap-8 md:grid-cols-2">
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
              <p>Tens of thousands of new friends are waiting for you on the field, let's download the SPORTIVO App now!</p>
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