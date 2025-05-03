const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//---------------------------------------------
// Then in your frontend (React), you'd typically connect like this:
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:5000'); // or your backend URL
