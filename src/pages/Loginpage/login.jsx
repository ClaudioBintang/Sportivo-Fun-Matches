import { Link } from "react-router-dom"
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import football from "../../assets/drawing football.png"
import gplay from "../../assets/google-dark.png"
import app from "../../assets/app-dark.png"
import { useEffect } from "react"
import { useLogin } from "../../hooks/useLogin"

const Loginpage = () => {
    
  const {handleChange, usedLogin, loading, credentials} = useLogin();
  
  useEffect(() => {
      usedLogin();
  }, []);
 
    return (
<> 
    <header>
        <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Left Section - Login Form */}
      <div className="flex items-center justify-center flex-1 p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">SIGN IN</h2>
          </div>
          <form className="space-y-6" onSubmit={usedLogin}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={credentials.email}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={credentials.password}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2">
              {loading ? "Loading..." : "Log In"}
            </button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-gray-500 bg-white">or</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
              <img src={google} alt="Google" className="w-6 h-6" />
            </button>
            <button className="inline-flex items-center justify-center p-2 border rounded-lg hover:bg-gray-50">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </button>
          </div>

          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-red-600 hover:underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Hero */}
      <div className="relative flex items-center justify-center flex-1 p-6 bg-red-600 lg:p-12">
        <div className="relative z-10 text-center text-white">
          <img src={football} alt="football" />
          <h1 className="mb-4 text-4xl font-bold">SPORTIVO,</h1>
          <p className="mb-8 text-2xl">Let's find your partner match and Play Together!</p>
          <p className="mb-8 text-sm">
            Puluhan ribu teman baru sudah menantimu di lapangan, yuk download Aplikasi SPORTIVO sekarang juga!
          </p>
          <a href="#" className="inline-block pr-1">
            <img
              src={gplay}
              alt="Download on the google play Store"
              className="h-[42px] hover:opacity-90"
            />
          </a>
          <a href="#" className="inline-block pl-1">
            <img 
            src={app} 
            alt="download on the app store"
            className="h-[42px] hover:opacity-90"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</>
    )
}
export default Loginpage