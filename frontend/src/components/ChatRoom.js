import React, { useState, useEffect } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from backend API
    // Example:
    // api.getMessages().then((data) => setMessages(data));
  }, []);

  const sendMessage = () => {
    // Send new message to backend API
    // Example:
    // api.sendMessage(newMessage).then(() => {
    //   setMessages([...messages, newMessage]);
    //   setNewMessage('');
    // });
    console.log('Sending message:', newMessage);
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
