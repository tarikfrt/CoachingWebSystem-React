import React, { useState } from 'react';
import { Divider, Form, Dropdown, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function CoachUpdatePage() {
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
    coachId:'',
    coachName: '',
    coachSurname: '',
    birthdayYear: '',
    coachEmail: '',
    phoneNumber: '',
    password: '',
    secondPassword: '',
    coachGender: '',
    photoUrl:'',
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      // Form verileri ile backend endpoint'e bir PUT isteği gönder
      await axios.put('http://localhost:8081/api/coaches/put', formData);
      alert('Antrenör başarıyla güncellendi!');
      // Başarılı güncelleme sonrasında isterseniz kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
    } catch (error) {
      console.error('Antrenör güncellenirken hata oluştu:', error);
      alert('Antrenör güncellenirken hata oluştu');
    }
  };

  return (
    <div>
        <h2>Antrenör Güncelle</h2>
      <Form>
      <Form.Field>
          <input type='text' placeholder='Id' name='coachId' value={formData.coachId} onChange={(e) => handleChange(e, { name: 'coachId', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='Ad' name='coachName' value={formData.coachName} onChange={(e) => handleChange(e, { name: 'coachName', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='Soyad' name='coachSurname' value={formData.coachSurname} onChange={(e) => handleChange(e, { name: 'coachSurname', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='Doğum yılı' name='birthdayYear' value={formData.birthdayYear} onChange={(e) => handleChange(e, { name: 'birthdayYear', value: e.target.value })} />
        </Form.Field>
        <Divider />

        <Form.Field>
          <input type='text' placeholder='E-mail' name='coachEmail' value={formData.coachEmail} onChange={(e) => handleChange(e, { name: 'coachEmail', value: e.target.value })} />
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
                name='coachGender'
                value={formData.coachGender} // Düzeltildi: formData.studentGender -> formData.coachGender
                onChange={(e, { value }) => handleChange(e, { name: 'coachGender', value })}
              />
              
            </GridColumn>
            <GridColumn width={4}>
              <Dropdown
                placeholder='Uzmanlık Alanını Seçin'
                selection
                options={planOptions}
                name='coachPlan'
                value={formData.coachPlan}
                onChange={(e, { value }) => handleChange(e, { name: 'coachPlan', value })}
              />
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
