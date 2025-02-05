## What is Socket?

Socket is a way of connecting two nodes on a network to communicate with each other. One socket(node) listens on a particular port at an IP, while other socket reaches out to the other to form a connection. The server forms the listener socket while the client reaches out to the server.


##  What is a Socket ID?

- A socket ID is a unique identifier assigned to each client that connects to the server.

- This ID is automatically generated when the client connects to the server. It is used to identify and target a specific client when sending messages from the server.

**Example:**

```javascript

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log('User Id', socket.id);
});

```



## Socket io Setup

### 1. Client Side


```html
<!-- Including Socket.io library from CDN to allow real-time communication -->
<script
  src="https://cdn.socket.io/3.1.3/socket.io.min.js"
  integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh"
  crossorigin="anonymous"
></script>

<script>
  var socket = io('http://localhost:3000')

  // Establish a connection to the server via Socket.io
  const socket = io()

  // This event listener waits for the connection to the server
  socket.on('connect', () => {
    console.log('Connected to server')
  })
</script>
```


### 2. Server Side

```javascript

// Importing the express module, 
const express = require('express');

// Create an instance of the express application
const app = express();

// Import the HTTP module 
const http = require('http');

// Import the 'path' module 
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


// Listen for incoming connections on the server

// Define the event listener for when a client connects via socket.io
io.on('connection', (socket) => {
    // Log a message when a client connects
    console.log('a user connected');
    
    // Log the unique ID assigned to the socket connection
    console.log('User Id', socket.id);

    // Emit a message to all clients connected to the server
    // This will broadcast the message 'Hello World kese ho' to all connected clients
   
});



httpServer.listen(3000, () => {
  console.log('Server running on port 3000');
});

```



## Socket.io Events

### 1. Connection Event (Server-Side Event)


- This event is triggered when a client connects to the server.

```javascript


socket.on("connect", () => {
  // ...
});

```


### 2. Disconnect Event (Server-Side Event)




- This event is triggered when a client disconnects from the server.

```javascript


socket.on("disconnect", () => {
  // ...
});

```

### 2. connect_error (Client-Side Event)


- This event is triggered when the client fails to connect to the server.

- It provides error details that you can use to understand why the connection failed.

```javascript

socket.on("connect_error", (error) => {
 console.log('Connection failed:', error);
});

```

### 3. connect_timeout (Client-Side Event)


- This event is triggered when the client connection times out.

This event occurs if the client takes too long to connect to the server, and the connection attempt times out.

```javascript

socket.on("connect_timeout", (timeout) => {
 console.log('Connection timeout:', timeout);
});

```

### 4. reconnect (Client-Side Event)


- This event is triggered when the client successfully reconnects to the server after a disconnection.

- You can listen for it to perform certain actions when the client reconnects.

```javascript

socket.on("reconnect", (attemptNumber) => {
  console.log('Reconnected to the server. Attempt number:', attemptNumber);
});

```


You can track the number of reconnect attempts or perform actions when the client reconnects.




### 5. reconnect_error (Client-Side Event)


- This event is triggered when the client fails to reconnect to the server.

- It allows you to handle failures when trying to reconnect.



```javascript

socket.on("reconnect_error", (error) => {
  console.log('Reconnection failed:', error);
});

```


### 6. reconnect_failed (Client-Side Event)


- This event is triggered when the client fails to reconnect to the server after multiple attempts.

```javascript

socket.on("reconnect_failed", () => {
  console.log('Reconnection failed after multiple attempts');
});

```



### 7. reconnecting (Client-Side Event)


- This event is triggered when the client is attempting to reconnect to the server.

```javascript

socket.on("reconnecting", (attemptNumber) => {
  console.log('Reconnecting to the server. Attempt number:', attemptNumber);
});

```

### 8. reconnect_attempt (Client-Side Event)


- This event is triggered when the client is attempting to reconnect to the server.

```javascript

socket.on("reconnect_attempt", (attemptNumber) => {
  console.log('Reconnecting to the server. Attempt number:', attemptNumber);
});

```

