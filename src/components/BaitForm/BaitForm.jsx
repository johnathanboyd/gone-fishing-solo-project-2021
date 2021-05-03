import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function BaitForm(){
    const [name, setName] = useState( '' );
    const [type, setType] = useState( '' );
    const [style, setStyle] = useState( '' );
    const [depth, setDepth] = useState ( '' );
    const [season, setSeason] = useState ( '' );
    const [image, setImage] = useState( '' );
    const [example, setExample] = useState( '' );
    const [retrieval, setRetrieval] = useState( '' );
    const [description, setDescription] = useState( '' );
    

        const dispatch = useDispatch;

        const submitBait = (event) =>{
            event.preventDefault();

            dispatch({
                type: 'SUBMIT_BAIT',
                payload: {
                    name: name,
                    type: type,
                    style: style,
                    depth: depth,
                    season: season,
                    image: image,
                    example: example,
                    retrieval: retrieval,
                    description: description,
                }
            })
        }
        return(
            <form className="formPanel" onSubmit={submitBait}>
        <h2>Submit New Bait</h2>
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
          <label htmlFor="type">
              Type:
              <input
                type="text"
                name="type"
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="style">
              Style:
              <input
                type="text"
                name="style"
                value={style}
                onChange={(event) => setStyle(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="depth">
              Depth:
              <input
                type="text"
                name="Depth"
                value={depth}
                onChange={(event) => setDepth(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="season">
              Season:
              <input
                type="text"
                name="season"
                value={season}
                onChange={(event) => setSeason(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="image">
              Image Url:
              <input
                type="text"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="example">
              Example:
              <input
                type="text"
                name="example"
                value={example}
                onChange={(event) => setExample(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="retrieval">
              Retrieval:
              <input
                type="text"
                name="retrieval"
                value={retrieval}
                onChange={(event) => setRetrieval(event.target.value)}
              />
          </label>
        </div>
        <div>
          <label htmlFor="retrieval">
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
            <input className="btn" type="submit" name="submit" />
        </div>

      </form>
        )
}

export default BaitForm;