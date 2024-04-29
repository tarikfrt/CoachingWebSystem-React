import React, { useEffect, useState } from 'react';
import { Message, Table } from 'semantic-ui-react';
import axios from 'axios';

export default function ReadStudentMessage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/api/students/getAllMessage')
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
      <Table size="large" basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student Id</Table.HeaderCell>
            <Table.HeaderCell>Mesaj</Table.HeaderCell>
            <Table.HeaderCell>Sender Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {messages.map((student) => (
            <Table.Row key={student.studentId}>
              <Table.Cell>{student.studentId}</Table.Cell>
              <Table.Cell>{student.studentMessage}</Table.Cell>
              
              <Table.Cell>{student.senderId}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
