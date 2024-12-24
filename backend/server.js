const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// CORS setup
const allowedOrigins = ["http://localhost:3000"]; // Add your frontend's origin here
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// Email route for contact form
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate fields
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    // Nodemailer setup
    let transporter;
    try {
        transporter = nodemailer.createTransport({
            service: "gmail", // Use Gmail or your email service provider
            auth: {
                user: process.env.EMAIL_USER, // Add your email address in .env
                pass: process.env.EMAIL_PASS, // Add your email password or app password in .env
            },
        });
    } catch (err) {
        console.error("Error setting up Nodemailer:", err);
        return res.status(500).json({ error: "Failed to set up email service." });
    }

    const mailOptions = {
        from: `"${name}" <${email}>`, // Dynamically set the sender's email
        to: process.env.COMPANY_EMAIL, // Company's email address
        subject: `Contact Form Submission: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
        `.trim(), // Trim to avoid unnecessary blank spaces
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
});

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.error("Connection failed:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
