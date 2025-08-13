import connectDB from '../utils/connectDB';
import Skills from '../models/Skills';

// Connect to MongoDB once per function
connectDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const skill = await Skills.find();
            res.status(200).json(skill);
        } catch (err) {
            console.log('Error fetching skill', err);
            res.status(500).json({ error: "failed to fetch skills" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
