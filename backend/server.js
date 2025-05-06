const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Your routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/posts', require('./routes/post'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/marketplace', require('./routes/marketplace'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/groups', require('./routes/groups'));
app.use('/api/events', require('./routes/events'));
app.use('/api/chat', require('./routes/chat'));

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch((err) => console.error(err));
app.get('/', (req, res) => res.send('API RunninSg'));

// WebSocket setup
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join', (userId) => { socket.join(userId);  });

  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    io.to(receiverId).emit('receiveMessage', { senderId, text, time: Date.now() });
  });

  socket.on('disconnect', () => { console.log('User disconnected:', socket.id);  });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
