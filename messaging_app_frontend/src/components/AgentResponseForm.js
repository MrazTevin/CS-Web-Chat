// src/components/AgentResponseForm.js
import React, { useState } from 'react';
import axios from 'axios';

function AgentResponseForm({ message_id, agent_id }) {
  const [body, setBody] = useState('');
  const [agentName, setAgentName] = useState(''); // Add a new state variable for the agent's name

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('/api/responses', { body, message_id, agent_id, agent_name: agentName }); // Use the agentName state variable
        setBody('');
        setAgentName(''); // Clear the agent's name field
        window.alert(`Response added successfully! Server responded with status code: ${response.status}`);
      } catch (error) {
        console.error('Error sending response:', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          window.alert(`An error occurred while adding the response. Server responded with status code: ${error.response.status}`);
        } else if (error.request) {
          window.alert('An error occurred while adding the response. No response was received from the server.');
        } else {
          window.alert('An error occurred while setting up the request.');
        }
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Agent Name:
        <input type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} /> {/* Add an input field for the agent's name */}
      </label>
      <label>
        Response:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default AgentResponseForm;