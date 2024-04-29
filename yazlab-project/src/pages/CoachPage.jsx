import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import CoachService from "../services/coachService";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, MenuItem,Icon } from "semantic-ui-react";

export default function CoachPage() {
  let { id } = useParams();

  const [coach, setCoach] = useState({});

  useEffect(() => {
    let coachService = new CoachService();
    coachService.getByCoachId(id).then((result) => setCoach(result.data.data));
  });

  return (
    <div>
      <h2>Fit-Life a Hoşgeldin {coach.coachName + " " + coach.coachSurname}</h2>
      <Menu vertical>
        <MenuItem as={NavLink} to={`/coaches/${coach.coachId}`}><Icon name='info' />Bilgilerimi göster</MenuItem>
        <MenuItem as={NavLink} to={`/login/coach/update/${coach.coachId}`}>Profilimi Güncelle</MenuItem>
        <MenuItem>Danışanlarımı Göster</MenuItem>
        <MenuItem>Danışanıma Egzersiz Oluştur</MenuItem>
        <MenuItem>Danışanıma Beslenme Planı oluştur</MenuItem>
        <MenuItem as={NavLink} to='/login/coach/setMessage'>Danışana mesaj gönder</MenuItem>
        <MenuItem as={NavLink} to='/login/coach/getMessage' >Mesajları Göster</MenuItem>
        <MenuItem as={NavLink} to={`/`}><Icon name='sign-out' />Çıkış Yap</MenuItem>
      </Menu>
    </div>
  );
}
