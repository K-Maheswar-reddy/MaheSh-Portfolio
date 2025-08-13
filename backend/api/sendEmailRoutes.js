import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, phone, email, reason } = req.body;

        try {
            // Send request to EmailJS API from backend
            const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                template_params: {
                    name,
                    phone,
                    email,
                    reason
                }
            });

            res.status(200).json({ success: true, message: "Email sent successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Failed to send email" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
