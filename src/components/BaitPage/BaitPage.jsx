import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom';

function BaitPage() {
    const dispatch = useDispatch();
    const params = useParams();

    // access catches through use selector
    const baits = useSelector ( ( store )=>{
        return store.specificBait
    })

    return (
        <>
        {baits.map((baits, index)=><img  key={index} src={baits.image_path}/>)}
        </>
    );
}

export default BaitPage;