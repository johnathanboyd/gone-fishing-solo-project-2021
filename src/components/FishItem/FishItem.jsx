import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function FishItem(props) {

    return (
        <>
          <img className="image" src={props.fish.image_path}></img>
          <li>{props.fish.name}, {props.fish.scientific_name}</li>  
        </>
    );
}

export default FishItem;