import { useEffect, useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Divider } from "semantic-ui-react";
import CoachService from '../services/coachService';

export default function StudentLoginPage() {
  const [coaches, setCoaches] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [foundCoach, setFoundCoach] = useState(null); // State variable to store the found student

  const navigate = useNavigate();
  

  useEffect(() => {
    let coachService = new CoachService();
    coachService.getCoaches().then((result) => setCoaches(result.data));
  }, []);

  const handleLogin = () => {
    // Check if the entered email and password match any student
    const coach = coaches.find(
      (coach) => coach.coachEmail === email && coach.password === password
    );

    if (coach) {
      // Set the found student in state
      setFoundCoach(coach);

      // Redirect to "/login/student/:id" page if login is successful
      navigate(`/login/coach/${coach.coachId}`);
    } else {
      // Display error message if login fails
      alert("E-mail veya şifre hatalı");
    }
  };

  return (
    <div>
      <h2>Antrenör Giriş Yap</h2>
      <Form>
        <Form.Field>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Link to="/forgot-password">Şifremi Unuttum</Link>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </Form>
    </div>
  );
}
