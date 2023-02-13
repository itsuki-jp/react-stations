// DO NOT DELETE
import React, { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';
export function DogListContainer(props) {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(0);
    useEffect(() => {
        console.log("======================")
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => { return res.json() })
            .then(res => {
                setBreeds(Object.keys(res.message));
            })
    }, []);
    return (
        <BreedsSelect breeds={breeds} />
    );
}