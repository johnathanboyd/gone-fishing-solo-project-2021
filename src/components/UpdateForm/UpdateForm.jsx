import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useHistory, Link} from 'react-router-dom';


function UpdateForm(){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const fish = useSelector( ( store )=>{
      return store.specificFish
    })

    const [name, setName] = useState( fish[0].name );
    const [scientificName, setScientificName] = useState( fish[0].scientific_name );
    const [description, setDescription] = useState( fish[0].description );
    const [image, setImage] = useState( fish[0].image_path );
    const [forage, setForage] = useState( fish[0].forage );

    const updateFish = (event) =>{
      event.preventDefault();
      console.log(params)
      let updateFish={
        name: name,
        scientificName: scientificName,
        description: description,
        forage: forage,
        image: image,
        id: fish[0].id
      }
      dispatch({
        type: 'UPDATE_FISH',
        payload: updateFish
          // scientificName: scientificName,
          // image: image,
      })
     }
    const goHome =() =>{
      history.push('/home');
    }
    

    return(
      <form className="formPanel" onSubmit={updateFish}>
        <h2>UpdateFish</h2>
        <div>
          <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="scientificName">
              Scientific Name:
              <input
                type="text"
                name="scientificName"
                value={scientificName}
                onChange={(event) => setScientificName(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="description">
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="forage">
              Natural Forage:
              <input
                type="text"
                name="Forage"
                value={forage}
                onChange={(event) => setForage(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="image">
              Image:
              <input
                type="text"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" />  
        </div>

      </form>
)
}

export default UpdateForm