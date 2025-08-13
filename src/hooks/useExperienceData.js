import axios from 'axios';
import { useEffect, useState } from 'react';
import CONFIG from '../config/config';

const useExperienceData = () => {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                 const {data} = await axios.get(`${CONFIG.SERVER_URL}/experience`)
                setExperience(data);
                console.log(data); 
            }catch (error) {
                setError(error)
                console.log("data fetching for profile has failed");
            } finally{
                setLoading(false)
            }
        } 
        fetchData();
    },[]) // runs only when component mounds

    return {experience, loading, error};
}

export default useExperienceData; 