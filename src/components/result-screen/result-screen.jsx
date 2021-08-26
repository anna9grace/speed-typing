import React from 'react';
import PageHeader from '../page-header/page-header';

const user = 'Anna';


function ResultScreen(props) {
  return (
    <React.Fragment>
      <PageHeader user={user}/>
      <main>
        <div>result screen</div>
      </main>
    </React.Fragment>
  );
}

export default ResultScreen;
