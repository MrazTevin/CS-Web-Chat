import React, { useState } from 'react';
import '../../src/chat.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length,
      text: inputValue,
      isQuestion: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="chat-interface">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={message.isQuestion ? 'question' : 'answer'}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your question..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
