import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import StudentService from "../services/studentService";
import { Card, Grid,GridRow,GridColumn } from "semantic-ui-react";
import { Table } from "semantic-ui-react";
export default function StudentDetail() {
  let { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {
    let studentService = new StudentService();
    studentService
      .getByStudentId(id)
      .then((result) => setStudent(result.data.data));
  });

  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Card
              image={student.photoUrl}
              header={student.studentName + " " + student.studentSurname}
              meta={student.studentGender}
              description={2023-student.birthdayYear}
            />
          </GridColumn>
          <GridColumn width={8}>
          <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Telefon No</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Plan</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{student.phoneNumber}</Table.Cell>
        <Table.Cell>{student.studentEmail}</Table.Cell>
        <Table.Cell>{student.studentPlan}</Table.Cell>
        
      </Table.Row>
    </Table.Body>
  </Table>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
