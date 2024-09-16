// pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // or another service you prefer
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables for security
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "recipient@example.com", // Set this to the recipient's email
      subject: subject || "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
