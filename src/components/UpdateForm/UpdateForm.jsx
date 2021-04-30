import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function FishForm(){
    const [name, setName] = useState( '' );
    const [scientificName, setScientificName] = useState( '' );

    const dispatch = useDispatch();


    const submitFish = (event) =>{
      event.preventDefault();
      
      dispatch({
        type: 'SUBMIT_FISH',
        payload: {
            name: name,
            scientificName: scientificName
        }
      })
    }
    

    return(
      <form className="formPanel" onSubmit={submitFish}>
        <h2>Submit New Fish</h2>
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
            <input className="btn" type="submit" name="submit" />
        </div>

      </form>
    // <>
    // <input 
    // type="text"
    // value={name}
    // onChange={handleNameChange}
    // placeholder="name"/>
    // <input/>

    // <input/>
    // <button>ADD FISH</button>
    // </>
)
}

export default FishForm