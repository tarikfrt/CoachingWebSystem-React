import React, { useState, useEffect } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import StudentService from "../services/studentService";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);
 
 
  
  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then((result) => setStudents(result.data));
  },[]);
  

  return (
    <div>
      <Table size="large" basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Danışanlar</Table.HeaderCell>
            <Table.HeaderCell>İsim Soyisim</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Yaş</Table.HeaderCell>
            <Table.HeaderCell>Telefon No</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <Table.Row key={student.studentId}>
              <Table.Cell>{student.studentId}</Table.Cell>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src={
                      student.studentGender === "Erkek"
                        ? "https://img.freepik.com/vetores-premium/avatar-de-menino-sorridente-fofo-em-ilustracao-vetorial-de-estilo-simples_710508-1246.jpg"
                        : "https://react.semantic-ui.com/images/avatar/small/lena.png"
                    }
                    rounded
                    size="large"
                  />
                  <Header.Content>
                  {student.studentGender}
                    <Header.Subheader></Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell><Link to={"/students/"+student.studentId}>{student.studentName + " " + student.studentSurname}</Link></Table.Cell>
              <Table.Cell>{student.studentEmail}</Table.Cell>
              <Table.Cell>{2023 - student.birthdayYear}</Table.Cell>
              <Table.Cell>{student.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
