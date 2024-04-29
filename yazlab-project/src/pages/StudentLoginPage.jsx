import { useEffect, useState } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Divider } from "semantic-ui-react";
import StudentService from '../services/studentService';

export default function StudentLoginPage() {
  const [students, setStudents] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [foundStudent, setFoundStudent] = useState(null); // State variable to store the found student

  const navigate = useNavigate();
  

  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then((result) => setStudents(result.data));
  }, []);

  const handleLogin = () => {
    // Check if the entered email and password match any student
    const student = students.find(
      (student) => student.studentEmail === email && student.password === password
    );

    if (student) {
      // Set the found student in state
      setFoundStudent(student);

      // Redirect to "/login/student/:id" page if login is successful
      navigate(`/login/student/${student.studentId}`);
    } else {
      // Display error message if login fails
      alert("E-mail veya şifre hatalı");
    }
  };

  return (
    <div>
      <h2>Danışan Giriş Yap</h2>
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
