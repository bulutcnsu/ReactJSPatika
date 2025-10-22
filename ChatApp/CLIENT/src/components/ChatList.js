import styles from "../styles.module.css"
import  app from '../App.css';
import {useChat} from "../context/ChatContext"
import  ChatItem from "./ChatItem"


function ChatList (){
const  {messages} = useChat();
console.log("chat-list all messages", {messages});
    return(

     <div className="chatList">
      {messages.map((item,key)=> (
            <ChatItem key={key} item={item} />
        ))}
       </div>
    );
}

export default ChatList;       
