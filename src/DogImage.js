// DO NOT DELETE
import React, { useState } from 'react';

export function DogImage(props) {
    console.log("DogImage");
    console.log(props);
    console.log("DogImage");
    return (<img src={props.url} alt="" />);
}
