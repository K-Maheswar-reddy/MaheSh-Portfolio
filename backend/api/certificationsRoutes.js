import connectDB from '../utils/connectDB';
import Certifications from '../models/Certifications';

// Connect to MongoDB once per function
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const certification = await Certifications.find();
            res.status(200).json(certification);
        } catch (err) {
            console.log('Error fetching certification', err);
            res.status(500).json({ error: "failed to fetch certification" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
