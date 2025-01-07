import express  from 'express';
const router = express();





let user = (res , req) => {
    console.log('hyy')
    req.render('index')
}

export default  user;