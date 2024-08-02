import express from 'express';
const router = express.Router();

import userController from '../controllers/user.js';

import mailController from '../controllers/mail.send.js';

router.get('/' , userController)

router.post('/sendMail' , mailController)



export default router;