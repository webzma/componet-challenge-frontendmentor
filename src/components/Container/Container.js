import React from 'react';
import { Result } from '../ResultComponent/Result';
import { Summary } from '../SummaryComponent/Summary';
import './Container.css';

function Container() {
  return (
    <div className='Container'>
      <Result />
      <Summary />
    </div>
  );
}

export default Container;
