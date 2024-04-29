import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, MenuItem,Image } from "semantic-ui-react";

export default function SignedIn(props) {

  
  return (
    <div>
      <MenuItem>
        <Image
        
          avatar
          spaced="right"
          src="https://img.a.transfermarkt.technology/portrait/big/2332-1585140631.jpeg?lm=1"
        />
        <Dropdown pointing="top left" text="Tarık Fırat">
            <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info"/>
            <DropdownItem as={NavLink} to ="/"  text="Çıkış Yap" icon="sign-out"/>
            </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  );
}
