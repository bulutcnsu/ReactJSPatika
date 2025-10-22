import styles from "../styles.module.css"
import {useChat} from "../context/ChatContext"

function ChatItem({item}){
   
     
return(
   
     <div className={`${styles.chatItem} ${item.fromMe ? styles.right :' '  }`} >{item.message}</div>
   
)
}

export default ChatItem;