import { useMe } from "../../hooks/useMe";
import { useEffect } from "react";

const Profilepage = () => {
    const {getProfile, profile} = useMe();
    useEffect(() => {
        getProfile();
    }, [])
    return (
        <div className="profilepage-container"> 
            <h1>Profile</h1>
            <p>{profile.username}</p>
        </div>
    )
}
export default Profilepage