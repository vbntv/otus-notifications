import express from "express";
import {Server} from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const config = {
    appPort: 8000,
    delay: 5000
}

app.use(express.static('public'));

server.listen(config.appPort, () => console.log('Server started on ' + config.appPort));

let number = 0;

setInterval(() => {
    io.emit('notification', { title: 'title', message: 'message ' + number });
    number++;
}, config.delay);

