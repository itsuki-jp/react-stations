// DO NOT DELETE
import React, { useState } from 'react';
import { DogImage } from './DogImage.js';

export function Description(props) {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg");

    function getImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then((result) => {
                setDogUrl(result.message);
            });
    }
    return (
        <div>
            <p>犬の画像（サイトの説明）</p>
            <button onClick={getImage}>click to change image</button>
            <DogImage url={dogUrl } />
        </div>
    );
}