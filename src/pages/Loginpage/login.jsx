import Navbar from "../../components/Navbar/navigasi"

const Loginpage = () => {
    return (
        <>
        <Navbar/>
        <div>
            <label htmlFor="email" />
            <input type="email" id="email" placeholder="email" />
            <label htmlFor="password" />
            <input type="password" id="password" placeholder="password" />
        </div>
        </>
    )
}
export default Loginpage