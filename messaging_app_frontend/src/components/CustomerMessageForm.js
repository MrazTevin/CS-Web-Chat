import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.headers.common["Origin"] = "http://localhost:3000";


function MessageForm() {
  const [userId, setUserId] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [csrfToken, setCsrfToken] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/messages",
        {
          message: {
          user_id: userId,
          message_body: messageBody,
          }, 
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
        }
      );

      console.log("Message created:", response.data);
      // Optionally, reset the form fields after successful submission
      setUserId("");
      setMessageBody("");
    } catch (error) {
      console.error("Error creating message:", error);
      alert(`Error creating message: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <label>Message Body:</label>
        <textarea
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageForm;
