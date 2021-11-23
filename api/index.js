const http = require('http'), 
express = require('express'), 
app = express(),
cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3001;
const server = http.createServer(app).listen(PORT, () => {
    console.log('Websocket is listening on :%s', PORT);
});

const database = require('./database/database');
database();

const io = require("socket.io")(server, {
    cors: {
      origin: "*"
    }
  });
const router = require('./router');
app.use(router);

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('User has just left');
    });
    socket.on('message', (obj) => {
        socket.emit('message');
    })
});