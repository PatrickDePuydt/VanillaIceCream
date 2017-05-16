![Vanilla Ice Cream](https://raw.githubusercontent.com/PatrickDePuydt/VanillaIceCream/master/src/app/images/icecream256.png)
# Vanilla Ice Cream
Plain Vanilla Js Functions & Methods

### Available Methods

### Audio
___
## .playAudio(event)
Fires a sound or audio file on keypress.

__Arguments:__ `.playAudio()` accepts __1__ argument: _event_. This is the key event that is passed to the function to grab the key code.

***
##### Step 1: Audio
Upload or add an audio file to you project and remember the `PATH` to this as you'll need to add it to your HTML `<audio></audio>` element as an attribute in step 2.

##### Step 2: HTML
First load the HTML into your DOM using an `<audio></audio>` tag with the source pointing at the audio file.

###### Usage:
```
	<audio data-key="<number>" src="<path/to/sound/file>"></audio>
```

###### Example:
__```
	<audio data-key="65" src="sounds/kickdrum.wav"></audio>
```__


The `'data-key'="<number>"` corresponds to the event key code on the keyboard. To find the keycode, visit [KeyCode.info](keycode.info) and press a key there. For example, the __A__ key is _65_ so they HTML attribute would be `data-key="65"`


##### Step 3: JavaScript
Add an event listener to the page and have it invoke the `.playAudio()` funtion.

```
	window.addEventListener('keydown', playAudio);
```
