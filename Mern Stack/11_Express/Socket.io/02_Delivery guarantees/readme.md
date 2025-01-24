## Delivery guarantees


- Socket.IO, delivery guarantees refer to the 
mechanisms and features that ensure messages 
or events are delivered from the sender to the receiver .Even if there’s a problem like a connection drop or network issue, Socket.IO tries to make sure messages get delivered as soon as possible.



### Here’s how Socket.IO helps make sure your messages don’t get lost:

#### 1. Automatic Reconnection

- If your connection to the server is lost (e.g., if your internet cuts out), Socket.IO will try to reconnect automatically.

- Once the connection is back, it will try to deliver any messages that were missed while you were offline.

- This is especially useful for real-time applications where missing messages can cause problems.


#### 2. Acknowledgements (ACKs)

- When The client (in this case, a browser or application) sends a message to the server using a method like `socket.emit()`. The client may also send a callback function that will handle the server's response.



````js
socket.emit('sendMessage', 'Hello', (response) => {
    console.log('Server received message:', response);
});


````


- The server listens for incoming messages using socket.on(). When it receives the message, it can execute a function and may send an acknowledgment back to the client by calling the provided callback function.




````js
socket.on('sendMessage', (message, callback) => {
    console.log('Received message:', message);
    callback('Message received successfully');
});

````

- he callback function provided by the client gets triggered when the server sends the acknowledgment back. In this case, the server sends a message like "Message received successfully" to confirm it received the message.

#### 3. Message Buffering (during reconnections)


- If the client is disconnected, Socket.IO can "hold onto" messages sent while the client was offline. Once the client reconnects, the server can deliver those missed messages.

- This ensures messages don’t get lost when the client is temporarily disconnected.


