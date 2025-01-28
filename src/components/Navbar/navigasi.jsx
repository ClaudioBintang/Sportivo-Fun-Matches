import { Link } from "react-router-dom"
import Logo from "../../assets/sportivo logo.png"
import avatar from "../../assets/soccer-player.png"
import { useMe } from "../../hooks/useMe"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {getProfile, profile, error} = useMe();

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
<>
<nav className="bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex flex-row items-center">
              <Link to="/">
              <img
                src={Logo}
                alt="Sportivo Logo"
                className="w-auto h-12"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden sm:flex sm:space-x-8">
            <Link
              to="/sparring"
              className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}>
              Play Together
            </Link>
            <Link
              to="/sparring"
              className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}>
              Sparring
            </Link>
            <Link
              to="/sparring"
              className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}>
            booking Field
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
          {token ? (
            <>
            <button
              onClick={handleLogout}
              className="px-6 py-2 text-white transition-colors bg-red-600 border border-red-600 rounded-md hover:bg-white hover:text-red-600">
              Logout
            </button>
            <button>
              <Link to="/profile"><img src={avatar} alt="Profile" className="w-8 h-8"/></Link>
              </button>
              <p className="text-sm italic font-bold">{profile.name}</p>
              </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-6 py-2 text-white transition-colors bg-red-600 border border-red-600 rounded-md hover:bg-white hover:text-red-600">
                SIGN IN
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 text-white transition-colors bg-red-600 border border-red-600 rounded-md hover:bg-white hover:text-red-600">
                SIGN UP
              </Link>
            </>
          )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to={"/sparring"}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Play Together
            </Link>
            <Link
              to={"/sparring"}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Sparring
            </Link>
            <Link
              to={"/sparring"}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              booking Field
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4 space-y-2">
              { token? (
                <>
                <button onClick={handleLogout} className="w-full px-4 py-2 mb-1 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                Log out
                </button>
                <button className="w-full px-4 py-2 mb-1 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                  <Link to="/profile">
                  Go to Profile
                  </Link>
                </button>
                </>
            ) : (
                <> 
              <Link to="/login">
              <button className="w-full px-4 py-2 mb-1 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                SIGN IN
              </button>
              </Link>
              <Link to="/register">
              <button className="w-full px-4 py-2 mt-1 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                SIGN UP
              </button>
              </Link>
              </>
            )}
            </div>
          </div>
        </div>
      )}
    </nav>
</>
    )
}
export default Navbar