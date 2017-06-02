import React, { Component } from 'react';
import Audio from './Audio.jsx';
import Transitions from './Transitions.jsx';

const HomePage = () => {
  return (
    <div>
	    <div id="mainContainer" className="container">
	    	<img id="iceCream" src="images/icecream256.png" alt="Ice Cream"/>
	    	<h1>Vanilla Js</h1>
	    	<h3>Plain Vanilla Js Methods</h3>
	    </div> 
	    
	    <Audio />
	    
	    <Transitions />
    </div>

  );
};

export default HomePage;