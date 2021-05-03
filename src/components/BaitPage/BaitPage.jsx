import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom';
import './BaitPage.css'
function BaitPage() {
    const dispatch = useDispatch();
    const params = useParams();


    // access catches through use selector
    const baits = useSelector ( ( store )=>{
        return store.specificBait
    })


    return (
        <>
        <div className="BaitCard">
            {baits.map((baits, index)=>
              <>
                <div className="Item">
                  <h4>{baits.name}</h4>
                  <img className="baitImage" key={index} src={baits.image_path}/>
                </div>
                <div>
                  <p><strong>Type:</strong> {baits.type}</p>
                  <p><strong>Style:</strong> {baits.style}</p>
                  <p><style>Example Bait:</style> "{baits.example}"</p>
                </div>
              </>
            )}
        </div>
        </>
    );
}

export default BaitPage;