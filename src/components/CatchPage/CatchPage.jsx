import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function CatchPage() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch( { type: 'FETCH_CATCH'})
    }, [] );
    // access catches through use selector
    const catches = useSelector ( ( store )=>{
        return store.catches
    })

    return (
        <>
          {JSON.stringify( catches )}
        </>
    );
}

export default CatchPage;