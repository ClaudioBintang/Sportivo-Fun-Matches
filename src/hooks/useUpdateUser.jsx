import { useState } from "react"

export const getUpdateUser = async () => {
    // const [activeTab, setActiveTab] = useState("profile")
    // const [showOldPassword, setShowOldPassword] = useState(false)
    // const [showNewPassword, setShowNewPassword] = useState(false)
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const updateUser = async (userId, data) => {
        setLoading(true)
        try {
            const response = await axios.post(`https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/users/${userId}`, data)
        } catch (error) {
            console.log(error)
            
        }
}}
