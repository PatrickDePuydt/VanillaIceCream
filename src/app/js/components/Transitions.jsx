import React, { Component } from 'react';

const Audio = () => {
  return (
    <div>
	    <div id="playAudio" className="container">
	    	<h2>Transition Methods</h2>

	    	<div className="spacing"></div>
	   		
	   		<div>
		    	<h4>.removeAnimation()</h4>
		    	<div className="section">
		    		<div className="textArea">
		    			
		    			<p>
		    			The <span className="hilight">path of the righteous man</span> is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, <span className="hilight">shepherds the weak through the valley of darkness</span>, for he is truly his brothers keeper and the finder of lost children. And I will strike down upon thee with great <span className="hilight">vengeance and furious anger</span> those who would attempt to poison and destroy My brothers. And you will know <span className="hilight">My name is the Lord</span> when I lay My vengeance upon thee.
		    			</p>
		    			<button className="animationButton" id="remove" className="btn btn-warning">Remove Hilights</button>
		    			<button className="animationButton" id="add" className="btn btn-primary">Add Hilights</button>
		    		</div>
		    	</div>
	    	</div>
	    </div>
    </div> 
  );
};

export default Audio;