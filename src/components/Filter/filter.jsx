import lokasi from "../../assets/lokasi.png";
import cabor from "../../assets/cabor.png";
import aktivitas from "../../assets/aktivitas.png";
import { useSportCategories }from "../../hooks/useFilter"
import { useLocations } from "../../hooks/useFilter";
import { useEffect } from "react";
const Filter = () => {
    const { categories, loading, error, fetchCategories } = useSportCategories();
    const { locations, loading2, error2, fetchLocations } = useLocations();

    const handleSearch = () => {
        console.log("Search clicked"), {
            category: selectedCategory,
            location: selectedLocation,
        };
    }
    useEffect(() => {
        fetchCategories();
    }, []);
    
    useEffect(() => {
        fetchLocations();
    }, []);
    return (
  <>
    <div className="w-screen bg-[#B22222] rounded-lg p-4">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        {/* Activity Section */}
        {/* <div className="flex-1 w-full">
          <div className="flex items-center gap-3 text-white">
            <img src={aktivitas} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <label htmlFor="activity" className="text-sm font-medium">
                Aktivitas
              </label>
              <select
                id="activity"
                className="w-full text-sm bg-transparent border-none text-white/80 focus:outline-none"
              >
                <option value="" className="text-gray-900">
                  Activity
                </option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Divider */}
        <div className="hidden w-px h-8 md:block bg-white/20" />

        {/* Location Section */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 text-white">
            <img src={lokasi} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <label htmlFor="location" className="text-sm font-medium">
                Lokasi
              </label>
              <select
                id="location"
                className="w-full text-sm bg-transparent border-none text-white/80 focus:outline-none">
                <option value="" className="text-gray-900">
                  choose location
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden w-px h-8 md:block bg-white/20" />

        {/* Sport Section */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 text-white">
            <img src={cabor} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <label htmlFor="sport" className="text-sm font-medium">
                Cabang Olahraga
              </label>
              <select id="sport" className="w-full text-sm bg-transparent border-none text-white/80 focus:outline-none">
              <option value="" className="text-gray-900">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto px-6 py-2 bg-white rounded-lg text-[#B22222] font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
          Temukan
          {/* <ArrowRight className="w-4 h-4" /> */}
        </button>
      </div>
    </div>
  </>
  )
}

export default Filter