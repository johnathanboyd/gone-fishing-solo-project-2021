import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import BaitPage from '../BaitPage/BaitPage';
import Dropdown from '../Dropdown/Dropdown';

function FishSpecificItem(props) {
  const params = useParams();
  const history = useHistory();
  const user = useSelector( ( store )=> store.user);
  if(user.id){
    return (
        <>
          <Dropdown title='update'/>
          <h1>{props.fish.name}</h1>
          <h3>{props.fish.scientific_name}</h3>  
          <img className="fishImage" src={props.fish.image_path}/>
        </>
    );
  }
  else {
    return (
      <>
      <h1>{props.fish.name}</h1>
      <h3>{props.fish.scientific_name}</h3>  
      <img className="fishImage" src={props.fish.image_path}/>      
    </>
    )
  }
}

export default FishSpecificItem;