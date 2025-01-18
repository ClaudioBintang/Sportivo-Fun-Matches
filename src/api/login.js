import axios from "axios";
export const getLogin = async () => {
    try {
        const response = await axios.post('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/login');
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
 }

