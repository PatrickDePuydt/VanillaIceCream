 
  function playAudio(event) {

    const audioSource = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
      if (!audioSource) { // If There's No Audio...

        console.error(`You pressed "${event.key}", but there's no <audio> HTML tag source found with "${event.key}"'s key code: "${event.keyCode}". This usually means the document selector is looking for the wrong element, or there hasn't been any HTML written yet to correspond to this key press.`)

        return; // Stop the function from running alltogether
      }
      
      audioSource.currentTime = 0; // Rewind to the start. this allows more audio to be played instead of waiting for the audio file to finish.
      
      audioSource.play(); // Play The Audio
    }

    // const keys = document.querySelectorAll('.key');

    // function removeTransition(event) {

    // if (event.propertyName !== 'transform') return; // Skip it if it's not a transform

    // this.classList.remove('playing');
    // }

  // Listen for when the CSS animation end event happens, then remove the transition.
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playAudio);