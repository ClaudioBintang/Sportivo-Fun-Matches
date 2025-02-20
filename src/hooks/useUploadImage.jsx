import axios from "axios"
import { useState } from "react"

export const useUploadImage = () => {
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState(null)
  const fetchingImage = async () => { 
    try {
        const response = await axios.post("https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/upload-image")
        console.log(response);
        setImage(response)
    } catch (error) {
        console.log(error);
        setError(error)
    } finally {
        setLoading(false)
    }
  }
  return {fetchingImage}
}