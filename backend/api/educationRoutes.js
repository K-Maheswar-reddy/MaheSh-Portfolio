import connectDB from '../utils/connectDB';
import Education from '../models/Education';

// Connect to MongoDB once per function
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const educationD = await Education.find();
            res.status(200).json(educationD);
        } catch (err) {
            console.log('Error fetching education', err);
            res.status(500).json({ error: "failed to fetch education" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
