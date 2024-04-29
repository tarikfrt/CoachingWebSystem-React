import React, { useState } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

export default function SendMessageFromStudent() {
  const [formData, setFormData] = useState({
    coachId: '', 
    coachMessage: '',
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
    axios.post('http://localhost:8081/api/coaches/addMessage', formData)
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
          <label>Coach ID:</label> {/* Değişiklik: Student ID yerine Coach ID */}
          <Input
            name="coachId"
            value={formData.coachId}
            onChange={handleChange}
            fluid
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Mesaj:</label>
          <Input
            name="coachMessage"
            value={formData.coachMessage}
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
