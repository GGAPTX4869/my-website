import React, {useState} from "react";
import {Button, Input} from "antd";
import styles from "./index.module.css";
import {MessageOutlined} from "@ant-design/icons";
import EmojiPicker from "emoji-picker-react";
// import {useSelector} from "react-redux";
import {baseChat} from '../../api/chat';

const ChatPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    // const user = useSelector((state: any) => state.loginUser.value.user);
    const [messages, setMessages] = useState([
        {text: '您好！我是 AI 在线客服。有什么可以帮助您的 😄？', isMine: false, avatar: '/img/favicon.png'}
    ]);

    const toggleChat = () => {
        setIsVisible(!isVisible);
    };

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            const updatedMessages = [
                ...messages,
                // {text: newMessage, isMine: true, avatar: String(user.avatar)}
                {text: newMessage, isMine: true, avatar: '/img/favicon.png'}
            ];
            setMessages(updatedMessages);
            baseChat(newMessage).then((res: any) => {
                setMessages(msgs => [...msgs, {
                    text: res.data.data,
                    isMine: false,
                    avatar: '/img/favicon.png'
                }])
            }).catch(error => {
                console.error('Failed to send message:', error);
                setMessages(msgs => [...msgs, {
                    text: '抱歉，AI暂时罢工了 🥹',
                    isMine: false,
                    avatar: '/img/favicon.png'
                }]);
            })
            setNewMessage('');
        }
    };

    const onEmojiClick = (emojiObject: any, event: any) => {
        setNewMessage(prev => prev + emojiObject.emoji);
    };

    return (
        <div>
            <Button className={styles.toggleButton} onClick={toggleChat} icon={<MessageOutlined/>}/>
            <div className={`${styles.container} ${!isVisible ? styles.hidden : ''}`}>
                <div className={styles.chatBox}>
                    <div className={styles.chatHeader}>JAVGO AI 在线客服</div>
                    <div className={styles.messages}>
                        {messages.map((message, index) => (
                            <div key={index}
                                 className={`${styles.message} ${message.isMine ? styles.right : styles.left}`}>
                                <img src={message.avatar} alt="avatar" className={styles.avatar}/>
                                <div className={styles.text}>{message.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.inputBox}>
                        <Input
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                            onPressEnter={sendMessage}
                            placeholder="请输入想要提问的消息 ..."
                        />
                        <Button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</Button>
                        {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} className={styles.emojiPicker}/>}
                        <Button className={styles.sendButton} onClick={sendMessage}>发送</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
