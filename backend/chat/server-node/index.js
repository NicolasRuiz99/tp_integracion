const chatFunctions = require ('./chatFunctions');

const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ chatID, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, chatID, room });
    

    chatFunctions.listAllMsg(room)
    .then (messages=>{    
        let user;
        for (let i = 0; i < messages.length; i++){
          if (messages[i].id_user == room){
              user = 'usuario';
          }else {
            user = 'admin';
          }
          socket.emit('message', { user: user, text: `${messages[i].msg}`});
        }
    })
    .catch (err=>{
      console.log(err)
    })

    if(error) return callback(error);

    socket.join(user.room);
    
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.chatID} ha entrado!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (data, callback) => {
    const user = getUser(socket.id);  
    chatFunctions.addMsg (data.message,data.user_id,user.room)
    .then (res => {
      //console.log(res);
    })
    .catch (err => {
      //console.log (err);
    })

    io.to(user.room).emit('message', { user: user.chatID, text: data.message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.chatID} se ha desconectado.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 3001, () => console.log(`Servidor corriendo.`));