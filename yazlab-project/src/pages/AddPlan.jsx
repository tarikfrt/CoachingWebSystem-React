import React, { useState } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

export default function AddPlan() {
  const [formData, setFormData] = useState({
    studentId: '',
    studentPlan: '',
    coachId: ''
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e, { name, value }) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8081/api/students/addStudentDataOfPlan', formData)
      .then(function (response) {
        alert({ content: 'Başarıyla kaydedildi.', color: 'green' });
        console.log(response.data);
      })
      .catch(function (error) {
        alert({ content: 'Kaydetme sırasında bir hata oluştu.', color: 'red' });
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
          <label>Student Plan:</label>
          <Input
            name="studentPlan"
            value={formData.studentPlan}
            onChange={handleChange}
            fluid
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Coach ID:</label>
          <Input
            name="coachId"
            value={formData.coachId}
            onChange={handleChange}
            fluid
            required
          />
        </Form.Field>

        <Button type="button" onClick={handleSubmit} positive>
          Submit
        </Button>
      </Form>

      {message && (
        <Message
          style={{ marginTop: '10px' }}
          color={message.color}
          content={message.content}
        />
      )}
    </div>
  );
}
