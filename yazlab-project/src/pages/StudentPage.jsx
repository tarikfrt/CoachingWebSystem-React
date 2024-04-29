import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import StudentService from "../services/studentService";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, MenuItem,Icon } from "semantic-ui-react";

export default function StudentPage() {
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
      <h2>Fit-Life a Hoşgeldin {student.studentName + " " + student.studentSurname}</h2>
      <Menu vertical>
        <MenuItem as={NavLink} to={`/students/${student.studentId}`}><Icon name='info' />Bilgilerimi göster</MenuItem>
        <MenuItem as={NavLink} to={`/login/student/update/${student.studentId}`}>Profilimi Güncelle</MenuItem>
        <MenuItem>Antrenörümü Göster</MenuItem>
        <MenuItem>Egzersiz Planımı Göster</MenuItem>
        <MenuItem as={NavLink} to ="/admin/coach/addPlan">Plan Oluştur</MenuItem>
        <MenuItem>Beslenme Planımı Göster</MenuItem>
        <MenuItem as={NavLink} to='/login/student/setMessage'>Antrenöre mesaj gönder</MenuItem>
        <MenuItem as={NavLink} to='/login/student/getMessage' >Mesajları Göster</MenuItem>
        <MenuItem as={NavLink} to="/" ><Icon name='sign-out' /> Çıkış Yap</MenuItem>
      </Menu>
    </div>
  );
}
