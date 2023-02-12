// DO NOT DELETE

import React, { useState } from 'react';
import './App.css';
import { Header } from './Header.js';
import { Description } from './Description.js';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header/>
      <Description/>
    </div>
  )
}
