import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import CoachService from "../services/coachService";
import { Card, Grid,GridRow,GridColumn } from "semantic-ui-react";
import { Table } from "semantic-ui-react";
export default function CoachDetail() {
  let { id } = useParams();

  const [coach, setCoach] = useState({});

  useEffect(() => {
    let coachService = new CoachService();
    coachService
      .getByCoachId(id)
      .then((result) => setCoach(result.data.data));
  });

  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Card
              image={coach.photoUrl}
              header={coach.coachName + " " + coach.coachSurname}
              meta={coach.coachGender}
              description={2023-coach.birthdayYear}
            />
          </GridColumn>
          <GridColumn width={8}>
          <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Telefon No</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Uzmanlık Alanı</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{coach.phoneNumber}</Table.Cell>
        <Table.Cell>{coach.coachEmail}</Table.Cell>
        <Table.Cell>{coach.coachPlan}</Table.Cell>
        
      </Table.Row>
    </Table.Body>
  </Table>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
