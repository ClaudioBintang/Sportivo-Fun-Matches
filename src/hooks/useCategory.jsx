import { useState, useEffect } from "react";
import  axios  from "axios";

export const useCategory = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
}