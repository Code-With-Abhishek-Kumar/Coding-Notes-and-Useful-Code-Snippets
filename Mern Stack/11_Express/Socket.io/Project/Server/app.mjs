import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
let socket = null;

const app = express()

// Allow only the frontend origin
app.use(
  cors({
    origin: 'http://localhost:5173', // Update this to the address of your frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  })
)

app.get('/', (_, res) => {
  res.send('Hello World')
})

// Create HTTP server
let server = createServer(app)

// Initialize Socket.io server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Ensure socket.io is configured with the same origin
    methods: ['GET', 'POST']
  }
})

// Socket.io Entire Circuit (Server)
io.on('connection', socket => {
  socket = socket;
  console.log('A client connected', socket.id)

  // Receive message from client 


  
  socket.on('message', message => {
    console.log('Message:', message)


    // Broadcast message to all clients including the sender
    // io.emit('message', message);

    // Broadcast message to all clients except the sender
    socket.broadcast.emit('message', message);

    // Send acknowledgment to the sender

    // Send acknowledgment to the sender

    

  })

  // Individual Client Circuit (Server)
  socket.on('disconnect', () => {
    console.log('A client disconnected', socket.id)
  })
})

let port = 8000
// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
