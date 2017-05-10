# Vanilla Ice Cream
Plain Vanilla Js Functions & Methods

### Available Methods

### Audio
___
## .playAudio(event)
Fires a sound or audio file on keypress.

__Arguments:__ `.playAudio()` accepts __1__ argument: _event_. This is the key event that is passed to the function to grab the key code.

***
__Invoking:__

##### Step 1: HTML
First load the HTML into your DOM using an `<audio>` tag with the source pointing at the audio file.

###### Usage:
```
	<audio data-key="<number>" src="<path/to/sound/file>"></audio>
```

###### Example:
__```
	<audio data-key="65" src="sounds/kickdrum.wav"></audio>
```__


The `'data-key'="<number>"` corresponds to the event key code on the keyboard. To find the keycode, visit [KeyCode.info](keycode.info) and press a key there. For example, the a key is _65_ so they HTML attribute would be `data-key="65"`


##### Step 2: JavaScript
Add an event listener to the page and have it invoke the `.playAudio()` funtion.

```
	window.addEventListener('keydown', playAudio);
```
