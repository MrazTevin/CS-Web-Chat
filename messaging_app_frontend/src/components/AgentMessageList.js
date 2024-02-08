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
            <p>{message.content}</p>
            {/* Add more message details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentMessageList;
