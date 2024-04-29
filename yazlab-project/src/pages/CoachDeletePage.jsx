import React, { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import axios from 'axios';

export default function CoachDeletePage() {
  const [coachId, setCoachId] = useState('');

  const handleDelete = async () => {
    try {
      // axios.delete ile antrenörü sil
      await axios.delete(`http://localhost:8081/api/coaches/delete/${coachId}`);
      alert('Antrenör başarıyla silindi!');
    } catch (error) {
      console.error('Antrenör silinirken hata oluştu:', error);
      alert('Antrenör silinirken hata oluştu');
    }
  };

  return (
    <div>
      <h2>Antrenör Sil</h2>
      <Form>
        <Form.Field>
          
          <Input
            placeholder='Antrenör ID girin'
            value={coachId}
            onChange={(e) => setCoachId(e.target.value)}
          />
        </Form.Field>
        <Button color='red' onClick={handleDelete}>
          Sil
        </Button>
      </Form>
    </div>
  );
}

