import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useSportsAndLocations from "../../hooks/useFilter";
import Navbar from "../../components/Navbar/navigasi";
import Footer from "../../components/Footer/footer";
import football from "../../assets/drawing football.png";
import gplay from "../../assets/google-dark.png";
import app from "../../assets/app-dark.png";
import timnas from "../../assets/Timnas indo.jpg";

const ActivityPage = () => {
  
  const {
    provinces,
    categories,
    selectedLocation,
    selectedCategory,
    filteredActivities,
    setSelectedCategory,
    setSelectedLocation,
    filterActivities,
    handleSearch,
    filteredCities,
    searchQuery,
    setSearchQuery,
    searchCategory,
    setSearchCategory,
    filteredCategories,
  } = useSportsAndLocations();

  const navigate = useNavigate();
  useEffect(() => {
      filterActivities();
    }, [selectedLocation, selectedCategory]);
  return (
    <>
    <Navbar />
    <div>
      <div className="bg-[#B71C1C] text-white py-16 text-center relative mb-6">
          <div className="absolute inset-0 bg-[url('/wave-bg.svg')] bg-cover bg-center opacity-10" />
          <h1 className="relative z-10 text-4xl font-bold md:text-5xl">CARI LAWAN SPARRING</h1>
        </div>
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredActivities.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden transition bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg border-2"
              onClick={() => navigate(`/activity/${item.id}`)}>
              <img src={timnas} alt={item.title} className="object-cover w-full h-48" />
              <div className="p-1 flex justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Rp {item.price.toLocaleString()}</p>
              </div>
              <div className="p-1 flex justify-between">
                <p className="text-gray-600">{item.address}</p>
                <p className="text-gray-600">{item.activity_date}</p>
              </div>
            </div>
          ))}
          </div>
        ) : (
          <>
          <p>Data not found</p>
          </>
        )}
    </div>

    {/* Promotion Card */}
          <section className="bg-[#c23636] text-white py-16 mt-6">
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
    <Footer />
    </ >
  );
};

export default ActivityPage;
