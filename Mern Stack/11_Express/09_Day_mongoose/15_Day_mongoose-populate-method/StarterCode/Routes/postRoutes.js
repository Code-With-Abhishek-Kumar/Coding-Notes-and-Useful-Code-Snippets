const express = require('express');
const router = express();

const postController = require('../controllers/postController')



router.get('/create' , postController.create  )









module.exports = router