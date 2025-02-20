import { useMe } from "../../hooks/useMe";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navigasi";
import Footer from "../../components/Footer/footer";

const Profilepage = () => {
  const { getProfile, profile } = useMe();
  const { updateUser, loading } = useUpdateUser();

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        phone_number: profile.phone_number || "",
        email: profile.email || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(profile?.id, formData);
    getProfile(); // Refresh data setelah update
  };

  return (
    <>
      <Navbar />
      <div className="h-16 bg-[#B71C1C] w-full"></div>
      <div className="min-h-screen bg-white">
        <div className="container px-4 py-8 mx-auto">
          <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex justify-center">
              <div className="w-2/3 p-6">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Profil</h2>
                  <div className="space-y-4">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Nomor Ponsel
                        </label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Nomor Ponsel"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Email"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#B71C1C] text-white px-4 py-2 rounded-md hover:bg-[#9A1818] mt-2"
                      >
                        {loading ? "Saving..." : "Save Change"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profilepage;
