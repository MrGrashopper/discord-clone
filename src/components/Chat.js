import React, { useState, useEffect } from 'react'
import '../styles/Chat.css'
import Chatheader from "./Chatheader";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../components/Message'
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import firebase from "firebase";

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setMessages(
                    snapshot.docs.map((doc) => 
                        doc.data()
                    )
                )
            );
        }
    }, [channelId]);

    const sendMessage = e => {
        e.preventDefault();
        db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    }

    return (
        <div className="chat">
            < Chatheader channelName={ channelName }/>
            <div className="chat__messages">
                {messages.map((message) => (
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                        key={message.message.slice(0,3)}
                    />
                ))}
            </div>
 
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input 
                        value={input}  
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`} 
                    />
                    <button 
                        disabled={!channelId}
                        className="chat__inputButton" 
                        type="submit"
                        onClick={sendMessage}
                    >Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
