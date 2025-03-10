import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMe } from "../../hooks/useMe";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/soccer-player.png"
const AdminNav = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { getProfile, profile, error } = useMe();

  useEffect(() => {
    getProfile();
  }, [])

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login")
    })
  }
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full focus:outline-none"
      >
        <img src={avatar} alt="Avatar" className="w-8 h-8 border-2 border-red-500 rounded-full cursor-pointer" />
      </button>

      {open && (
        <div className="absolute left-0 w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-2">
            <p className="text-sm font-medium">{profile.name}</p>
            <p className="text-xs text-gray-500">{profile.email}</p>
          </div>
          <div className="border-t border-gray-200">
            <Link to="/profileadmin">
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100">Profile</button>
            </Link>
            <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100">Settings</button>
          </div>
          <div className="border-t border-gray-200">
            <button onClick={handleLogout} className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100">
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminNav