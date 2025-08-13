// backend/routes/sendEmail.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
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
});

module.exports = router;
