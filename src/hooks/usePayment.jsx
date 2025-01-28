import axios from "axios";
import { useState } from "react";

export const usePayment = () => {
    const [payment, setPayment] = useState([]);
    
    const getPayment = async () => {
        try {
            const response = await axios.get(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/payment-methods`);
            console.log(response.data.result);
            setPayment(response.data);
        } catch (error) {
            console.log(error);
            
        }
    }
    return {getPayment, payment}
}