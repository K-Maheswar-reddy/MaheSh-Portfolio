import connectDB from '../utils/connectDB';
import Profile from '../models/Profile';

// Connect to MongoDB once per function
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const profile = await Profile.find(); // fetch all data from collection
            console.log('profile data', profile);
            res.status(200).json(profile); // send JSON response
        } catch (err) {
            console.log('Error fetching profile data:', err);
            res.status(500).json({ error: "failed to fetch data" }); // return error to client
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
