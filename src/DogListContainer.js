// DO NOT DELETE
import React, { useState, useEffect } from 'react';
export function DogListContainer(props) {
    const [breeds, setBreeds] = useState(0);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then((result) => {
                setBreeds(result.message);
            });
    },[])
}