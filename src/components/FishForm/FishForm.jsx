import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function FishForm(){
    const dispatch = useDispatch();

    const [name, setName] = useState( '' );

    let handleNameChange = (event) =>{
        setName(event.target.value)
    }
    // let addName = ( string ) =>{
    //     dispatch( { type:})
    // }

    return(
    <>
    <input 
    type="text"
    value={name}
    onChange={handleNameChange}
    placeholder="name"/>
    <input/>

    <input/>
    <button>ADD FISH</button>
    </>
)
}

export default FishForm