## Expanded Explanation: Socket.IO Message Broadcasting and Custom Event Handling


Socket.IO is a powerful real-time communication library that allows you to send messages between the server and clients. One of its key features is the ability to target specific clients, groups of clients, or even broadcast messages to all clients connected to the server. Below, I will show you various methods for sending messages and explain how you can target clients, groups, and rooms.


### 1. Send a Message to a Specific Client

- Each client has a unique socket.id. You can use this socket.id to send messages to that client.

**Syntex**

```javascript

socket.emit('event-name', data);

```

- `event-name:` The event name you are emitting.
- `data:` The data you want to send to the client.

**Example**

**Server**

```javascript
const socketId = 'ABC123';  // Assume this is the target client's socket ID
io.to(socketId).emit('private-message', 'Hello, this is a private message!');


```

`io.to(socketId).emit():` Sends a message to the client with the specific socket.id.

**Client**

```javascript

socket.on('private-message', (message) => {
  console.log('Private Message:', message);
});

```