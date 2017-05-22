export function playAudio(event) {

  const audioSource = document.querySelector(`audio[data-key="${event.keyCode}"]`); // Listen for A Key Presss
  
    if (!audioSource) { // If There's No Audio...

      console.log(`%c Holy smokes, error! 😬 You pressed "${event.key}", but there's no <audio> HTML tag source found with "${event.key}"'s key code: "${event.keyCode}". This usually means the document selector is looking for the wrong element, or there hasn't been any HTML written yet to correspond to this key press. See the stack trace below to find the method this error message comes from.`, `background:gold; color: black;`);

  	console.trace('%c 🔎 Stack Trace: ', 'background:orange;');

      return; // Stop the function from running alltogether
    }
    
    audioSource.currentTime = 0; // Rewind to the start. this allows more audio to be played instead of waiting for the audio file to finish.
    
    audioSource.play(); // Play The Audio
  }

