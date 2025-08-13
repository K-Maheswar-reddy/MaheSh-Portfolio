import connectDB from '../utils/connectDB'; // a helper to connect MongoDB
import Experience from '../models/Experience';

// Connect to MongoDB once per function
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const experience = await Experience.find();
            res.status(200).json(experience);
        } catch (err) {
            console.log('Error fetching experiences', err);
            res.status(500).json({ error: "failed to fetch experience" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
