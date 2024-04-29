import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container,Header } from 'semantic-ui-react'

export default function SignInPage() {
  return (
    <div>
      <Header>Hangi Alana Kayıt olamk istersiniz?</Header>
      <Container>
      <Button as={NavLink} to={"/signin/student"} primary>Danışan</Button>
      <Button as={NavLink} to={"/signin/coach"} primary >Antrenör</Button>
    </Container>
    </div>
  )
}
