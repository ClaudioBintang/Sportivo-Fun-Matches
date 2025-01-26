import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const useLogin = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({success: "", error: ""});
    const navigate = useNavigate();

    const handleChange = (event) => {
            const {name, value} = event.target;
            setCredentials((prev) => ({...prev, [name]: value}))
    }
    const usedLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/login', credentials);
            console.log("response", response.data?.data?.token);
            localStorage.setItem("token", response.data?.data?.token);
            setMessage({success: "Redirecting..."});
            setTimeout(() => navigate("/"), 1000);
            setCredentials(response.data);
        } catch (error) {
            console.log(error);
            setMessage({success: "", error: "Invalid email or password"});
        } finally {
            setLoading(false);
        }
    }
    return (
        {handleChange, usedLogin, loading, credentials, message}
    )
}
