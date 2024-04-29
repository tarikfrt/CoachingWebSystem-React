import React, { useState, useEffect } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import CoachService from "../services/coachService";
import { Link } from "react-router-dom";

export default function CoachList() {
  const [coaches, setCoaches] = useState([]);
 
 
  
  useEffect(() => {
    let coachService = new CoachService();
    coachService.getCoaches().then((result) => setCoaches(result.data));
  },[]);
  

  return (
    <div>
      <Table size="large" basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Eğitmen</Table.HeaderCell>
            <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
            <Table.HeaderCell>Yaş</Table.HeaderCell>
            <Table.HeaderCell>Uzmanlık Alanı</Table.HeaderCell>
            <Table.HeaderCell>Deneyimleri</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {coaches.map((coach) => (
            <Table.Row key={coach.coachId}>
              <Table.Cell>{coach.coachId}</Table.Cell>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src={
                      coach.coachGender === "Erkek"
                        ? "https://img.freepik.com/vetores-premium/avatar-de-menino-sorridente-fofo-em-ilustracao-vetorial-de-estilo-simples_710508-1246.jpg"
                        : "https://react.semantic-ui.com/images/avatar/small/lena.png"
                    }
                    rounded
                    size="large"
                  />
                  <Header.Content>
                  {coach.coachGender}
                  
                    <Header.Subheader></Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell><Link to={"/coaches/"+coach.coachId}>{coach.coachName + " " + coach.coachSurname}</Link></Table.Cell>
              <Table.Cell>{2023 - coach.birthdayYear}</Table.Cell>
              <Table.Cell>{coach.coachPlan}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}


