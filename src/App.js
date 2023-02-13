// DO NOT DELETE

import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header/>
      <Description />
      <DogListContainer/>
    </div>
  )
}
