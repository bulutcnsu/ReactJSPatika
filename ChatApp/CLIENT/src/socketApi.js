// socketApi.js
import { io } from "socket.io-client";

let socket ;
export const init = () => {

  socket = io("http://localhost:3000", {
  transports: ["websocket"],
});
  console.log("⚙️ INIT CALLED");

  socket.on("connect", () => console.log("✅ Connected:"));
  socket.on("connect_error", (err) => console.error("❌ Connection failed:", err.message));
};

export const sendMessage = (message)=>{
   if (socket) socket.emit("new-message", message);
}
export const receiveChat = (callback) =>{
    if (!socket) return;
    socket.on("receive-message", (message) => {
      console.log("🔥 Received from back:", message);
         callback (message);
    })} 

 export const getMessageList = (callback)=>{
         if (!socket) return;
          socket.on("message-list", (messages) => {
       callback(messages);
    });
    }