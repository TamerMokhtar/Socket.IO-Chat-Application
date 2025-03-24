const express = require("express");
const app = express();
const cors = require("cors");
// const {join} = require("path");
require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "index.html"));
// });  // This is for the html file to be served on the root route

io.on("connection", (socket) => {
  console.log("a user connected with id: ", socket.id);

  socket.on("chat message", (msg) => {
    console.log("message: ", msg);
    io.emit("list messages", msg);
  });
  socket.on("typing", () => {
    socket.broadcast.emit("typing status");
  });
  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing status");
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

/**
 *  emit -> publish to an event using emit ('eventName', data)   Request == emit
 *
 *  on -> listen to an event using on ('eventName', callback)    Response == on
 *
 */
