import express from 'express';
const routes = express();
import userRoutes from '../routes/user.js';


routes.use('/user', userRoutes); // Ensure userRoutes is a router


// routes.use('/users', userRoutes); // Mount user routes at /users





export default routes; // Export the routes