const webSocket = require("./controllers/webSocket")
const connectdb = require("./data/connectDB")
function initSocket(app,port) {
  const { Server } = require("socket.io");
  const { createServer } = require("node:http");
  const server = createServer(app);
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    // disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected',socket.id);
      });

    // userSubmitLogin
    socket.on("userSumbitLogin",(message)=>{
      webSocket.userSumbit(message)
    })  

    // userSubmitSignup
    socket.on("userSubmitSignup",(message)=>{
      webSocket.userSumbitSignup(message)
    })


  });
  server.listen(process.env.PORT, () => {
    connectdb()
    console.log(`server running at http://localhost:${process.env.PORT}`);
  });
}
module.exports = initSocket;
