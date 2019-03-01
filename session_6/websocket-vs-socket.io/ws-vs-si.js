const path = require('path');
const express = require('express');
const expressWS = require('express-ws');
const log = function (m) {
  console.error(new Date().toISOString()+' '+this.pre+m);
}

const http = require('http');
const socketIO = require('socket.io');
const ITERATIONS = 1000;
//////////////////////////////////////////////////////////////
// WebSocket:
var ws = {
  app: express(),
  pre: "websocket app: ",
  log: log
};
ws.app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'ws.html'));
});
ws.ws = expressWS(ws.app);
ws.app.ws('/', (s, req) => {
  ws.log('incoming websocket connection');
  for (var i = 0; i < ITERATIONS; i++)
    setTimeout(() => {
      ws.log('sending message to client');
      s.send(ws.pre+'message '+i+' from server', ()=>{ws.log('message sent')});
    }, 500*i);
});
ws.app.listen(3001, () =>
  ws.log('listening on http://localhost:3001/'));

//////////////////////////////////////////////////////////////
// Socket.io:
var si = {
  app: express(),
  pre: "socket.io app: ",
  log: log
};
si.http = http.Server(si.app);
si.io = socketIO(si.http);
si.app.get('/', (req, res) => {
  si.log('express connection - sending html');
  res.sendFile(path.join(__dirname, 'html', 'si.html'));
});
si.app.get('/forced', (req, res) => {
  si.log('express connection - sending html');
  res.sendFile(path.join(__dirname, 'html', 'si-forced.html'));
});
si.io.on('connection', s => {
  si.log('incoming socket.io connection');
  for (var i = 0; i < ITERATIONS; i++)
    setTimeout(() => {
      si.log('sending message '+i+' to client');
      s.emit
      ('message', si.pre+'message from server');
    }, 500*i);
});
si.http.listen(3002, () =>
  si.log('listening on http://localhost:3002/'));
