import axios from 'axios';
import { useEffect, useState } from 'react';
import CONFIG from '../config/config';

const useSkillsData = () => {
    const [skill, setSkill] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                 const {data} = await axios.get(`${CONFIG.SERVER_URL}/skills`)
                setSkill(data);
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

    return {skill, loading, error};
}

export default useSkillsData; 