import React from "react";
import { Header, Segment } from 'semantic-ui-react'

export default function LoginText() {
  return (
    <div>
      <Header as="h2" attached="top">
        FitLife - Online Fitness Koçluğu
      </Header>
      <Segment attached>
      FitLife, sağlıklı yaşamı bir adım öteye taşımak isteyen herkes için özel olarak tasarlanmış bir online fitness koçluğu platformudur. Sağlıklı bir yaşam tarzına adım atmak, fiziksel ve zihinsel sağlığınızı geliştirmek, formda kalmak ve daha fazla enerji elde etmek istiyorsanız, doğru yerdesiniz!
      </Segment>
    </div>
  );
}
