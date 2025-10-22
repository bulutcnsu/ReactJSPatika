const app = require("express")();
const http = require("http").Server(app);
const cors = require("cors");
const Messages = require("./lib/Messages");
const { Server } = require("socket.io");



const io = new Server(http, {
  cors: {
    origin: "http://localhost:3000", 
	 origin: "*", 
    methods: ["GET", "POST"]
  }
});
app.use(cors());

app.get("/", (req, res) => {
	res.end("Hello Socket.IO");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	Messages.list((data) => {
		//console.log(data);
		socket.emit("message-list", data);
	});

	socket.on("new-message", (message) => {
		console.log("A new message",message); // get from front
		
		Messages.upsert({ message });//send to backs
			socket.broadcast.emit("receive-message", message); // broadcast to front
		 
	});

	
 
   socket.on("disconnect", () => console.log("a user disconnected"));
 

});


	

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});
