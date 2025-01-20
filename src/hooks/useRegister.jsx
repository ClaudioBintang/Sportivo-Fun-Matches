import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getRegister } from "../api/register"
import axios from "axios"

export const useRegister = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
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
            setTimeout(() => navigate("/"), 1000);
            setCredentials(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        {handleChange, usedRegister, loading, credentials}
    )
}
