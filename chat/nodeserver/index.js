var io = require("socket.io")(8000, {
    cors: {
        origin: "*"
    }
})
const users = {}

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        io.emit('user-joined', name);
    });

    socket.on('send', message => {
        io.emit('receive', { message: message, name: users[socket.id] })
    })
})