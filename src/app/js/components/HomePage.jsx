import React, { Component } from 'react';

const HomePage = () => {
  return (
    <div>
	    <div id="mainContainer" className="container">
	    	<img id="iceCream" src="images/icecream256.png" alt="Ice Cream"/>
	    	<h1>Vanilla Js</h1>
	    	<h3>Plain Vanilla Js Methods</h3>
	    </div> 

	    <div id="playAudio" className="container">
	    	<h4>.playAudio()</h4>

	    	<div className="section">
	    		<div className="keys">
	    			
	    			<div data-key="65" className="key">
	    				<kbd>A</kbd>
	    				<span className="sound">clap</span>
	    			</div>
	    			
	    			<div data-key="83" className="key">
	    				<kbd>S</kbd>
	    				<span className="sound">hihat</span>
	    			</div>
	    			
	    			<div data-key="68" className="key">
	    				<kbd>D</kbd>
	    				<span className="sound">kick</span>
	    			</div>
	    			
	    			<div data-key="70" className="key">
	    				<kbd>F</kbd>
	    				<span className="sound">openhat</span>
	    			</div>
	    			
	    		</div>

	    		<audio data-key="65" src="sounds/clap.wav"></audio>
	    		<audio data-key="83" src="sounds/hihat.wav"></audio>
	    		<audio data-key="68" src="sounds/kick.wav"></audio>
	    		<audio data-key="70" src="sounds/openhat.wav"></audio>
	    	</div>
	    </div>
    </div> 
  );
};

export default HomePage;