import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LakeDetails from '../LakeDetails/LakeDetails';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function LakeList() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( { type: 'FETCH_LAKES'} )  
  }, [] );

  // access the lakes through our selector
const lake = useSelector ( ( store )=>{
  return store.lake
})

  return (
    <div className="container">
        {lake.map( (lakeData, i) => 
          //<LakeDetails key={i} lakeData={lakeData} />
          <Link to="/lakes/">
          <li>{lakeData.name}</li>
          </Link>
        // )}
        )}
    </div>
  );
}

export default LakeList;
