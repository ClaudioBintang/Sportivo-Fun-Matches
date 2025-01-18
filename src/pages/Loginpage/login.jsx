import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/navigasi"
import { useEffect } from "react"
import { useLogin } from "../../hooks/useLogin"

const Loginpage = () => {
    
  const {handleChange, usedLogin, loading, credentials} = useLogin();
  
  useEffect(() => {
      usedLogin();
  }, []);
 
    return (
        <> 
        <Navbar/> 
        <header>
            <div>
                <div>
                    <form onSubmit={usedLogin}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email"
                            name="email"
                            placeholder="input email"
                            onChange={handleChange}
                            value={credentials.email}
                             />
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <input type="password"
                            name="password"
                            placeholder="input password" 
                            onChange={handleChange}
                            value={credentials.password}
                            />
                        </div>
                        <div>
                            <button
                            type="submit"
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                            disabled={loading}>
                            {loading ? "Loading..." : "Login"}
                            </button>
                        </div>
                    </form>
                    <div>
                        <p>Don't Have an account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Loginpage