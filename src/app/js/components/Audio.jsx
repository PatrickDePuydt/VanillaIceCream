import React, { Component } from 'react';

const Audio = () => {
  return (
    <div>
	    <div id="playAudio" className="container">
	    	<h2>Audio Methods</h2>

	   		<div>
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
    </div> 
  );
};

export default Audio;