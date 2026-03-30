// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const router = express.Router();

app.get('/test', (req, res) => {
  res.json({ message: 'GET test endpoint works!' });
});

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5005, () => console.log("Server Running on port 5005."));

console.log("Email User:", process.env.EMAIL_USER || "Not set");
console.log("Email Pass:", process.env.EMAIL_PASS ? "*****" : "Not set");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("SMTP Verification Error:", error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const { email, message, phone } = req.body;
  
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email Send Error:", error);
      res.status(500).json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
