import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AgentMessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Customer Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
                        <p>ID: {message.id}</p>
                        <p>From: {message.user_id}</p>
            <p>{message.message_body}</p>
            <p>At: {message.created_at}</p>
            <hr />
        
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentMessageList;
