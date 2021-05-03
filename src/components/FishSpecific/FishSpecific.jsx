import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import FishSpecificItem from '../FishSpecificItem/FishSpecificItem';
import BaitPage from '../BaitPage/BaitPage';
import './FishSpecific.css'


function FishSpecific(){
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(()=>{
      dispatch({
          type: 'FETCH_SINGLE_FISH',
          payload: params.id
      }),
      dispatch({
          type: 'FETCH_SPECIFIC_BAIT',
          payload: params.id
      })
      //WHERE MY CALL TO MY SAGA NEEDS TO HAPPEN FOR MY BAITS!!!!
  }, [] );

  const fish = useSelector ( ( store )=>{
      return store.specificFish
  })

  return (
      <>
        <div className="info">
        {fish.map( (fish, index)=><FishSpecificItem key ={index} fish={fish}/>)}
        </div>
        <BaitPage />
      </>
  )

}

export default FishSpecific;