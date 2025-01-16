import { Link } from "react-router-dom"
import logo from "../../assets/toronto logo.png"
import tekslogo from "../../assets/toronto teks.png"
// import tekslogo from "src/assets/toronto teks.jpg"
const Navbar = () => {
    return (
        <>
        <div className="flex items-center justify-between bg-slate-400">
            <div className="flex w-48 items-start-center">
                <img src={logo} alt="logo"/>
                <img src={tekslogo} alt="logo" />
            </div>
         <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         </div>
        </div>
        </>
    )
}
export default Navbar