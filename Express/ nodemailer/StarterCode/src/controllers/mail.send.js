import transporter from '../utils/mail.js'; // Ensure this path is correct

const sendMail = async (req, res) => {
    try {
        console.log(req.body); // Log the request body

        const data = req.body;
        console.log("email ", data.email);
        console.log("subject ", data.subject);
        console.log("subject ", data.message);

        // res.send(data); // Send the data as response

        // Example code for sending an email (uncomment and configure if needed)
    
        const info = await transporter.sendMail({
            from: `abhishek9661342993@gmail.com`, // sender address
            to: data.email, // list of receivers
            subject: data.subject, // Subject line
            text: data.message, // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        res.redirect('/user')
     
    } catch (error) {
        console.error('Error sending mail:', error);
        res.status(500).send('Internal Server Error');
    }
};

export default sendMail;
