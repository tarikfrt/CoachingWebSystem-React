import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react'

export default function LoginPage() {
  return (
    <div>
      <Header>Hangi Alana giriş yapmak istersiniz?</Header>
      <Container>
      <Button as={NavLink} to={"/login/admin"} positive>Yönetici</Button>
      <Button as={NavLink} to={"/login/student"} positive>Danışan</Button>
      <Button as={NavLink} to={"/login/coach"} positive>Antrenör</Button>
    </Container>

    </div>
    
  );
}
