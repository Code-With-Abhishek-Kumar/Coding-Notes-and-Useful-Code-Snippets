import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { Container, Typography, Button, TextField } from '@mui/material'

const App = () => {
  // Use state to dynamically manage socket instance
  const [socket, setSocket] = useState(null);
  const [Message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [Socket_ID, setSocket_ID] = useState('');

  // When your component mounts, create a new socket instance
  useEffect(() => {
    console.log('Page Reloaded');
    
    // Create socket instance when component mounts
    const newSocket = io('http://localhost:8000', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 3,
    });

    setSocket(newSocket);  // Set the socket instance

    newSocket.on('connect', () => {
      console.log('Connected to server');
      console.log('Socket ID:', newSocket.id);
      setSocket_ID(newSocket.id);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
      console.log('Socket ID:', newSocket.id);
    });

    newSocket.on('reconnect', () => {
      console.log('Reconnected to server');
      console.log('Socket ID:', newSocket.id);
    });

    // Handle received messages
    newSocket.on('message', (message) => {
      console.log('Message Received:', message);
      setReceivedMessage(message); // Update received message state
    });

    // Cleanup socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on component mount

  const Handle_Submit = (e) => {
    e.preventDefault();

    if (socket) {
      // Send message to server
      socket.emit('message', Message, (ack) => {
        console.log('Server acknowledgment:', ack);
      });
      setMessage('');  // Clear input field after sending the message
    }
  };

  return (
    <>
      <h3>Socket id: {Socket_ID || 'Not Connected'}</h3>
      <Container maxWidth='sm'>
        <Typography variant='h2' component={'div'} align='center' gutterBottom>
          Welcome to Chat App
        </Typography>

        <form onSubmit={Handle_Submit}>
          <TextField
            variant='outlined'  // Change to 'outlined' for a different style
            color='primary'
            fullWidth
            label='Enter your message'
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Send
          </Button>
        </form>

        {/* Display the received message */}
        {receivedMessage && (
          <Typography variant='h6' component={'div'} align='center' gutterBottom>
            Received Message: {receivedMessage}
          </Typography>
        )}
      </Container>
    </>
  );
};

export default App;
