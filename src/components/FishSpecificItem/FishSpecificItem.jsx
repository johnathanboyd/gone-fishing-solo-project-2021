import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import BaitPage from '../BaitPage/BaitPage';
import Dropdown from '../Dropdown/Dropdown';
import './FishSpecificItem.css'

function FishSpecificItem(props) {
  const params = useParams();
  const history = useHistory();
  const user = useSelector( ( store )=> store.user);
  if(user.id){
    return (
        <>
          <img className="fishImage" src={props.fish.image_path}/>
          <Dropdown title='update'/>
          <h1>{props.fish.name}</h1>
          <h2><em>{props.fish.scientific_name}</em></h2>
          <p>{props.fish.description}</p>
          <h3>Natural Diet</h3>
          <p>{props.fish.forage}</p>  
          <h2>Effective Baits: </h2> 
        </>
    );
  }
  else {
    return (
      <>
      <img className="fishImage" src={props.fish.image_path}/>      
      <h1>{props.fish.name}</h1>
      <h2><em>{props.fish.scientific_name}</em></h2>
      <p>{props.fish.description}</p>
      <h3>Natural Diet</h3>
      <p>{props.fish.forage}</p>

      <h2>Effective Baits:</h2> 
    </>
    )
  }
}

export default FishSpecificItem;