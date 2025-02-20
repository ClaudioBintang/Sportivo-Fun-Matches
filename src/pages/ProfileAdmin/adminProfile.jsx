import { useMe } from "../../hooks/useMe";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav/profileadmin";
import SideBar from "../../components/SideBar/sidebarAdmin";
const ProfileAdmin = () => {
  const { getProfile, profile, error } = useMe();
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
    await updateUser(profile.id, formData);
    getProfile();
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
    <div className="flex h-screen">
    <div className="w-64 border-r bg-white">
        <div className="flex h-16 items-center px-4">
          <span className="font-bold">SPORTIVO</span>
        </div>
        <SideBar />
        </div>
        
  
    <div className="flex-1">
    <header className="flex h-16 items-center justify-between border-b px-4">
            <AdminNav />
        </header>

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
                          value={formData?.name}
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
                          value={formData?.phone_number}
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
                          value={formData?.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Email"
                          />
                      </div>
                      <button
                        disabled={loading}
                        className="bg-[#B71C1C] text-white px-4 py-2 rounded-md hover:bg-[#9A1818] mt-2"
                      >
                        {loading ? "saving..." : "save Change"}
                      </button>
                    </form>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-semibold">
                    Ubah Kata Sandi
                  </h2>
                  <div className="space-y-4">
                    <div className="relative">
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                      >
                        {/* {showOldPassword ? "Hide" : "Show"} */}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        // type={showNewPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Kata Sandi Baru"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                        // onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                        {/* {showNewPassword ? "Hide" : "Show"}  */}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        // type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Ketik Ulang Kata Sandi Baru"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                        // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {/* {showConfirmPassword ? "Hide" : "Show"} */}
                      </button>
                    </div>
                    <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400">
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
    }
export default ProfileAdmin