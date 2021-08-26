import React from 'react';
import PageHeader from '../page-header/page-header';
import Message from '../message/message';
import TrainingBlock from '../training-block/training-block';

const text = 'Пребывание на территориях национальных парков (за исключением участков, расположенных в границах населенных пунктов) физических лиц, не являющихся работниками федеральных государственных бюджетных учреждений, осуществляющих управление национальными парками, должностными лицами федерального органа исполнительной власти, в ведении которого находятся национальные парки, допускается только при наличии разрешения федерального государственного бюджетного учреждения, осуществляющего управление национальным парком, или федерального органа исполнительной власти, в ведении которого находятся национальные парки';

const message = 'Начните печатать, когда будете готовы!';

const user = 'Anna';

function MainScreen(props) {
  return (
    <React.Fragment>
      <PageHeader user={user} isMain/>
      <main>
        <Message>{message}</Message>
        <TrainingBlock>{text}</TrainingBlock>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
