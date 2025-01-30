import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Trophy } from "lucide-react";
import Navbar from "../../components/Navbar/navigasi";
import Footer from "../../components/Footer/footer";
import { useActivityDetail } from "../../hooks/useActivityDetail";
// import sport from "../../assets/sport indonesia.png";
const ActivityDetailpage = () => {
  const { activity, loading, error } = useActivityDetail();

  if (loading) return <p className="text-lg text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!activity) return <p className="text-center text-gray-500">Data not found.</p>;

  return (
    <>
      <Navbar />
      <main className="container px-4 py-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Team Info Section */}
          <div className="flex flex-col gap-8 mb-8 md:flex-row">
            {/* Left Side - Team Image */}
            <div className="w-full md:w-1/3">
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Side - Team Details */}
            <div className="w-full md:w-2/3">
              <h1 className="mb-4 text-3xl font-medium">{activity.title}</h1>

              <div className="flex items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>{activity.sport_category?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{activity.city?.city_name}</span>
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
                <div className="text-2xl font-bold">Rp {activity.price?.toLocaleString()}</div>
                <Link to={`/payment/${activity.id}`}>
                  <button className="bg-[#c23636] text-white px-8 py-3 rounded-lg hover:bg-[#a62e2e] transition-colors">
                    Take the Match
                  </button>
                </Link>
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <h2 className="mb-3 font-bold">Sparring Description</h2>
                <p className="text-gray-600">{activity.description}</p>
              </div>

              {/* Venue Section */}
              <div>
                <h2 className="mb-3 font-bold">Venue Location</h2>
                <p className="mb-4 text-gray-600">{activity.address}</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src={activity.map_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Date & Time</h3>
                <p className="text-gray-600">{activity.activity_date}</p>
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
      <Footer />
    </>
  );
};

export default ActivityDetailpage;
