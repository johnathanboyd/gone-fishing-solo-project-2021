import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import './FishItem.css'

function FishItem(props) {
  const params = useParams();
  const history = useHistory();

  const goFishSpecific=(fishId)=>{
    history.push(`/fish/${fishId}`)
  }

    return (
        <div className="fishCard" onClick={()=>goFishSpecific(props.fish.id)}>
          <img className="image" src={props.fish.image_path} />
            <h3>{props.fish.name}</h3>
            <h4>{props.fish.scientific_name}</h4>
        </div>
    );
}

export default FishItem;