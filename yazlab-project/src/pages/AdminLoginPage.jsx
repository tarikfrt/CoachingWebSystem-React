import React, { useState } from "react";
import { Form, Button, Divider } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the entered username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      // Redirect to the specified page if login is successful
      navigate("/admin");
    } else {
      // Display error message if login fails
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };

  return (
    <div>
      <h2>Yönetici Giriş Yap</h2>
      <Form>
        <Form.Field>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Divider />

        <Button positive onClick={handleLogin}>
          Giriş Yap
        </Button>
      </Form>
    </div>
  );
}