import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Extract data from the request body
    const { name, email, phone, subject, message } = req.body;

    console.log("process.env.EMAIL_USER", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD,);
    // Check if required fields are missing
    if (!name || !email || !message) {
      
      return res.status(400).json({ message: "Missing required fields: name, email, and message." });
    }

    try {
      // Create a transporter object using SMTP
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER, // Email address from env variables
          pass: process.env.EMAIL_PASSWORD, // Email password from env variables
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "hello@nestosh.com", // Change this to the recipient's email
        subject: subject || "New Contact Form Submission",
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone || 'Not provided'}
          Message: ${message}
        `,
      };

      // Send the email
     const respo =  await transporter.sendMail(mailOptions);
      console.log("respo", respo);
      
      // If the email is sent successfully, return a success response
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);

      // If there's an error, return an error response with more details
      res.status(500).json({ message: "Error sending email", error: error.message });
    }
  } else {
    // Method not allowed for non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
