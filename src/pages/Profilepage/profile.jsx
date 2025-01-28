import { useMe } from "../../hooks/useMe";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navigasi";
import Footer from "../../components/Footer/footer";
const Profilepage = () => {
    const {getProfile, profile, error} = useMe();

    useEffect(() => {
        getProfile();
    }, [])
    return (
    <>
    <Navbar/>
        <div className="justify-center text-lg font-semibold text-center bg-white border rounded-lg">
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
                ) : (
                <>
                    <p>Nama: {profile?.name || "Tidak tersedia"}</p>
                    <p>Email: {profile?.email || "Tidak tersedia"}</p>
                    <p>Bergabung pada: {profile?.created_at || "Tidak tersedia"}</p>
                </>
                )}
        </div>
    <div className="min-h-screen bg-white">
      <div className="h-16 bg-[#B71C1C] w-full"></div>

      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div className="w-1/3 border-r">
              <div
                className={`py-3 px-4 cursor-pointer ${activeTab === "profile" ? "bg-gray-100" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                Data Diri
              </div>
              <div
                className={`py-3 px-4 cursor-pointer ${activeTab === "password" ? "bg-gray-100" : ""}`}
                onClick={() => setActiveTab("password")}
              >
                Ubah Kata Sandi
              </div>
            </div>

            <div className="w-2/3 p-6">
              {activeTab === "profile" && (
                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Profil</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Nama Lengkap *</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Nama Lengkap"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Username *</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Username"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Nomor Ponsel</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Nomor Ponsel"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                    <button className="bg-[#B71C1C] text-white px-4 py-2 rounded-md hover:bg-[#9A1818]">
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "password" && (
                <div>
                  <h2 className="mb-4 text-2xl font-semibold">Ubah Kata Sandi</h2>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Masukkan Kata Sandi Lama"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                      >
                        {showOldPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Kata Sandi Baru"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Ketik Ulang Kata Sandi Baru"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400">
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    )
}
export default Profilepage