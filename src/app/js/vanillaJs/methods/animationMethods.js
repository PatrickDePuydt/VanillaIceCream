export function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('animating');
}

const cantidates = document.querySelectorAll('.key');	

const removeButton = document.getElementById('remove');


console.log(removeButton);


// keys.forEach(key => key.addEventListener('transitionend', removeTransition));