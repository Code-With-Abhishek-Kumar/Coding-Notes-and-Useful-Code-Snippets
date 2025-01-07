# Express Application Setup

1. To SetUp Express in Our Project follow these Steps



`Second Enter Your Package Name`

### **Step 1: Initial Setup**

Before starting with Express, you need to set up Node.js and NPM (Node Package Manager).

**1. Install Node.js and NPM:**


- Go to Node.js website and download the latest stable version of Node.js. This will automatically install both Node.js and NPM.




**2. Initialize a New Project**

- Once Node.js is installed, create a new project directory and initialize it.


````bash
mkdir express-app
cd express-app
npm init -y


````

**3. Install Express**

````bash
$ npm install express
````

- This will install Express and add it as a dependency in your project.


###  Basic Express Setup

- Now that we have everything installed, let's set up a basic Express application.

`app.js (Basic Setup)`

````js
// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Set a port to listen on
const port = 3000;

// Basic GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Make the app listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


````

**Explanation:**

1. Import Express:

- The line `const express = require('express');` imports the Express framework.

2. Create an Express Application:

- `const app = express();` initializes a new Express application. This object `(app)` is used to define routes, middleware, settings, and to start the server.


3. Define a Route:


- In the line `app.get('/', (req, res) => { ... })`, we're setting up a route handler for HTTP `GET` requests to the root URL `(/)`. When users visit the URL, they receive a response saying "Hello, World!".


4. Start the Server:

- `app.listen(port, () => { ... })` starts the server on the specified port (in this case, `3000`). The `console.log() ` inside the callback function ensures that the server is up and running.


5. Middleware in Express

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next function. They can modify the request and response, or call the next() function to pass control to the next middleware in the chain.

**Basic Middleware Example**

````
// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass the control to the next middleware
});


````

Explanation:


1. `app.use():`


- This function is used to register middleware that will run for all requests to your app. Middleware defined here will be executed for every incoming HTTP request, no matter the route or method.


2. `Log Request Method and URL:`

- `console.log(${req.method}` ${req.url}); logs the HTTP method (e.g., `GET`, `POST`) and the URL of the incoming request to the console.

3. `next():`

- The `next()` function is called to pass control to the next middleware or route handler.


### Using express.json() and express.urlencoded()

- These middleware functions help Express parse incoming request bodies. This is especially useful when you're handling POST or PUT requests.



`express.json()`

-  This middleware parses incoming requests with JSON payloads.

````js

// Middleware to parse JSON data from the request body
app.use(express.json());

// POST route example
app.post('/json', (req, res) => {
    const data = req.body;
    res.json({ message: 'Received JSON', data });
});

````

`express.urlencoded()`