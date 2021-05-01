import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import FishSpecificItem from '../FishSpecificItem/FishSpecificItem';

function FishSpecific(){
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(()=>{
      dispatch({
          type: 'FETCH_SINGLE_FISH',
          payload: params.id
      })
  }, [] );

  const fish = useSelector ( ( store )=>{
      return store.specificFish
  })

  return (
      <>
        {fish.map( (fish, index)=><FishSpecificItem key ={index} fish={fish}/>)}
      </>
  )

}

export default FishSpecific;