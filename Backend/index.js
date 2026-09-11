const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const singers = require('./SingerList.json');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: '*',
	},
});

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
	res.json(singers);
});

io.on('connection', (socket) => {
	console.log(`Client connected: ${socket.id}`);

	socket.on('message', (message) => {
		io.emit('message', message);
	});

	socket.on('newSinger', (singer) => {
		console.log('Nuovo cantante ricevuto:', singer);
		io.emit('newSinger', singer);
	});

	socket.on('disconnect', () => {
		console.log(`Client disconnected: ${socket.id}`);
	});
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

module.exports = { app, server, io };
