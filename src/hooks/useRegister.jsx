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
        role: "",
    })
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials((prev) => ({...prev, [name]: value ?? ""}));
    }
    const usedRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/register", credentials,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log("response", response.data);
            setCredentials(response.data);
            setSuccess("Register Success..");
            setTimeout(() => 
            navigate("/login"), 2000);
        } catch (error) {
            console.log(error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "Register Failed..");
        } finally {
            setLoading(false);
        }
    }
    return (
        {handleChange, usedRegister, loading, credentials, success, error}
    )
}
