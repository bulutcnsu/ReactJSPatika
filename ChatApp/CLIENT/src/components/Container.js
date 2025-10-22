import { useEffect } from "react";
import { socket, init,receiveChat,getMessageList,sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

function Container() {
  const { setMessages } = useChat();
 

 
  useEffect(() => {
   init();
 
    getMessageList((messages) => setMessages(messages))
        
   	  receiveChat((message) => {
			setMessages((prevState) => [...prevState, { message,fromMe:"false" }]);
		});
    }, []);

  return (
    <div className="container">
    <ChatList />
    <ChatForm />
    </div>
  );
}

export default Container;
