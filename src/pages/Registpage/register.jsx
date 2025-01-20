import { useEffect } from "react";
import Navbar from "../../components/Navbar/navigasi"
import { useRegister } from "../../hooks/useRegister";

const Registpage = () => {
    const {handleChange, usedRegister, loading, credentials, success, error} = useRegister();
    
    useEffect(() => {
     usedRegister();
    }, []);   
    return (
        <>
        <Navbar/>
        <h3>regisstt</h3>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div>
            <form onSubmit={usedRegister}>
                
                <label htmlFor="username"></label>
                <input 
                type="name" 
                name="name"
                placeholder="username"
                onChange={handleChange}
                value={credentials.username}
                />
                <label htmlFor="email"></label>
                <input 
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={credentials.email}
                />
                <label htmlFor="password"></label>
                <input 
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={credentials.password}
                />
                <label htmlFor="confirm password"></label>
                <input 
                type="password"
                name="c_password"
                placeholder="confirm password"
                onChange={handleChange}
                value={credentials.c_password}
                />
                <input 
                type="text"
                name="role"
                placeholder="what's your role?"
                onChange={handleChange}
                value={credentials.role}
                 />
                <button className="bg-blue-500" disabled={loading}>{loading ? "Loading..." : "Register"}</button>
            </form>
        </div>
        </>
    )
}
export default Registpage