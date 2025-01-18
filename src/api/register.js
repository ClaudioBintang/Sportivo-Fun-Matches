import axios from "axios";

export const getRegister = async () => {
    try {
        const response = await axios.post('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/register');
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}