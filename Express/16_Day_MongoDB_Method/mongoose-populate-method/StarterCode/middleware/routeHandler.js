const express = require('express');
const userRoutes = require('../Routes/userRoutes');
const postRoutes = require('../Routes/postRoutes');

const router = express.Router();

// Mounting user routes
router.use('/user' , userRoutes);
router.use('/post' , postRoutes);

// Mounting post routes
// router.use('/posts', postRoutes); 

module.exports = router;