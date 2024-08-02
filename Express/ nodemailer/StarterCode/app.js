import express from 'express';
const app = express();
import userRoutes from './src/routes/user.js';

import routesMiddleware from './src/middleware/Routes.js'

app.use(express.urlencoded({ extended : true }))

app.use(express.json())

app.set('view engine' , 'ejs')

// Use the configured routes
app.use(routesMiddleware); // Mount the routes at the root path

app.get('/', (req, res) => {
    // res.send('Welcome to the app!');

    res.redirect('/user')
});








let port = 5000;

app.listen(port , (err)=>{
  console.log(`Server listen on http://localhost:${port}`)
})