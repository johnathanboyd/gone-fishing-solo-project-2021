import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

function FishItem(props) {
  const params = useParams();
  const history = useHistory();

  const goFishSpecific=(fishId)=>{
    history.push(`/fish/${fishId}`)
  }

    return (
        <>
          <img className="image" src={props.fish.image_path} onClick={()=>goFishSpecific(props.fish.id)}/>
          <li>{props.fish.name}, {props.fish.scientific_name}</li>  
        </>
    );
}

export default FishItem;