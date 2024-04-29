import React, { useState } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

export default function SendMessageFromCoach() {
  const [formData, setFormData] = useState({
    studentId: '',
    studentMessage: '',
    senderId: ''
  });

  const [messageResult, setMessageResult] = useState({
    content: '',
    color: ''
  });

  const handleChange = (e, { name, value }) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8081/api/students/addMessage', formData)
      .then(function (response) {
        setMessageResult({ content: 'Mesaj başarıyla eklendi.', color: 'green' });
        console.log(response.data);
      })
      .catch(function (error) {
        setMessageResult({ content: 'Mesaj eklenirken bir hata oluştu.', color: 'red' });
        console.error('Hata:', error);
      });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Student ID:</label>
          <Input
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            fluid
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Mesaj:</label>
          <Input
            name="studentMessage"
            value={formData.studentMessage}
            onChange={handleChange}
            fluid
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Sender ID:</label>
          <Input
            name="senderId"
            value={formData.senderId}
            onChange={handleChange}
            fluid
            required
          />
        </Form.Field>

        <Button type="button" onClick={handleSubmit} positive>
          Mesaj Ekle
        </Button>
      </Form>

      {messageResult.content && (
        <Message
          style={{ marginTop: '10px' }}
          color={messageResult.color}
          content={messageResult.content}
        />
      )}
    </div>
  );
}
