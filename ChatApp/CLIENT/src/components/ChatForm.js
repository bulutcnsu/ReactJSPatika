import { useState } from "react";
import styles from "../styles.module.css"
import '../App.css';
import {sendMessage} from "../socketApi"
import {useChat} from "../context/ChatContext";


const ChatForm = ()=>{
const [message, setMessage] = useState("");
const {setMessages}= useChat();

const handleSubmit = (e)=> {
    e.preventDefault();
    
    sendMessage(message);
    setMessages((prev) =>[...prev]);
    setMessage("");

}

    return(
     
       

      <div className={styles.textInput}>
        <form onSubmit={handleSubmit}>
        <input  className={styles.textInput}
        value={message}
        onChange={(e)=> setMessage(e.target.value)}/> 
       
       </form>
      </div> 
    )
}

export default ChatForm;
