import express from "express";
import { createServer } from "http";
import socket from "socket.io";

const app = express();

app.route("/").get((req, res) => {
  res.json({});
});

const server = createServer(app);

const io = socket(server);

io.on("connection", (socket) => {
  socket.emit("hi");
  console.log("user connected");
});

server.listen(process.env.PORT || 8080, () => console.log("server listening"));
