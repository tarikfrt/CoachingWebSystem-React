import React from "react";
import { Header, Segment } from 'semantic-ui-react'
import LoginText from "./LoginText";

export default function Information() {
  return (
    <div>
      <LoginText/>
      <Header as="h2" attached="top">
        Neden FitLife?
      </Header>
      <Segment attached>
        FitLife, sadece spor salonunda geçirilen saatleri değil, aynı zamanda
        günlük yaşamınızı şekillendirmeyi amaçlayan bir yaklaşım sunar. Online
        fitness koçlarımız, sizin hedeflerinize uygun kişiselleştirilmiş
        egzersiz programları ve beslenme rehberleri oluşturarak, size en uygun
        şekilde ilerlemenize yardımcı olur. Bu, sadece bedeninizi değil, aynı
        zamanda yaşam tarzınızı olumlu bir şekilde etkileyerek gerçek ve kalıcı
        değişikliklere yol açar.
      </Segment>
      <Header as="h2" attached="top">
        FitLife'ın Sunduğu Avantajlar:
      </Header>
      <Segment attached>
        <Header>Kişisel Egzersiz Programları</Header> Size özel olarak hazırlanan egzersiz
        programları ile hedeflerinize ulaşmak için doğru adımları atın. 

        <Header>Uzman Online Koçluk</Header>Alanında uzman online koçlarımız, size her adımda
        rehberlik eder ve motivasyonunuzu yüksek tutar. 

        <Header>Esneklik ve Konfor</Header>FitLife ile fitness programınızı kendi evinizde veya istediğiniz
        herhangi bir yerde uygulayabilirsiniz. Esneklik sizin kontrolünüzde!

        <Header>Düzenli Takip ve Geri Bildirim</Header>İlerlemenizi düzenli olarak takip eder,
        başarılarınızı kutlar ve gelişim alanlarınızı belirleriz. 

        <Header>Beslenme Rehberliği</Header>Sadece egzersiz değil, aynı zamanda doğru beslenme ile de
        hedeflerinize ulaşmanıza destek oluyoruz.
      </Segment>
      <Segment attached>
        FitLife ile daha sağlıklı, daha fit ve daha mutlu bir yaşama adım atın.
        Hemen üye olun, kişiselleştirilmiş bir fitness deneyimiyle tanışın ve
        gerçek değişimleri keşfedin! Sağlıklı günler dileriz, FitLife Ekibi
      </Segment>
    </div>
  );
}
