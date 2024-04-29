import React, { useEffect, useState } from 'react';
import { Message } from 'semantic-ui-react';
import axios from 'axios';

export default function ReadCoachMessage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/api/coaches/getAllMessage') // Değişiklik: students yerine coaches
      .then(response => {
        setMessages(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Mesajları alırken bir hata oluştu.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <Message negative>
        <Message.Header>Hata</Message.Header>
        <p>{error}</p>
      </Message>
    );
  }

  return (
    <div>
      <h2>Mesajlar</h2>
      {messages.length === 0 ? (
        <Message info>
          <Message.Header>Uyarı</Message.Header>
          <p>Henüz mesaj bulunmamaktadır.</p>
        </Message>
      ) : (
        <ul>
          {messages.map(message => (
            <li key={message.id}>
              <strong>Coach ID:</strong> {message.coachId} | {' '} {/* Değişiklik: studentId yerine coachId */}
              <strong>Mesaj:</strong> {message.coachMessage} | {' '}
              <strong>Sender ID:</strong> {message.senderId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
