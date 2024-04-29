import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from 'semantic-ui-react'

export default function AdminPage() {
  return (
    <div>
      <Menu vertical>

        <Dropdown text="Danışan" pointing="left" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to={"/students"} >Danışanları listele</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/admin/student/update"}>Danışan Bilgi Güncelle</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/signin/student"}>Danışan Kayıt Ekle</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/admin/student/delete"}>Danışan Kayıt Sil</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/login/coach/setMessage"}>Danışana mesaj gönder</Dropdown.Item>
          </Dropdown.Menu> 
        </Dropdown>
        <Dropdown text="Antrenör" pointing="left" className="link item">
          <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to={"/coaches"}>Antrenörleri listele</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/admin/coach/update"}>Antrenör Bilgi Güncelle</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/signin/coach"}>Antrenör Kayıt Ekle</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/admin/coach/delete"}>Antrenör Kayıt Sil</Dropdown.Item>
            <Dropdown.Item as={NavLink} to={"/login/student/setMessage"}>Antrenör mesaj gönder</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Planları listele</Menu.Item>
      </Menu>
    </div>
  );
}
