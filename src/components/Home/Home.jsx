import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import FishPage from '../FishPage/FishPage';
import BaitPage from '../BaitPage/BaitPage';
import './Home.css'

function Home() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  
  return (
    <div className="container">
      <div className="coverImage">
      </div>
      <div>
        <h3>What would you like to catch?</h3>
        <FishPage />
        
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Home;
