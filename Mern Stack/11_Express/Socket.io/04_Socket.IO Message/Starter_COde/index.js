// Importing the express module, which is a web application framework for Node.js
const express = require('express');

// Create an instance of the express application
const app = express();

// Import the HTTP module from Node.js to create an HTTP server
const http = require('http');

// Import the 'path' module from Node.js to work with file and directory paths
const path = require('path');

// Import socket.io for WebSocket functionality to enable real-time communication
const socketio = require('socket.io');

// Create an HTTP server using the express app, allowing us to integrate socket.io later
const httpServer = http.createServer(app);

// Set up middleware to serve static files (e.g., images, stylesheets, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS (Embedded JavaScript), allowing dynamic HTML rendering with data
app.set('view engine', 'ejs');

// Initialize socket.io with the HTTP server to enable real-time bi-directional communication
const io = socketio(httpServer);


// Define the event listener for when a client connects via socket.io
io.on('connection', (socket) => {
    // Log a message when a client connects
    console.log('a user connected');

    io.emit('chat message', 'Hello World kese ho');
    
    // Log the unique ID assigned to the socket connection
    console.log('slockerert', socket);
    console.log('User Id', socket.id);
    // io.emit('chat message', 'Hello World kese ho');
    
    // Emit a message to all clients connected to the server
    // This will broadcast the message 'Hello World kese ho' to all connected clients
   
});

// Log the socket.io instance for debugging purposes


// Set up the route handler for the root path ('/') of the web application
app.get('/', (req, res) => {
    // Render the 'index' view using EJS when the root path is accessed

   

    res.render('index');
});

// Start the HTTP server on port 3000 and listen for incoming requests
httpServer.listen(3000, () => {
    // Log a message to indicate that the server is successfully running and listening
    console.log('listening on *:3000');
});
