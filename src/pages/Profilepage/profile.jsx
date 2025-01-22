import { useMe } from "../../hooks/useMe";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/navigasi";

const Profilepage = () => {
    const {getProfile, profile, error} = useMe();

    useEffect(() => {
        getProfile();
    }, [])
    return (
    <>
    <Navbar/>
    <h1>hello, this is profil page</h1>
    {error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : (
                    <>
                        <p>Nama: {profile?.name || "Tidak tersedia"}</p>
                        <p>Email: {profile?.email || "Tidak tersedia"}</p>
                        <p>Bergabung pada: {profile?.created_at || "Tidak tersedia"}</p>
                    </>
                )}
    </>
    )
}
export default Profilepage