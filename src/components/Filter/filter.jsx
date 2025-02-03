import lokasi from "../../assets/lokasi.png";
import cabor from "../../assets/cabor.png";
import { useSportsAndLocations } from "../../hooks/useFilter";
import { useState, useEffect } from "react";

const Filter = ({ setSearchParams }) => {
  const { categories, locations, loading, error } = useSportsAndLocations();
  
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations); // Menyimpan lokasi yang difilter

  const handleSearch = () => {
    console.log("Search clicked");
    console.log({
      category: selectedCategory,
      location: selectedLocation,
    });
    setSearchParams({
      category: selectedCategory,
      location: selectedLocation,
    });
  };

  const handleLocationSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSelectedLocation(query);
    
    // Filter lokasi berdasarkan input
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(query)
    );
    setFilteredLocations(filtered);
  };

  return (
    <div className="w-screen bg-[#B22222] rounded-lg p-4">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="hidden w-px h-8 md:block bg-white/20" />
        
        {/* Location Section */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 text-white">
            <img src={lokasi} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <input
                id="location"
                value={selectedLocation}
                onChange={handleLocationSearch}
                list="locations"
                className="w-full text-sm bg-transparent border-b border-white/50 text-white/80 focus:outline-none focus:border-white"
                placeholder="Search Location"
              />
              <datalist id="locations">
                {filteredLocations.map((location) => (
                  <option key={location.id} value={location.name} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        <div className="hidden w-px h-8 md:block bg-white/20" />
        
        {/* Sport Section */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 text-white">
            <img src={cabor} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <label htmlFor="sport" className="text-sm font-medium">
                Sports
              </label>
              <select
                id="sport"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-sm bg-transparent border-none text-white/80 focus:outline-none"
              >
                <option value="">Choose Sports</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="text-gray-900">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-2 bg-white rounded-lg text-[#B22222] font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
        >
          Find Out
        </button>
      </div>
    </div>
  );
};

export default Filter;
