import { useEffect } from "react";
import { usePayment } from "../../hooks/usePayment"
const Paymentpage = () => {
    const {getPayment, payment} = usePayment();
    useEffect (() => {
        getPayment();
    }, [])
    return (
        <>
        
        </>
    )
}