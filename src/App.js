// DO NOT DELETE

import React, { useState } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg");

  function changeImage() {
    setDogUrl("https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20200205_163615.jpg");
  }
  
  function getImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then((result) => {
        setDogUrl(result.message);
      });
  }
  return (
    <div>
      <header>TechTrain</header>
      <p>犬の画像</p>
      <button onClick={getImage}>click to change image</button>
      <img src={dogUrl} alt="" />
    </div>
  )
}
