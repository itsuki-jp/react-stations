// DO NOT DELETE
import React, { useState } from 'react';
import { DogImage } from './DogImage.js';

export function BreedsSelect(props) {
    const [selected, setSelected] = useState("affenpinscher");
    const [dogImages, setDogImages] = useState([""]);
    function handleChange(e) {
        setSelected(e.target.value);
    }
    function changeImg() {
        const url = "https://dog.ceo/api/breed/" + selected + "/images/random/12";
        fetch(url)
            .then(res => res.json())
            .then(res => setDogImages(res.message));
        console.log(dogImages);
    }
    return (
        <div>
            <select value={selected} onChange={handleChange}>
                {props.breeds.map(name => { return <option key={name} value={name}>{name}</option> })}
            </select>
            <button onClick={changeImg}>表示</button>
            {dogImages.map((url) =>
                <DogImage url={url} />
            )
            }
        </div>
    );
}