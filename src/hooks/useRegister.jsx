import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const useRegister = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        c_password: "",
        phone_number: "",
        address: "",
        role: "",
    })
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials((prev) => ({...prev, [name]: value}))
    }
    const usedRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/register", credentials);
            console.log("response", response);
            setTimeout(() => navigate("/login"), 2000);
            setCredentials(response.data);
            setSuccess("Register Success..");
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data);
        } finally {
            setLoading(false);
        }
    }
    return (
        {handleChange, usedRegister, loading, credentials, success, error}
    )
}
