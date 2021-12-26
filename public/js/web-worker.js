if ('function' === typeof importScripts) {
    importScripts('/socket.io/socket.io.js');
    const socket = io();
    socket.on('notification', (msg) => {
        postMessage(msg);
    });
}












