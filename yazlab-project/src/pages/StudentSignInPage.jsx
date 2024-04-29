import React, { useState } from 'react';
import { Divider, Form, Dropdown, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function StudentSignInPage() {
  const genderOptions = [
    { key: 'Erkek', text: 'Erkek', value: 'Erkek' },
    { key: 'Kadın', text: 'Kadın', value: 'Kadın' },
  ];

  const planOptions = [
    { key: 'KiloAlma', text: 'Kilo Alma', value: 'Kilo Alma' },
    { key: 'KiloVerme', text: 'Kilo Verme', value: 'Kilo Verme' },
    { key: 'KiloyuKoruma', text: 'Kiloyu Koruma', value: 'Kiloyu Koruma' },
    { key: 'KasKazanma', text: 'Kas Kazanma', value: 'Kas Kazanma' },
  ];

  const [formData, setFormData] = useState({
    studentName: '',
    studentSurname: '',
    birthdayYear: '',
    studentEmail: '',
    phoneNumber: '',
    password: '',
    secondPassword: '',
    studentGender: '',
    studentPlan: '',
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      // Send a POST request to your backend endpoint
      await axios.post('http://localhost:8081/api/students/add', formData);
      alert('Student registered successfully!');
      // You may choose to redirect the user to another page after successful registration
    } catch (error) {
      console.error('Error registering student:', error);
      alert('Error registering student');
    }
  };

  return (
    <div>
      <h2>Danışan Kaydol</h2>
      <Form>
        <Form.Field>
          <input type='text' placeholder='Ad' name='studentName' value={formData.studentName} onChange={(e) => handleChange(e, { name: 'studentName', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='Soyad' name='studentSurname' value={formData.studentSurname} onChange={(e) => handleChange(e, { name: 'studentSurname', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='Doğum yılı' name='birthdayYear' value={formData.birthdayYear} onChange={(e) => handleChange(e, { name: 'birthdayYear', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='E-mail' name='studentEmail' value={formData.studentEmail} onChange={(e) => handleChange(e, { name: 'studentEmail', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='Telefon no' name='phoneNumber' value={formData.phoneNumber} onChange={(e) => handleChange(e, { name: 'phoneNumber', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='password' placeholder='Şifre' name='password' value={formData.password} onChange={(e) => handleChange(e, { name: 'password', value: e.target.value })} />
        </Form.Field>

        <Form.Field>
          <input type='password' placeholder='Yedek Şifre' name='secondPassword' value={formData.secondPassword} onChange={(e) => handleChange(e, { name: 'secondPassword', value: e.target.value })} />
        </Form.Field>

        <Grid>
          <GridRow>
            <GridColumn width={4}>
              <Dropdown
                placeholder='Cinsiyet Seçin'
                selection
                options={genderOptions}
                name='studentGender'
                value={formData.studentGender}
                onChange={(e, { value }) => handleChange(e, { name: 'studentGender', value })}
              />
            </GridColumn>
            
            <GridColumn width={4}>
              <Dropdown
                placeholder='Plan Seçin'
                selection
                options={planOptions}
                name='studentPlan'
                value={formData.studentPlan}
                onChange={(e, { value }) => handleChange(e, { name: 'studentPlan', value })}
              />
            </GridColumn>
            <GridColumn>
              <Button primary onClick={handleRegister}>
                Kayıt Ol
              </Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Form>
    </div>
  );
}
