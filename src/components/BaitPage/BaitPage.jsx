import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function BaitPage() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( { type: 'FETCH_BAITS'})
    }, [] );


    // access catches through use selector
    const baits = useSelector ( ( store )=>{
        return store.bait
    })

    return (
        <>
        {baits.map((baits, index)=><img  key={index} src={baits.image_path}/>)}
        </>
    );
}

export default BaitPage;