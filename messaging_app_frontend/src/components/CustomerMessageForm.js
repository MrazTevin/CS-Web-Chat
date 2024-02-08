import react, { useState } from "react";
import axios from "axios";

function CustomerMessageForm() {
  const [message, setMessage] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/messages`, { content: message });
      alert(`Message sent successfully!`);
      setMessage(``);
    } catch (error) {
      alert(`Error sending message`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here ..."
        required
      />
    </form>
  );
}

export default CustomerMessageForm;
