import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import FishPage from '../FishPage/FishPage';
import FishForm from '../FishForm/FishForm';

function UserPage() {
  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const catches = useSelector((store) => store.catches);

  // this following section is for building out logic that will be moved to a separate container! DONT FORGET!!!!


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
        <div>  
         <FishForm />
         <FishPage />
        </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
