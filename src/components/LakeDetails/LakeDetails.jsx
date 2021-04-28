import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function LakeDetails(props) {
   

  return (
    <div>
       <h1>{props.name}</h1>
    </div>
  );
}

export default LakeDetails;
