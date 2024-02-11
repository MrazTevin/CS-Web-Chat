import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ActionCable } from 'react-actioncable-provider';
import '../../src/table.css'

function AgentMessageList({setSelectedMessage}) {
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
  

  const handleReceivedMessage = (message) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };


  return (
    <div>
      <h2>Customer Messages</h2>
      <ActionCable
        channel={{ channel: 'MessagesChannel' }}
        onReceived={handleReceivedMessage}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>Message</th>
            <th>At</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} onClick={() => handleSelectMessage(message)}>
              <td>{message.id}</td>
              <td>{message.user_id}</td>
              <td>{message.message_body}</td>
              <td>{message.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentMessageList;