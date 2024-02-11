// src/components/AgentResponseForm.js
import React, { useState } from 'react';
import axios from 'axios';

function AgentResponseForm({ message_id, agent_id }) {
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/responses', { body, message_id, agent_id });
      setBody('');
    } catch (error) {
      console.error('Error sending response:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Response:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default AgentResponseForm;