import React,{useState} from "react";
import { Menu,Header } from 'semantic-ui-react'
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink } from "react-router-dom";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  function handleSignOut() {
    setIsAuthenticated(false)
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu fixed size="large">
        <Menu.Item as={NavLink} to={"/"}
          name="Ana Sayfa"
         
        />
         <Menu.Item header textAlign="center">
            <Header as="h1" >
              Fit-Life
            </Header>
          </Menu.Item>

        <Menu.Menu position="right">
          
          {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          
          
          
        </Menu.Menu>
      </Menu>
    </div>
  );
}
