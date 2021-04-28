import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import CatchPage from '../CatchPage/CatchPage';
import Dropdown from '../Dropdown/Dropdown';

function UserPage() {
  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const catches = useSelector((store) => store.catches);

  // this following section is for building out logic that will be moved to a separate container! DONT FORGET!!!!
  let sendCatch = (catchInfo) => {
    catchInfo = {
      user: user.id,
      catches: catches
    }
    dispatch( {type: 'ADD_CATCH', payload: catchInfo})
  }
  // end to be moved to separate container

  //temp list//
  const fish = [
    {
      id:1,
      value: 'Bass'
    },
    {
      id:2,
      value: 'Perch'
    },
    {
      id:3,
      value: 'Bluegill'
    },
  ];
  //to be deleted//

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
        <div>  
          <h3>MY CATCHES:</h3>
          <CatchPage /> 
          <Dropdown title="Fish Type" items={fish}/>
        
        </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
