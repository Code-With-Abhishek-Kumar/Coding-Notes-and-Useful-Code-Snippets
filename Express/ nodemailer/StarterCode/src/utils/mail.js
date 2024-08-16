
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server hostname 
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "your email id", //  Email address used for authentication
      pass: "your password", //   Password for the email address 
      
    },
  });

export default transporter;

//  Where to get password 
//  1. Open Gmail
//  2. Click on your profile picture
//  3. Click on manage your google account
//  4 . Search App password and click on it
// 5. It will ask App name Enter any name Ex :- myApp
//  6. It will create a randam password copy it 
// 7. and past inside pass   pass: "your password", //   Password for the email address 
