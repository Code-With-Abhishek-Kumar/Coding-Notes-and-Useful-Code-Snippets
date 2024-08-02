
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "abhishek9661342993@gmail.com",
      pass: "pkmc nlkp jmcx mlma",
    },
  });

export default transporter;
