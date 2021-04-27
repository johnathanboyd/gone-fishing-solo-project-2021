import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FishPage() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( { type: 'FETCH_LAKES'} )  
  }, [] );

  // access the lakes through our selector
const lakes = useSelector ( ( store )=>{
  return store.lake
})

  return (
    <div className="container">
      <p>Info Page</p>
      <p>
        {JSON.stringify( lakes )}
      </p>
    </div>
  );
}

export default FishPage;
