const express = require('express')
const app = express()
const http = require('http')
const { Server } = require( 'socket.io' )
const cors  = require('cors')
const {userJoin} = require('./utils/users.js')
const {formatMessage} = require('./utils/messages')

app.use( cors() )

const server = http.createServer(app)
const io = new Server( server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
} )

const botName = 'Discord Welcome bot'
io.on( 'connection', ( socket ) =>
{
    console.log( `User connected with id: ${ socket.id }` )
    
    socket.on( "joinRoom", ( { username, room } ) =>
    {
        console.log(username, room)
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatCord!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });
})

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
