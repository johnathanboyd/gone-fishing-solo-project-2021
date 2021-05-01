import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FishItem from '../FishItem/FishItem';
import {useParams} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function FishPage() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(()=>{
    dispatch( { type: 'FETCH_FISH'} )  
  }, [] );

  // access the lakes through our selector
const fish = useSelector ( ( store )=>{
  return store.fish
})

  return (
    <div className="container">
      <h2>Fish Page</h2>
     <div>
       {fish.map( (fish, index )=><FishItem key={index} fish={fish}/>)}
     </div>
    </div>
  );
}

export default FishPage;
