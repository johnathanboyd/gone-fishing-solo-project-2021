import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import FishItem from '../FishItem/FishItem';

function FishSpecific(){
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(()=>{
      dispatch({
          type: 'FETCH_SINGLE_FISH',
          payload: params.id
      })
  })

  const fish = useSelector ( ( store )=>{
      return store.specificFish
  })

  return (
      <>
        <h2>SPECIFIC FISH</h2>
        <p>
          {JSON.stringify(fish)}
        </p>
      </>
  )

}

export default FishSpecific;