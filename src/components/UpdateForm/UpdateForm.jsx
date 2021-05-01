import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';


function UpdateForm(){
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const fish = useSelector( ( store )=>{
      return store.specificFish
    })

    const [name, setName] = useState( '' );
    // const [scientificName, setScientificName] = useState( '' );
    // const [scientificName, setScientificName] = useState( '' );
    // const [image, setImage] = useState( '' );

    const updateFish = (event) =>{
      event.preventDefault();
      console.log(params)
      let updateFish={
        name: name,
        id: fish[0].id
      }
      dispatch({
        type: 'UPDATE_FISH',
        payload: updateFish
          // scientificName: scientificName,
          // image: image,
      })
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
        {/* <div>
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
          <label htmlFor="image">
              Image:
              <input
                type="text"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
          </label>
        </div> */}
        <div>
            <input className="btn" type="submit" name="submit" />
        </div>

      </form>
)
}

export default UpdateForm