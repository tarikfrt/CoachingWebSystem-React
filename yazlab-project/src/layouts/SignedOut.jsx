import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
export default function SignedOut(props) {
  return (
    <div>
        <MenuItem>
        <Button as={NavLink} to ="/login" positive>Giriş Yap</Button>
        <Button as={NavLink} to ="/signin" primary style={{marginLeft:'0.5em'}}>Kayıt Ol</Button>
        </MenuItem>
    </div>
  )
}
