/* 
  This Function Requires an event listener be added to the window like so 
  `window.addEventListener('keydown', playAudio);`
  
  It then needs to extract 

  */

 
  function playAudio(event) {
    console.log(event.keyCode, 'Key Press');

    const audioSource = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    // const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
      if (!audioSource)
        return; // Stop the function from running alltogether
      
      audioSource.currentTime = 0; // Rewind to the start 
      
      audioSource.play();
      
      // key.classList.add('playing'); // JS eqivalent to jQ $().addClass(); 
    }

    // const keys = document.querySelectorAll('.key');

    // function removeTransition(event) {

    // if (event.propertyName !== 'transform') return; // Skip it if it's not a transform

    // this.classList.remove('playing');
    // }

  // Listen for when the CSS animation end event happens, then remove the transition.
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playAudio);