import axios from 'axios';
import { useEffect, useState } from 'react';
import CONFIG from '../config/config';

const useProfileData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // axios returns an object with status,statustext and data,
                // we only require data from object so object destructuring used below
                const {data} = await axios.get(`${CONFIG.SERVER_URL}/profile`)
                setUsers(data);
                console.log(data);

                /**
                 * the below is the normal way to get data from axios object
                 * const response = await axios.get(...);
                 * const data = response.data; 
                */

            }catch (error) {
                setError(error)
                console.log("data fetching for profile has failed");
            } finally{
                setLoading(false)
            }
        } 
        fetchData();
    },[]) // runs only when component mounds

    return {users, loading, error};
}

export default useProfileData;


/**
 * 
 *          axios.get(`${CONFIG.SERVER_URL}/profile`)
            //here we are gettting data as a response object and data is akey to access it, we can chnage obj name to any name but using that only we have to use key
            .then(
                (res) => {
                    setUsers(res.data);
                    console.log(res.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
 */