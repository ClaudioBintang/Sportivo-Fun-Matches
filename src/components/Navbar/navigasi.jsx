import { Link } from "react-router-dom"
import Logo from "../../assets/sportivo logo.png"
import avatar from "../../assets/soccer-player.png"
import { useMe } from "../../hooks/useMe"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
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
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return (
<>
<nav className="sticky top-0 z-20 w-screen bg-white shadow-sm">
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
              to="/activity"
              className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}>
              Play Together
            </Link>
            <Link
              to="/activity"
              className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}>
              Sparring
            </Link>
            <a
              href="/#about"
              className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900"
              style={{ fontFamily: "Georgia, serif" }}>
            About us
            </a>
          </div>

          {/* Authentication Buttons */}
          <div className="relative flex items-center space-x-4">
            
          {token ? (
            <>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative flex items-center">
              <img
                src={avatar}
                alt="Profile"
                className="w-10 h-10 border-2 border-red-500 rounded-full cursor-pointer"
              />
              {/* <p className="text-sm italic font-bold px-2">{profile.name}</p> */}
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div ref={dropdownRef} className="absolute mt-40 overflow-hidden text-white bg-red-600 border border-red-700 rounded-md shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm transition duration-200 hover:bg-red-700"
                >
                  Profile
                </Link>
                <Link
                  to="/mytransaction"
                  className="block px-4 py-2 text-sm transition duration-200 hover:bg-red-700"
                >
                  Transactions
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-sm text-left transition duration-200 hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            )}
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
              to={"/activity"}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Play Together
            </Link>
            <Link
              to={"/activity"}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Sparring
            </Link>
            <Link
              to={"/activity"}
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
                <button className="w-full px-4 py-2 mb-1 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                  <Link to="/mytransaction">
                  My Transaction
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