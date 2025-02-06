import lokasi from "../../assets/lokasi.png";
import cabor from "../../assets/cabor.png";
import { useEffect } from "react";
import useSportsAndLocations from "../../hooks/useFilter";
import { useNavigate } from "react-router-dom";
const Filter = () => {
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
    if (selectedLocation || selectedCategory) {
      filterActivities();
    }
  }, [selectedLocation, selectedCategory]);
  
  return (
    <div className="w-screen bg-[#B22222] rounded-xl p-4">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="hidden w-px h-8 md:block bg-white/20" />

        {/* Location Section with Dropdown */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 text-white">
            <img src={lokasi} alt="" className="w-5 h-5" />
            <div className="relative">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <input
              type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent border-b border-white/50 text-white/80 focus:outline-none focus:border-white"
                placeholder="find location"
              />
              <select
                id="location"
                value={selectedLocation?.city_id || ""}
                onChange={(e) => {
                  const selectedCityId = parseInt(e.target.value);
                  const selectedCity = filteredCities.find(
                    (city) => city.city_id === selectedCityId
                  );
                  console.log("selected city", selectedCity); //debugging sementara
                  setSelectedLocation(selectedCity || null);
                }}
                className="absolute mt-2 bg-transparent w-5 bottom-0 text-white/80">
                <option value=""></option>
                {filteredCities.map((city) => (
                  <option key={city.city_id} value={city.city_id} className="text-gray-900">
                    {city.city_name}
                  </option>
                ))}
              </select>
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
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
                className="w-full text-sm bg-transparent border-none text-white/80 focus:outline-none">
                {/* <option value="">Choose Sports</option> */}
                {filteredCategories.map((category) => (
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
          onClick={() => handleSearch(navigate)}
          className="w-full md:w-auto px-6 py-2 bg-white rounded-lg text-[#B22222] font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
          Find out
        </button>
      </div>
    </div>
  );
};

export default Filter;
