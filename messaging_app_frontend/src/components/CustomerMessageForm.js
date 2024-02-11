import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import axios from "axios";

axios.defaults.headers.common["Origin"] = "http://localhost:3000";


function MessageForm() {
  const [userId, setUserId] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [csrfToken, setCsrfToken] = useState('');



  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
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
      resetForm();
    } catch (error) {
      console.error("Error creating message:", error);
      alert(`Error creating message: ${error.message}`);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ userId: '', messageBody: '', csrfToken: '' }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>User ID:</label>
            <Field type="text" name="userId" />
          </div>
          <div>
            <label>Message Body:</label>
            <Field as="textarea" name="messageBody" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MessageForm;
