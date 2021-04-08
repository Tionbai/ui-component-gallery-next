import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const DEMO_USER = process.env.DEMO_USER;
const DEMO_PASS = process.env.DEMO_PASS;
const MY_USER = process.env.MY_USER;

const sendContactMail = (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: DEMO_USER,
      pass: DEMO_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: DEMO_USER,
    to: MY_USER,
    subject: `Message from ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res
        .status(500)
        .json({
          message:
            "We are sorry, something happened and we could not send your message.",
        });
      return info;
    } else {
      res.status(200).json({ message: "Message successfully sent." });
      return err;
    }
  });
};

export default sendContactMail;
