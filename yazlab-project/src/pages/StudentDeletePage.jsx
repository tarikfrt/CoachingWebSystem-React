import React, { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import axios from 'axios';

export default function StudentDeletePage() {
  const [studentId, setStudentId] = useState('');

  const handleDelete = async () => {
    try {
      // axios.delete ile antrenörü sil
      await axios.delete(`http://localhost:8081/api/students/delete/${studentId}`);
      alert('Danışan başarıyla silindi!');
    } catch (error) {
      console.error('Danışan silinirken hata oluştu:', error);
      alert('Danışan silinirken hata oluştu');
    }
  };

  return (
    <div>
      <h2>Danışan Sil</h2>
      <Form>
        <Form.Field>
          <Input
            placeholder='Danışan Id girin'
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </Form.Field>
        <Button color='red' onClick={handleDelete}>
          Sil
        </Button>
      </Form>
    </div>
  );
}

