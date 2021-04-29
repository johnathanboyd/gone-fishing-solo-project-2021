import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import FishPage from '../FishPage/FishPage';
import BaitPage from '../BaitPage/BaitPage';

function Home() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  
  return (
    <div className="container">
      <h2>Welcome,</h2>
      <div>
        <h3>FISH:</h3>
        <FishPage />
        <BaitPage />
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Home;
