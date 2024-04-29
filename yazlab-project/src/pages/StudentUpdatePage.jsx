import React, { useState } from 'react';
import { Divider, Form, Dropdown, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function StudentUpdatePage() {
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
    studentId:'',
    studentName: '',
    studentSurname: '',
    birthdayYear: '',
    studentEmail: '',
    phoneNumber: '',
    password: '',
    secondPassword: '',
    studentGender: '',
    photoUrl:'',
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      // Form verileri ile backend endpoint'e bir PUT isteği gönder
      await axios.put('http://localhost:8081/api/students/put', formData);
      alert('Öğrenci başarıyla güncellendi!');
      // Başarılı güncelleme sonrasında isterseniz kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
    } catch (error) {
      console.error('Öğrenci güncellenirken hata oluştu:', error);
      alert('Öğrenci güncellenirken hata oluştu');
    }
  };

  return (
    <div>
        <h2>Danışan Güncelle</h2>
      <Form>
      <Form.Field>
          <input type='text' placeholder='Id' name='studentId' value={formData.studentId} onChange={(e) => handleChange(e, { name: 'studentId', value: e.target.value })} />
        </Form.Field>
        <Divider />

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

        <Form.Field>
          <input type='text' placeholder='Photo URL' name='photoUrl' value={formData.photoUrl} onChange={(e) => handleChange(e, { name: 'photoUrl', value: e.target.value })} />
        </Form.Field>
        <Divider />

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
              
            </GridColumn>
            <GridColumn>
              <Button color='orange' onClick={handleRegister}>
                Güncelle
              </Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Form>
    </div>
  );
}
