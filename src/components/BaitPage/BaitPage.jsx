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
            <h2>Effective Baits:</h2>
            {baits.map((baits, index)=>
              <div className="container">
                <div className="Item">
                  <h3>{baits.name}</h3>
                  <img className="baitImage" key={index} src={baits.image_path}/>
                </div>
                <div>
                  <p><strong>Type:</strong> {baits.type}</p>
                  <p><strong>Style:</strong> {baits.style}</p>
                  <p><strong>Example Bait:</strong> "{baits.example}"</p>
                </div>
              </div>
            )}
        </div>
        </>
    );
}

export default BaitPage;