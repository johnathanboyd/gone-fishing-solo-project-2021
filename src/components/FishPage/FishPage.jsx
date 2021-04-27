import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FishPage() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( { type: 'FETCH_FISH'} )  
  }, [] );

  // access the lakes through our selector
const fish = useSelector ( ( store )=>{
  return store.fish
})

  return (
    <div className="container">
      <p>Fish Page</p>
     <p>
       {JSON.stringify( fish )}
     </p>
    </div>
  );
}

export default FishPage;
