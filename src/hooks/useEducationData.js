import axios from "axios";
import { useEffect, useState } from "react";
import CONFIG from "../config/config";

const useEducationData = () => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {data} = await axios.get(`${CONFIG.SERVER_URL}/education`)
                setEducation(data);
                console.log(data);
            }catch(error){
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    return {education, loading, error}
}

export default useEducationData;