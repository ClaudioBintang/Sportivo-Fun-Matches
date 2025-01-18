import { Link } from "react-router-dom"
import logo from "../../assets/toronto logo.png"
import tekslogo from "../../assets/toronto teks.png"
const Navbar = () => {
    return (
        <>
        <div className="flex items-center justify-between px-4 bg-slate-400">
            <Link to="/">
            <div className="flex w-auto items-start-center">
                <img src={logo} alt="logo"/>
                <img src={tekslogo} alt="logo" />
            </div>
            </Link>
         <div className="flex gap-4">
            <Link to="/">Sparring</Link>
         </div>
         <div className="px-1">
            <Link to="/register">Register</Link>
            <Link to="/login" className="px-4 py-2 text-white bg-blue-500 rounded-lg">Login</Link>
         </div>
        </div>
        </>
    )
}
export default Navbar