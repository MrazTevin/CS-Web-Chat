import React, { useState } from 'react';
import axios from 'axios';
import '../../src/chat.css';

const CustomerForm = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post(
        '/api/messages',
        {
          message: {
            user_id: userId,
            message_body: message,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': 'your-csrf-token-here', // Replace with your CSRF token
          },
        }
      );

      console.log('Message created:', response.data);

      // Reset form
      setUserId('');
      setMessage('');
    } catch (error) {
      console.error('Error creating message:', error);
      alert(`Error creating message: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div className="form-group">
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default CustomerForm;