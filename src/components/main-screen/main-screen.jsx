import React from 'react';
import PageHeader from '../page-header/page-header';
import TrainingBlock from '../training-block/training-block';

function MainScreen(props) {
  return (
    <React.Fragment>
      <PageHeader />
      <TrainingBlock />
    </React.Fragment>
  );
}

export default MainScreen;
